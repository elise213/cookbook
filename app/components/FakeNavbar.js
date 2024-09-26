"use client";
import React, { useContext, useEffect } from "react";
import { Context } from "../context/appContext";
import Link from "next/link";

const FakeNavbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="fake-navbar">
        <Link
          href="/"
          passHref
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <img src="/img/CCEA99.png" alt="CCEA Logo" className="navbar-logo" />
        </Link>
      </div>
    </>
  );
};

export default FakeNavbar;
