"use client";
import React, { useContext, useEffect } from "react";
import { Context } from "../context/appContext";
import Link from "next/link";

const FakeNavbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="fake-navbar">
        <img src="/img/border.png" alt="CCEA Logo" className="border-left" />
        <img src="/img/HALL2.png" alt="CCEA Logo" className="navbar-logo" />
        <img src="/img/border.png" alt="CCEA Logo" className="border-right" />
        <div className="navbar-large">
          <span className="nav-item">
            <Link href="/" passHref>
              HOME
            </Link>
          </span>
          <span className="nav-item">
            <Link href="/rentals" passHref>
              RENTALS
            </Link>
          </span>
          <span className="nav-item">
            <Link href="/about" passHref>
              ABOUT
            </Link>
          </span>
          <span className="nav-item">
            <Link href="/events" passHref>
              EVENTS
            </Link>
          </span>

          <span className="nav-item">
            <Link href="/store" passHref>
              STORE
            </Link>
          </span>
          <span className="nav-item">
            <Link href="/donate" passHref>
              DONATE
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default FakeNavbar;
