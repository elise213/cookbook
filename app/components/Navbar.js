"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import { Context } from "../context/appContext";
import Link from "next/link";
import "../styles/navbar.css";

const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [visible, setVisible] = useState(true);
  const prevScrollPos = useRef(0);

  const [overflowingElements, setOverflowingElements] = useState([]);

  useEffect(() => {
    const checkOverflow = () => {
      const elements = document.querySelectorAll("*");
      const overflowElements = [];
      elements.forEach((el) => {
        if (el.scrollWidth > window.innerWidth) {
          overflowElements.push(el);
        }
      });
      setOverflowingElements(overflowElements);
      if (overflowElements.length > 0) {
        console.warn("Overflowing elements detected:", overflowElements);
      }
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos === 0) {
        setVisible(true);
      } else if (prevScrollPos.current < currentScrollPos) {
        setVisible(false);
      }
      prevScrollPos.current = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fake-navbar ${visible ? "visible" : "hidden"}`}>
      <img src="/img/border.png" alt="Left Border" className="border-left" />
      <img src="/img/HALL2_rm.png" alt="CCEA Logo" className="navbar-logo" />
      <img src="/img/border.png" alt="Right Border" className="border-right" />
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
          <Link href="/support" passHref>
            SUPPORT US
          </Link>
        </span>
        <span className="nav-item">
          <Link href="/contact" passHref>
            CONTACT
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
