"use client"; // Add this at the top

import React from "react";
import Image from "next/image";
import FakeNavbar from "../components/FakeNavbar";
import Footer from "../components/Footer";

const Store = () => {
  const handleImageClick = () => {
    window.location.href =
      "https://theosophyult.com/product-category/essential-teachings-of-theosophy";
  };

  return (
    <div className="store-page">
      <FakeNavbar />
      <div
        className="store-container"
        onClick={handleImageClick}
        style={{ cursor: "pointer" }}
      >
        <Image
          height={100}
          width={100}
          layout="responsive"
          quality={100}
          className="books-image"
          src="/img/books.png"
          alt="Essential Teachings of Theosophy"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Store;
