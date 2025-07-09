"use client";
import React from "react";
import "./globals.css";
import injectContext from "./context/appContext";
import "font-awesome/css/font-awesome.min.css";
import PasswordGate from "./components/PasswordGate";

function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta property="og:title" content="THEOSOPHY HALL EVENTS & RENTALS" />
        <meta property="og:description" content="The Theosophy Hall" />
        <meta property="og:image" content="/img/HALL3.png" />
      </head>
      <body>
        <PasswordGate>{children}</PasswordGate>
      </body>
    </html>
  );
}

export default injectContext(RootLayout);
