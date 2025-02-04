"use client"; // Ensure client-side rendering

import React from "react";
import Image from "next/image";
import FakeNavbar from "../components/FakeNavbar";
import styles from "./store.css";
import Footer from "../components/Footer";

const Store = () => {
  // Product Listings
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
        <FakeNavbar />
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
              />
              <h2>{product.name}</h2>
              <p>{product.price}</p>
              <a href={product.link} target="_blank" rel="noopener noreferrer" className="buy-button">
                Buy Now
              </a>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Store;
