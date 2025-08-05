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
  const t = (obj) => obj?.[lang] || obj?.en || "";

  return (
    <>
      <Navbar version="2" />
      <div className="study-page">
        <div
          className="scroll"
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "unset",
          }}
        >
          <div className="home-image-div" style={{ marginTop: "80px" }}>
            <p className="page-title">
              {lang === "en" ? "Fatima's Cookbook" : "كتاب طبخ فاطمة"}
            </p>
            <span className="quote">
              {lang === "en" ? "Recipes from Rafah" : "وصفات من فلسطين"}
            </span>
            <img
              src="img/picnic.png"
              alt="Theosophy Hall Los Angeles"
              className="phinx"
            />
          </div>
          <section className="grid-container2">
            {recipes.map((item, index) => (
              <div className="grid-item" key={index}>
                <Link href={`/recipe/${item.id}`} className="">
                  <div className="study-title">{t(item.title)}</div>
                  <p className="recipe-card-text">{t(item.description)}</p>
                </Link>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
