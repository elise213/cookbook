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
        <div className="donate-container">
          {/* <div className="wire-container">
            <p className="wire-info">
              For credit card donations up to $1,000 and ACH up to $10,000,
              please use the form below.
            </p>
            <p className="wire-info">
              Please use a wire transfer for donations of $10,000 or more.
            </p>
            <div className="wire-info-2">
              <p className="wire-info">
                ACCT: 583331023
                <br />
                ROUTING: 021000021
              </p>
              <p className="wire-info">
                Chase Bank
                <br />
                270 Park Ave.
                <br />
                New York, NY 10017
              </p>
            </div>
          </div> */}
          {/* <div
            style={{
              position: "relative",
              height: "1600px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <iframe
              className="donation-iframe"
              title="Donation form powered by Zeffy"
              src="https://www.zeffy.com/embed/donation-form/theosophy"
              allowpaymentrequest="true"
              allowtransparency="true"
            ></iframe>
          </div> */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Store;
