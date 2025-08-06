"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Context } from "../context/appContext";
import "../styles/navbar.css";

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

const AnimatedMenuItem = ({ index, href = null, label, onClick = null }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const timer = setTimeout(() => setShow(true), index * 100);
      return () => clearTimeout(timer);
    });
    return () => cancelAnimationFrame(raf);
  }, [index]);

  const content = (
    <p className={`home-nav-item ${show ? "show" : ""}`} onClick={onClick}>
      {label}
    </p>
  );

  return href ? <Link href={href}>{content}</Link> : content;
};

const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prevScrollPos = useRef(0);
  const pathname = usePathname();

  const lang = store.lang || "en";
  const isArabic = lang === "ar";
  const t = translations[lang] || translations["en"];
  const routes = store.routes || {};
  const isLoggedIn = !!store.user;
  const handleLogout = actions.logoutAndClear;

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
      {/* Desktop Navbar */}
      <div className={`navbar-large ${visible ? "" : "hidden"}`}>
        <div className="navbar-items">
          {Object.entries(routes).map(([label, path]) =>
            t[label] ? (
              <Link href={path} key={label}>
                <p
                  className={`home-nav-item ${
                    pathname === path ? "active" : ""
                  }`}
                >
                  {t[label]}
                </p>
              </Link>
            ) : null
          )}

          {!isLoggedIn ? (
            <Link href="/login">
              <p className="home-nav-item">
                {lang === "en" ? "SIGN IN" : "تسجيل الدخول"}
              </p>
            </Link>
          ) : (
            <button className="home-nav-item" onClick={handleLogout}>
              {lang === "en" ? "LOGOUT" : "تسجيل الخروج"}
            </button>
          )}

          <div className="home-nav-item" onClick={actions.toggleLang}>
            {isArabic ? "English" : "العربية"}
          </div>
        </div>
      </div>

      {/* Mobile Navbar Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            {Object.entries(routes).map(([label, path], index) =>
              t[label] ? (
                <AnimatedMenuItem
                  key={label}
                  index={index}
                  href={path}
                  label={t[label]}
                />
              ) : null
            )}

            <AnimatedMenuItem
              index={Object.keys(routes).length + 1}
              label={
                isLoggedIn
                  ? lang === "en"
                    ? "LOGOUT"
                    : "تسجيل الخروج"
                  : lang === "en"
                  ? "SIGN IN"
                  : "تسجيل الدخول"
              }
              href={!isLoggedIn ? "/login" : null}
              onClick={isLoggedIn ? handleLogout : null}
            />

            <AnimatedMenuItem
              index={Object.keys(routes).length}
              label={isArabic ? "English" : "العربية"}
              onClick={actions.toggleLang}
            />
          </div>
        </div>
      )}

      {/* Hamburger Menu Button */}
      <div className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </div>
    </>
  );
};

export default Navbar;
