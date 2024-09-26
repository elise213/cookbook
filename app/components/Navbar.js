"use client";
import React, { useContext, useEffect } from "react";
import { Context } from "../context/appContext";
import Link from "next/link";
import styles from "../styles/navbar.css";

const Navbar = () => {
  const { store, actions } = useContext(Context);

  const toggleNav = () => {
    actions.toggleNavOpen(!store.isNavOpen);
  };

  useEffect(() => {
    if (store.isNavOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    const handleClickOutside = (event) => {
      const nav = document.querySelector(".new-navbar");
      if (nav && !nav.contains(event.target) && store.isNavOpen) {
        actions.setIsNavOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.body.classList.remove("no-scroll"); // Clean up the class
      document.removeEventListener("click", handleClickOutside);
    };
  }, [store.isNavOpen, actions.setIsNavOpen]);

  return (
    <>
      <nav className={`new-navbar ${store.isNavOpen ? "open" : ""}`}>
        <div className="menu-icon" onClick={toggleNav}>
          {!store.modalIsOpen && (
            <div className={`open-icon ${!store.isNavOpen ? "closed" : ""}`}>
              <i className="fas fa-bars"></i>
            </div>
          )}
          <div className={`close-icon ${store.isNavOpen ? "open" : ""}`}>
            <i className="fa-solid fa-xmark"></i>
            {/* X */}
          </div>
        </div>

        <div className={`navbar-content ${store.isNavOpen ? "open" : ""}`}>
          <span
            className="nav-item"
            onClick={() => {
              actions.setIsNavOpen(false);
            }}
          >
            <Link href="/" passHref>
              HOME
            </Link>
          </span>

          <span
            className="nav-item"
            onClick={() => {
              actions.setIsNavOpen(false);
            }}
          >
            <Link href="/about" passHref>
              ABOUT
            </Link>
          </span>

          <span
            className="nav-item"
            onClick={() => {
              actions.setIsNavOpen(false);
            }}
          >
            <Link href="/fiscal-sponsorship" passHref>
              FISCAL SPONSORSHIP
            </Link>
          </span>
          <span
            className="nav-item"
            onClick={() => {
              actions.setIsNavOpen(false);
            }}
          >
            <Link href="/events" passHref>
              EVENTS
            </Link>
          </span>
          <span
            className="nav-item"
            onClick={() => {
              actions.setIsNavOpen(false);
            }}
          >
            <Link href="/contact" passHref>
              CONTACT
            </Link>
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
