"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Papa from "papaparse";
import styles from "./study.css";

const SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSEKwsgLMRgKJhcrH0bP0znRkH1vBvG9XvcijjVhLuEb1Q4jGFQoM5FdIXgf4xdboGcZOLF8Fmgdb4L/pub?output=csv";

const Page = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    Papa.parse(SHEET_CSV_URL, {
      download: true,
      header: true,
      complete: (result) => {
        console.log("Parsed CSV data:", result.data);
        setClasses(result.data);
      },
    });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "var(--color2)",
        flex: "1",
        padding: "0 0 20px 0",
      }}
    >
      <Navbar version="2" />
      <div className="marquee-container">
        <marquee className="marquee-text">
          ⋆·˚ ༘ * Study Groups ִֶ 𓂃⊹ &amp; Classes IRL `✦ˑ Online ♦ At the
          Theosophy Hall LA ✩₊˚.⋆☾⋆⁺₊✧
        </marquee>
      </div>

      <section className="grid-container2">
        {classes.map((item, index) => (
          <div className="grid-item" key={index}>
            <div className="study-title">{item.Title}</div>
            <p>{item.Description}</p>
            <a href="#" className="btn">
              LEARN MORE
            </a>
          </div>
        ))}
      </section>

      <div className="image-container">
        <img
          src="img/Lucifer-illustration.png"
          alt="Illustration of Lucifer, Theosophical magazine"
          className="theo-mag-lucifer"
        />
      </div>
    </div>
  );
};

export default Page;
