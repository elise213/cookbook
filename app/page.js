"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "./context/appContext";
import styles from "./globals.css";
import Link from "next/link";

const Home = () => {
  const { store, actions } = useContext(Context);

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
      <div style={{ padding: "2rem", background: "#fff", color: "#000" }}>
        <h1 style={{ fontFamily: "Cinzel Decorative, serif", fontWeight: 400 }}>
          Cinzel Decorative (400)
        </h1>
        <h1 style={{ fontFamily: "Cinzel Decorative, serif", fontWeight: 700 }}>
          Cinzel Decorative (700)
        </h1>
        <h1
          style={{
            fontFamily: "Cormorant, serif",
            fontWeight: 400,
            fontStyle: "italic",
          }}
        >
          Cormorant (Italic 400)
        </h1>
        <h1 style={{ fontFamily: "Libre Baskerville, serif", fontWeight: 700 }}>
          Libre Baskerville (700)
        </h1>
        <h1 style={{ fontFamily: "Lugrasimo, cursive" }}>Lugrasimo</h1>
        <h1 style={{ fontFamily: "Parisienne, cursive" }}>Parisienne</h1>
        <h1 style={{ fontFamily: "Pinyon Script, cursive" }}>Pinyon Script</h1>
        <h1 style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700 }}>
          Raleway (700)
        </h1>
        <h1 style={{ fontFamily: "Lexend, sans-serif", fontWeight: 300 }}>
          Lexend (300)
        </h1>
      </div>

      <div className={` home-body content`}>
        <div className="home-image-div">
          <img
            src="img/phinx.png"
            alt="Theosophy Hall Los Angeles"
            className=" phinx"
          />
          <p className="page-title">Theosophy Hall</p>
          <span className="quote">
            "The true theosophist belongs to no cult or sect, yet belongs to
            each and all..."
          </span>
        </div>
        <div className="home-nav">
          <Link href="/about" passHref>
            <p className="home-nav-item">ABOUT</p>
          </Link>
          <Link href="/study" passHref>
            <p className="home-nav-item">CLASSES & STUDY GROUPS</p>
          </Link>
          <Link href="/library" passHref>
            <p className="home-nav-item">LIBRARY</p>
          </Link>
          <Link href="/support" passHref>
            <p className="home-nav-item">SUPPORT US</p>
          </Link>
          <Link href="/contact" passHref>
            <p className="home-nav-item">CONTACT</p>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
