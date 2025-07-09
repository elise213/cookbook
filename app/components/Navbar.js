"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import { Context } from "../context/appContext";
import Link from "next/link";
import "../styles/navbar.css";
import { usePathname } from "next/navigation";

const AnimatedMenuItem = ({ label, index }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  const paths = {
    HOME: "/",
    ABOUT: "/about",
    "STUDY GROUPS": "/study",
    LIBRARY: "/library",
    SHOP: "/shop",
    CONTACT: "/contact",
  };

  return (
    <Link href={paths[label]}>
      <p className={`mobile-item ${show ? "show" : ""}`}>{label}</p>
    </Link>
  );
};

const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prevScrollPos = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos === 0) setVisible(true);
      else if (prevScrollPos.current < currentScrollPos) setVisible(false);
      prevScrollPos.current = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <>
      <div
        className={`navbar-large ${pathname === "/study" ? "study-page" : ""}`}
      >
        <span className="page-title">Theosophy Hall</span>

        <div className="hamburger" onClick={toggleMobileMenu}>
          ☰
        </div>

        <div className="navbar-items">
          <Link href="/" passHref>
            <p className="nav-item">HOME</p>
          </Link>
          <Link href="/about" passHref>
            <p className="nav-item">ABOUT</p>
          </Link>
          <Link href="/study" passHref>
            <p className="nav-item">STUDY GROUPS</p>
          </Link>
          <Link href="/library" passHref>
            <p className="nav-item">LIBRARY</p>
          </Link>
          <Link href="/shop" passHref>
            <p className="nav-item">SHOP</p>
          </Link>
          <Link href="/contact" passHref>
            <p className="nav-item">CONTACT</p>
          </Link>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}>
          <div className="mobile-menu">
            {[
              "HOME",
              "ABOUT",
              "STUDY GROUPS",
              "LIBRARY",
              "SHOP",
              "CONTACT",
            ].map((label, i) => (
              <AnimatedMenuItem key={label} label={label} index={i} />
            ))}
          </div>
        </div>
      )}

      {/* {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}>
          <div className="mobile-menu">
            <Link href="/">
              <p className="mobile-item">HOME</p>
            </Link>
            <Link href="/about">
              <p className="mobile-item">ABOUT</p>
            </Link>
            <Link href="/study">
              <p className="mobile-item">STUDY GROUPS</p>
            </Link>
            <Link href="/library">
              <p className="mobile-item">LIBRARY</p>
            </Link>
            <Link href="/shop">
              <p className="mobile-item">SHOP</p>
            </Link>
            <Link href="/contact">
              <p className="mobile-item">CONTACT</p>
            </Link>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Navbar;
