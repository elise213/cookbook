"use client";

const storedUser =
  typeof window !== "undefined" ? localStorage.getItem("user") : null;
const parsedUser = storedUser ? JSON.parse(storedUser) : null;

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      user: parsedUser,
      authChecked: !!parsedUser,
      modalIsOpen: false,
      isNavOpen: false,
      showContactModal: false,
      lang:
        typeof window !== "undefined" && localStorage.getItem("lang")
          ? localStorage.getItem("lang")
          : "en",

      content: [],
      icons: {
        bake: "/img/bake.png",
        alarm: "/img/alarm.png",
        servings: "/img/plate.png",
        noBake: "/img/stir.png",
      },

      recipes: [
        {
          id: 1,
          image: "/img/Lotus-Cake.jpg",
          priceType: "pay-what-you-want",
          servings: 6,
          hours: 4.5,
          method: {
            en: "no bake",
            ar: "بدون خبز",
          },
          title: {
            en: "Biscof Lotus Cake",
            ar: "كيك ريشز لوتس",
          },

          description: {
            en: "Lotus Cake is one of the recipes that remind me of my home and my beautiful kitchen in Rafah, the fate of which I do not know. Will I ever return to it again?",
            ar: "يصنعه في العيد الذي يأتي بعد آخر يوم برمضان. ثاني يوم يأتي العيد. كنا في بيوتنا بغزة نصنعه قبل العيد بأربعة أيام. ولكن ضروري يأتي العيد ونحن مجهزينه. هو من طقوس عيد الفطر عنا بفلسطين.",
          },
          ingredients: {
            en: [
              "3 boxes of plain biscuits",
              "80 grams (5.5 tablespoons) of butter",
              "1 large cup of iced water",
              "1 cup (+ 2 tablespoons) of milk",
              "2 tablespoons of sugar",
              "1 box of cream cheese",
              "3 cups whipped topping",
              "1 cup of cream",
              "1 tablespoon of vanilla",
              "2 tablespoons of gelatin",
              "1 jar cookie butter spread",
            ],
            ar: [
              "٣ علب بسكوت ساده",
              "٨٠ غرام زبده",
              "كوب كبير ميه مثلجه",
              "معلقتين حليب",
              "معلقتين سكر",
              "علبه جبنه مثلثات (أي نوع تحبين)",
              "كوز لبن",
              "٣ ظروف دريم ويب",
              "معلقتين جيلاتين بنصف",
              "علبه قشطه",
            ],
          },

          directions: {
            en: [
              "Crush the biscuits, then melt the butter. Add the butter to the biscuits and stir. Pour the biscuits into a tray and freeze for half an hour.",
              "With a whisk, mix the whipped topping, 2 tablespoons of milk, 2 tablespoons of sugar, 1 tablespoon of vanilla, and 1 cup of water.",
              "In a mixer, add the cream, cream cheese, and 1 cup of milk and mix.",
              "Put the first mixture together with the second mixture and mix with an electric mixer.",
              "Dissolve two tablespoons of gelatin in half a cup of boiling water. Add it to step 3 and beat with a whisk again. Now we’ve finished the white layer!",
              "Take the biscuits out of the freezer and pour the white mixture over them. Return them to the refrigerator for 4 hours.",
              "After 4 hours, take the Lotus sauce and make a water bath until it melts (do not let the sauce reach the water line).",
              "Take the white mixture out of the refrigerator and pour the sauce over it. Bon appétit!",
            ],
            ar: [
              "نطحن البسكوت ثم نذوب الزبدة ونضع الزبدة فوق البسكوت ونحرك. نصب البسكوت في صينية ونضعه في الفريزر لمدة تلت ساعة.",
              "الخطوة الأولى: نخلط دريم ويب، معلقتين الحليب، معلقتين السكر، معلقة الفانيلا وكوب الميه بمضرب الحلويات.",
              "الخطوة الثانية: في الخلاط، نضع القشطة والجبنة المثلثات وكوز اللبن ونخلطهم مع بعض.",
              "الخطوة الثالثة: نضع الخليط الأول مع الثاني ونضربهم بالمضرب الكهربائي.",
              "الخطوة الرابعة: نذوب معلقتين جيلاتين بنصف كوب ميه مغلية. نضيفهم للخطوة الثالثة ونضرب مرة أخرى بالمضرب.",
              "نخرج البسكوت من الفريزر ونسكب فوقه الخليط الأبيض، ثم نرجعه إلى الثلاجة لمدة ٤ ساعات.",
              "بعد الأربع ساعات، نحضر صوص اللوتس ونعمل له حمام مائي حتى يذوب. ملاحظة: لا تلمس الماء الصوص لأنه سيتلف.",
              "بعد ما يذوب الصوص، نخرج الخليط الأبيض من الثلاجة ونسكب فوقه الصوص. وكده صحة وهنا!",
            ],
          },
        },
        {
          id: 2,
          image: "/img/Marmoul.jpg",
          priceType: "pay-what-you-want",
          servings: 12,
          hours: 4,
          method: {
            en: "bake",
            ar: "بدون خبز",
          },
          title: {
            en: "Palestinian Marmoul",
            ar: "المرمول الفلسطيني",
          },

          description: {
            en: "Marmoul is part of our Eid traditions in Palestine, especially for Eid al-Fitr, which comes right after the holy month of Ramadan. In Gaza, we used to prepare it four days before Eid to be ready just in time. It’s one of the beautiful rituals that makes Eid feel complete.",
            ar: "يصنعه في العيد الذي يأتي بعد آخر يوم برمضان. ثاني يوم يأتي العيد. كنا في بيوتنا بغزة نصنعه قبل العيد بأربعة أيام. ولكن ضروري يأتي العيد ونحن مجهزينه. هو من طقوس عيد الفطر عنا بفلسطين.",
          },

          ingredients: {
            en: [
              "6 cups semolina",
              "1 cup ghee",
              "1 cup olive oil",
              "1 cup flour",
              "Vanilla",
              "Baking powder",
              "Ground mahlab",
              "Orange blossom water",
              "Rose water",
              "Water (as needed)",
            ],
            ar: [
              "٦ أكواب سميد",
              "١ كوب سمن",
              "١ كوب زيت زيتون",
              "١ كوب طحين",
              "فانيليا",
              "بيكنج باودر",
              "محلب مطحون",
              "ماء زهر البرتقال",
              "ماء الورد",
              "ماء حسب الحاجة",
            ],
          },

          directions: {
            en: [
              "Mix semolina, ghee, olive oil, and flour in a bowl.",
              "Let the mixture rest and soak together for 4 days.",
              "On the day of preparation, add 1 cup of flour, vanilla, baking powder, and ground mahlab.",
              "Knead the dough gradually with a mix of orange blossom water, rose water, and a bit of plain water until the dough becomes soft and easy to shape.",
              "Use the same cup to measure all the ingredients to keep proportions consistent.",
            ],
            ar: [
              "نخلط السميد والسمن وزيت الزيتون والطحين مع بعض.",
              "نترك الخليط منقوع لمدة ٤ أيام.",
              "يوم التحضير، نضيف كوب طحين إضافي، فانيلا، بيكنج باودر، ومحلب مطحون.",
              "نعجن بالماء الزهر وماء الورد وقليل من الماء العادي حتى تصبح العجينة سهلة التشكيل.",
              "ملاحظة: يتم استخدام نفس الكوب لقياس جميع المقادير.",
            ],
          },
        },
      ],
    },

    actions: {
      addToCart: (item) => {
        const store = getStore();
        const updatedCart = [...store.cart, item];
        setStore({ cart: updatedCart });
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      },

      checkAuth: async () => {
        try {
          const resp = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/protected`,
            {
              credentials: "include",
            }
          );

          if (!resp.ok) throw new Error("Not authenticated");

          const data = await resp.json();
          console.log("✅ checkAuth success:", data);

          setStore({
            user: data.user,
            authChecked: true,
          });
          localStorage.setItem("user", JSON.stringify(data.user));
          return true;
        } catch (err) {
          setStore({
            user: null,
            authChecked: true,
          });

          console.log("❌ checkAuth failed:", err.message);
          return false;
        }
      },
      loginUser: async (email, password) => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              credentials: "include",
              body: JSON.stringify({ email, password }),
            }
          );

          const data = await res.json();

          if (res.ok) {
            setStore({
              user: data.user,
              authChecked: true,
            });
            localStorage.setItem("user", JSON.stringify(data.user));

            return { success: true, message: data.message };
          } else {
            return { success: false, error: data.error || "Login failed" };
          }
        } catch (err) {
          return { success: false, error: "Something went wrong" };
        }
      },
      handleLogin: async (e, email, password, router) => {
        e.preventDefault();
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
            {
              method: "POST",
              credentials: "include",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
            }
          );

          const data = await response.json();

          if (response.ok) {
            setStore({ user: data.user, authChecked: true });
            alert(data.message);
            router.push("/");
          } else {
            alert(data.error || "Login failed");
          }
        } catch (err) {
          console.error("Login error:", err);
          alert("Something went wrong. Please try again.");
        }
      },

      logoutAndClear: () => {
        console.log("logout called");
        document.cookie = "access_token=; Max-Age=0; path=/;";
        document.cookie = "access_token_cookie=; Max-Age=0; path=/;";
        setStore({ user: null, authChecked: true });
        localStorage.removeItem("user");
      },

      forgotPassword: async (email) => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/forgot-password`,
            {
              method: "POST",
              credentials: "include",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email }),
            }
          );

          const data = await res.json();

          if (res.ok) return { success: true, resetLink: data.reset_link };
          return {
            success: false,
            error: data.error || "Failed to send reset email",
          };
        } catch (err) {
          return { success: false, error: "Something went wrong" };
        }
      },

      initCart: () => {
        if (typeof window !== "undefined") {
          const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
          setStore({ cart: savedCart });
        }
      },

      openModal: () => {
        setStore({ modalIsOpen: true });
      },

      removeFromCart: (id) => {
        const store = getStore();
        const updatedCart = store.cart.filter((item) => item.id !== id);
        setStore({ cart: updatedCart });
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      },

      resetPassword: async (token, new_password) => {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/reset-password`,
            {
              method: "POST",
              credentials: "include",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ token, new_password }),
            }
          );

          if (res.ok) return { success: true };

          const data = await res.json();
          return { success: false, error: data.error || "Reset failed" };
        } catch (err) {
          return { success: false, error: "Something went wrong" };
        }
      },

      setLang: (lang) => setStore({ lang }),

      toggleLang: (langValue) => {
        // Ignore event objects being passed accidentally
        if (langValue && typeof langValue !== "string") {
          langValue = null;
        }

        const current = getStore().lang;
        const newLang = langValue || (current === "en" ? "ar" : "en");

        if (typeof window !== "undefined") {
          localStorage.setItem("lang", newLang);
        }

        console.log("Toggling language from:", current, "to:", newLang);
        setStore({ lang: newLang });
      },

      toggleModal: (id = null) => {
        const store = getStore();
        if (id === null) {
          setStore({ modalIsOpen: false, activeEventId: null });
        } else {
          setStore({ modalIsOpen: true, activeEventId: id });
        }
      },

      createUser: async (is_org, name, email, password) => {
        try {
          const resp = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/createUser`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name,
                email,
                password,
                is_org: is_org === "1",
              }),
            }
          );

          const data = await resp.json();
          if (!resp.ok) throw new Error(data.error || "Unknown error");
          return data;
        } catch (err) {
          console.error("Error creating user:", err);
          throw err;
        }
      },
    },
  };
};

export default getState;
