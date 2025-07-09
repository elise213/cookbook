"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "./shop.css";
import Footer from "../components/Footer";
import Spacer from "../components/Spacer";

const Shop = () => {
  const products = [
    {
      name: "Unisex Organic Sweatshirt",
      price: "$49.99",
      image: "/img/bvb.webp",
      link: "https://theosophyhall.printful.me/product/unisex-organic-sweatshirt",
    },
  ];

  return (
    <>
      <div className="store-container">
        <Navbar />
        <div className="products-grid">
          {/* {products.map((product, index) => (
            <div key={index} className="product-card">
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                />
              </a>
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price}</p>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="buy-button"
              >
                Buy Now
              </a>
            </div>
          ))} */}
          <div className="marquee-container">
            <marquee className="marquee-text">
              ִֶ ⋆·˚ ༘ * ִֶ 𓂃⊹ Store Coming Soon ֶ 𓂃⊹ ♦ ✩₊˚.⋆☾⋆⁺₊✧`✦ˑ ⋆·˚ ༘ * ִֶ
              𓂃⊹ Store Coming Soon ♦ ✩₊˚.⋆☾⋆⁺₊✧`✦ˑ ⋆·˚ ༘ * ִֶ 𓂃⊹ Store Coming
              Soonֶ 𓂃⊹ ♦ ✩₊˚.⋆☾⋆⁺₊✧`✦ˑ ⋆·˚ ༘ * ִֶ 𓂃⊹ Store Coming Soonֶ 𓂃⊹ ♦
              ✩₊˚.⋆☾⋆⁺₊✧`✦ˑ ⋆·˚ ༘ * ִֶ 𓂃⊹ StoreComing Soon ֶ 𓂃⊹ ♦ ✩₊˚.⋆☾⋆⁺₊✧`✦ˑ
              ִֶ
            </marquee>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Shop;
