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
    "FIND US": "/findus",
    CONTACT: "/contact",
  };

  return (
    <Link href={paths[label]}>
      <p className={`mobile-item ${show ? "show" : ""}`}>{label}</p>
    </Link>
  );
};

const Navbar = ({ version = "default" }) => {
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

  const paths = {
    HOME: "/",
    ABOUT: "/about",
    "STUDY GROUPS": "/study",
    LIBRARY: "/library",
    SHOP: "/shop",
    "FIND US": "/findus",
    CONTACT: "/contact",
  };

  return (
    <>
      <div className={`navbar-large version-${version}`}>
        <span className={`page-title version-${version}`}>Theosophy Hall</span>
        <div className="navbar-items">
          {Object.entries(paths).map(([label, path]) => (
            <Link href={path} passHref key={label}>
              <p className="nav-item">{label}</p>
            </Link>
          ))}
        </div>
        <div
          className={`hamburger version-${version}`}
          onClick={toggleMobileMenu}
        >
          ☰
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}>
          <div className="mobile-menu">
            {Object.keys(paths).map((label, i) => (
              <AnimatedMenuItem key={label} label={label} index={i} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
