"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import { Context } from "../context/appContext";
import Link from "next/link";
import "../styles/navbar.css";
import { usePathname } from "next/navigation";

const routePaths = {
  HOME: "/",
  ABOUT: "/about",
  RECIPES: "/study",
  CONTACT: "/contact",
};

const translations = {
  en: {
    HOME: "HOME",
    ABOUT: "ABOUT",
    RECIPES: "RECIPES",
    CONTACT: "CONTACT",
  },
  ar: {
    HOME: "الرئيسية",
    ABOUT: "معلومات",
    RECIPES: "الوصفات",
    CONTACT: "اتصل بنا",
  },
};

const AnimatedMenuItem = ({ label, index }) => {
  const [show, setShow] = useState(false);
  const { store } = useContext(Context);
  const lang = store.lang;

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const timer = setTimeout(() => setShow(true), index * 100);
      return () => clearTimeout(timer);
    });
    return () => cancelAnimationFrame(raf);
  }, [index]);

  const href = routePaths[label];

  if (!href) return null;

  return (
    <Link href={href}>
      <p className={`mobile-item ${show ? "show" : ""}`}>
        {translations[lang][label]}
      </p>
    </Link>
  );
};

const Navbar = ({ version = "default" }) => {
  const { store } = useContext(Context);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prevScrollPos = useRef(0);
  const pathname = usePathname();
  const lang = store.lang;

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
      <div className={`navbar-large version-${version}`}>
        <div className="navbar-items">
          {Object.entries(routePaths).map(([label, path]) => (
            <Link href={path} passHref key={label}>
              <p className="nav-item">{translations[lang][label]}</p>
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
            {Object.keys(routePaths).map((label, i) => (
              <AnimatedMenuItem key={label} label={label} index={i} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
