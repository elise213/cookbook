"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "./context/appContext";
import styles from "./globals.css";
import Link from "next/link";

const Home = () => {
  const { store, actions } = useContext(Context);
  const lang = store.lang;
  const setLang = actions.toggleLang;

  const recipe = store.recipes.find((r) => r.id === 1);

  useEffect(() => {
    const body = document.body;
    const className = "no-scroll";
    const homeBody = document.querySelector(".home-body");

    if (store.isNavOpen || store.showContactModal) {
      body.classList.add(className);
    } else {
      body.classList.remove(className);
    }

    if (homeBody) {
      if (store.isNavOpen || store.showContactModal) {
        homeBody.classList.add(className);
      } else {
        homeBody.classList.remove(className);
      }
    }
  }, [store.isNavOpen, store.showContactModal]);

  useEffect(() => {
    if (store.modalIsOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [store.modalIsOpen]);

  useEffect(() => {
    const body = document.body;
    if (store.isNavOpen || store.showContactModal) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  }, [store.isNavOpen, store.showContactModal]);

  return (
    <>
      <div className={`home-body content`}>
        <button
          className="language-button"
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
        >
          {lang === "en" ? "العربية" : "English"}
        </button>

        <div className="home-image-div">
          <p className="page-title">
            {lang === "en" ? "Fatima's Cookbook" : "كتاب طبخ فاطمة"}
          </p>
          <span className="quote">
            {lang === "en" ? "Recipes from Palestine" : "وصفات من فلسطين"}
          </span>
          <img
            src="img/picnic.png"
            alt="Theosophy Hall Los Angeles"
            className="phinx"
          />
        </div>

        <div className="home-nav">
          <Link href="/about" passHref>
            <p className="home-nav-item">
              {lang === "en" ? "ABOUT" : "معلومات"}
            </p>
          </Link>
          <Link href="/study" passHref>
            <p className="home-nav-item">
              {lang === "en" ? "BROWSE RECIPES" : "تصفح الوصفات"}
            </p>
          </Link>
          <Link href="/contact" passHref>
            <p className="home-nav-item">
              {lang === "en" ? "CONTACT" : "اتصل بنا"}
            </p>
          </Link>
          <Link href="/login" passHref>
            <p className="home-nav-item">
              {lang === "en" ? "SIGN IN" : "تسجيل الدخول"}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
