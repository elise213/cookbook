"use client";
import { useParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { Context } from "../../context/appContext";
import styles from "../../styles/recipe.css";
import { useRouter } from "next/navigation";

const Recipe = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const lang = store.lang;
  const isArabic = lang === "ar";
  const router = useRouter();
  const recipe = store.recipes.find((r) => r.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!id || !recipe) return <div>Recipe not found.</div>;

  return (
    <div className="recipe-page">
      <div className="lang-toggle-container">
        <button className="lang-toggle" onClick={actions.toggleLang}>
          {isArabic ? "English" : "العربية"}
        </button>
      </div>

      <div className="nav-buttons">
        <button className="back-button" onClick={() => router.push("/study")}>
          {isArabic ? "العودة إلى كتاب الوصفات" : "Back to Recipe Book"}
        </button>

        <div className="print-controls">
          <button
            onClick={() => {
              document
                .querySelectorAll(".recipe-image")
                .forEach((img) => (img.style.display = "block"));
              window.print();
            }}
            className="print-button"
          >
            {isArabic ? "طباعة مع الصور" : "Print with Pictures"}
          </button>

          <button onClick={() => window.print()} className="print-button">
            {isArabic ? "طباعة مع الصور" : "Print"}
          </button>
        </div>
      </div>

      <div className="recipe-container">
        <div className="together">
          <div className={`column ${isArabic ? "arabic" : "english"}`}>
            {!isArabic && <p className=" alt-lang-title">{recipe.title.ar}</p>}
            <p className="recipe-title dotted">{recipe.title[lang]}</p>

            <div className={`meta-row ${isArabic ? "arabic" : "english"}`}>
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
              <div className="meta-item">
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
                  {recipe.method?.[lang] ||
                    recipe.method?.en ||
                    recipe.method ||
                    ""}
                </span>
              </div>
            </div>
          </div>
          <div className="column image">
            <img
              src={recipe.image}
              alt={recipe.title[lang]}
              className="recipe-image"
            />
          </div>
        </div>
        {/* <p className="description">{recipe.description[lang]}</p> */}
        {/* <div className="recipe-grid"> */}
        <div className="together">
          <img src="/img/ing.jpg" alt="Time" className="ingredients-image" />
          <div
            className={`ingredients-section ${isArabic ? "arabic" : "english"}`}
          >
            <p className="heading">{isArabic ? "المكونات" : "Ingredients"}</p>
            <ul>
              {recipe.ingredients[lang].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`together ${isArabic ? "arabic" : "english"}`}
          style={{ flexDirection: "column" }}
        >
          <p className="heading">{isArabic ? "الخطوات" : "Directions"}</p>
          <ol>
            {recipe.directions[lang].map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Recipe;
