"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import { Context } from "../context/appContext";
import Link from "next/link";
import "../styles/navbar.css";
import { usePathname } from "next/navigation";

const routePaths = {
  HOME: "/",
  ABOUT: "/about",
  RECIPES: "/recipes",
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

const AnimatedMenuItem = ({ index, href = null, label, onClick = null }) => {
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

  const content = (
    <p className={` home-nav-item ${show ? "show" : ""}`} onClick={onClick}>
      {label}
    </p>
  );

  return href ? <Link href={href}>{content}</Link> : content;
};

const Navbar = ({}) => {
  const { store, actions } = useContext(Context);
  const [visible, setVisible] = useState(true);
  const lang = store.lang;
  const isArabic = lang === "ar";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prevScrollPos = useRef(0);
  const pathname = usePathname();
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
  const isLoggedIn = !!store.user;
  return (
    <>
      <div className={`navbar-large `}>
        <div className="navbar-items">
          {Object.entries(routePaths).map(([label, path]) => (
            <Link href={path} passHref key={label}>
              <p className="home-nav-item">{translations[lang][label]}</p>
            </Link>
          ))}

          {!isLoggedIn ? (
            <>
              <Link href="/login" passHref>
                <p className="home-nav-item">
                  {lang === "en" ? "SIGN IN" : "تسجيل الدخول"}
                </p>
              </Link>
            </>
          ) : (
            <button
              className="home-nav-item"
              onClick={isLoggedIn ? handleLogout : null}
            >
              {lang === "en" ? "LOGOUT" : "تسجيل الخروج"}
            </button>
          )}
          <div className="home-nav-item" onClick={actions.toggleLang}>
            {isArabic ? "English" : "العربية"}
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={toggleMobileMenu}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            {Object.entries(routePaths).map(([key, href], i) => (
              <AnimatedMenuItem
                key={key}
                index={i}
                href={href}
                label={translations[lang][key]}
              />
            ))}

            <AnimatedMenuItem
              index={Object.keys(routePaths).length}
              label={isArabic ? "English" : "العربية"}
              onClick={actions.toggleLang}
            />

            <AnimatedMenuItem
              index={Object.keys(routePaths).length + 1}
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
              onClick={isLoggedIn ? { handleLogout } : null}
            />
          </div>
        </div>
      )}

      <div className={`hamburger `} onClick={toggleMobileMenu}>
        ☰
      </div>
    </>
  );
};

export default Navbar;
