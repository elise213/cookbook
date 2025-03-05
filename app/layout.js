"use client";
import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default injectContext(RootLayout);
