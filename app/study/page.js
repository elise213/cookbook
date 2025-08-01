"use client";
import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { Context } from "../context/appContext";
import styles from "./study.css";
import Link from "next/link";

const Page = () => {
  const { store, actions } = useContext(Context);
  const lang = store.lang;
  const { recipes } = store;
  const isArabic = lang === "ar";
  const setLang = actions.toggleLang;

  // ✅ Translation helper
  const t = (obj) => obj?.[lang] || obj?.en || "";

  return (
    <div className="study-page">
      <Navbar version="2" />
      <div className="lang-toggle-container">
        <button className="lang-toggle" onClick={setLang}>
          {isArabic ? "English" : "العربية"}
        </button>
      </div>

      <div className="marquee-container">
        <marquee className="marquee-text">
          {isArabic
            ? "⋆·˚ ༘ * وصفات 𓂃⊹ من الوطن ✦ˑ كل ♦ واستمتع بهذه الحياة ✩₊˚.⋆☾⋆⁺₊✧"
            : "⋆·˚ ༘ * Recipes ִֶ 𓂃⊹ From Palestine ✦ˑ ✩₊˚.⋆☾⋆⁺₊✧"}
        </marquee>
      </div>

      <section className="grid-container2">
        {recipes.map((item, index) => (
          <div className="grid-item" key={index}>
            <div className="study-title">{t(item.title)}</div>
            <p className="recipe-card-text">{t(item.description)}</p>
            <Link href={`/recipe/${item.id}`} className="btn">
              {isArabic ? "عرض الوصفة" : "View Recipe"}
            </Link>
          </div>
        ))}
      </section>

      <div className="image-container">
        <img
          src="/img/picnic.png"
          alt={
            isArabic
              ? "رسم توضيحي للوسيفر، مجلة الثيوصوفية"
              : "Illustration of Lucifer, Theosophical magazine"
          }
          className="theo-mag-lucifer"
        />
      </div>
    </div>
  );
};

export default Page;
