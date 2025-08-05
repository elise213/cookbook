"use client";
import { useParams, useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { Context } from "../../context/appContext";
import "./recipe.css";
import Navbar from "@/app/components/Navbar";
import Swal from "sweetalert2";

const Recipe = () => {
  const { store } = useContext(Context);
  const { id } = useParams();
  const lang = store.lang;
  const isArabic = lang === "ar";
  const router = useRouter();
  const recipe = store.recipes.find((r) => r.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!id || !recipe)
    return (
      <div className="recipe-not-found">
        {isArabic ? "الوصفة غير موجودة" : "Recipe not found."}
      </div>
    );

  const handlePrint = () => {
    Swal.fire({
      title: isArabic ? "كيف تريد الطباعة؟" : "How would you like to print?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: isArabic ? "مع الصور" : "With Pictures",
      denyButtonText: isArabic ? "بدون صور" : "Without Pictures",
      cancelButtonText: isArabic ? "إلغاء" : "Cancel",
    }).then((result) => {
      const images = document.querySelectorAll(".recipe-image");
      images.forEach((img) => img.classList.remove("hide-image"));

      if (result.isDenied) {
        images.forEach((img) => img.classList.add("hide-image"));
      }

      // 🛠 Wait until modal closes before printing
      setTimeout(() => {
        requestAnimationFrame(() => {
          Swal.close(); // force-close if needed
          setTimeout(() => window.print(), 200);
        });
      }, 200);
    });
  };

  return (
    <>
      <Navbar />

      <p className="print-button" onClick={handlePrint} aria-label="Print">
        🖨️ {isArabic ? "طباعة الوصفة" : "Print This Recipe"}
      </p>
      <p className="back-button" onClick={() => router.push("/recipes")}>
        {isArabic ? "العودة إلى كتاب الوصفات" : "← Back to Recipe Book"}
      </p>

      <main className={`recipe-page ${isArabic ? "arabic" : "english"}`}>
        <div className="print-wrapper printable">
          <article className="recipe-container ">
            <h1 className="recipe-title">{recipe.title[lang]}</h1>

            <section className="meta-row">
              <div className="meta-item">
                <img
                  src={store.icons.servings}
                  alt="Servings"
                  className="meta-icon"
                />
                <span className="meta-text">
                  {isArabic
                    ? `${recipe.servings} حصص`
                    : `${recipe.servings} servings`}
                </span>
              </div>

              <div className="meta-item dotted">
                <img src={store.icons.alarm} alt="Time" className="meta-icon" />
                <span className="meta-text">
                  {isArabic ? `${recipe.hours} ساعات` : `${recipe.hours} hours`}
                </span>
              </div>

              <div className="meta-item">
                <img
                  src={
                    recipe.method.en === "bake"
                      ? store.icons.bake
                      : store.icons.noBake
                  }
                  alt="Method"
                  className="meta-icon"
                />
                <span className="meta-text">
                  {recipe.method?.[lang] || recipe.method?.en || ""}
                </span>
              </div>
            </section>

            <section className="recipe-row-orcol">
              <div>
                {recipe.description && (
                  <p className="description-text">
                    {typeof recipe.description === "object"
                      ? recipe.description[lang] || recipe.description.en
                      : recipe.description}
                  </p>
                )}
                <section className="ingredients-section">
                  <h2 className="heading">
                    {isArabic ? "المكونات" : "Ingredients"}
                  </h2>
                  <ul>
                    {recipe.ingredients[lang].map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </section>
              </div>
              <img
                src={recipe.image}
                alt={recipe.title[lang]}
                className="recipe-image"
              />
            </section>

            <section className="directions-section">
              <h2 className="heading">{isArabic ? "الخطوات" : "Directions"}</h2>
              <ol>
                {recipe.directions[lang].map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </section>
          </article>
        </div>
      </main>
    </>
  );
};

export default Recipe;
