"use client";
import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/FakeNavbar";
import Footer from "./components/Footer";
import injectContext from "./context/appContext";
const inter = Inter({ subsets: ["latin"] });
import "font-awesome/css/font-awesome.min.css";

function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta property="og:title" content="THEOSOPHY HALL EVENTS & RENTALS" />
        <meta property="og:description" content="The Theosophy Hall" />
        <meta property="og:image" content="/img/HALL3.png" />
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
