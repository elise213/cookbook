"use client";
import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import injectContext from "./context/appContext";
const inter = Inter({ subsets: ["latin"] });
import "font-awesome/css/font-awesome.min.css";
import SEO from "./components/SEO";

function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta property="og:title" content="CCEA" />
        <meta
          property="og:description"
          content="The Center For Cinematic and Experimental Arts"
        />
        <meta
          property="og:image"
          content="https://ccearts.org/img/CCEA99.png"
        />
      </head>
      <body className={inter.className}>
        <div className="wrapper">
          {/* <Navbar /> */}
          <main className="content">{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}

export default injectContext(RootLayout);
