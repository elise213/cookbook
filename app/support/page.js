"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "./store.css";
import Footer from "../components/Footer";
import Spacer from "../components/Spacer";

const Support = () => {
  const products = [
    {
      name: "Unisex Organic Sweatshirt",
      price: "$49.99",
      image: "/img/bvb.webp",
      link: "https://theosophyhall.printful.me/product/unisex-organic-sweatshirt",
    },
    {
      name: "",
      price: "$199.95",
      image: "/img/1600.jpg",
      link: "https://www.ebay.com/itm/296972779220",
    },
  ];

  return (
    <>
      <div className="store-container">
        <Navbar />
        <div className="products-grid">
          <Spacer color={"rgb(255, 255, 255)"} />
          {products.map((product, index) => (
            <a
              key={index}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="product-card"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
              />
              <p className="product-name">{product.name}</p>
              <p>{product.price}</p>
            </a>
          ))}
        </div>
        <div className="donate-container"></div>
        <Footer />
      </div>
    </>
  );
};

export default Support;
