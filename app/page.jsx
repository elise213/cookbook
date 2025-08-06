"use client";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "./context/appContext";
import { loadStripe } from "@stripe/stripe-js";
import styles from "./globals.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Home = () => {
  const { store, actions } = useContext(Context);
  const lang = store.lang;
  const setLang = actions.toggleLang;
  const isArabic = lang === "ar";
  const { user, authChecked } = store;
  const isLoggedIn = authChecked && !!user;
  const [donation, setDonation] = useState(20);
  const logout = actions.logoutAndClear;

  const handleLogout = actions.logoutAndClear;
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const urlLang = searchParams.get("lang");

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      urlLang &&
      (urlLang === "ar" || urlLang === "en")
    ) {
      const currentLang = localStorage.getItem("lang") || "en";

      if (urlLang !== currentLang) {
        actions.toggleLang(urlLang);
      }
      const url = new URL(window.location.href);
      url.searchParams.delete("lang");
      window.history.replaceState({}, "", url.pathname);
    }
  }, []);

  useEffect(() => {
    const body = document.body;
    const homeBody = document.querySelector(".home-body");
    const className = "no-scroll";

    if (store.isNavOpen || store.showContactModal) {
      body.classList.add(className);
      homeBody?.classList.add(className);
    } else {
      body.classList.remove(className);
      homeBody?.classList.remove(className);
    }
  }, [store.isNavOpen, store.showContactModal]);

  useEffect(() => {
    if (store.modalIsOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [store.modalIsOpen]);

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/create-checkout-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            amount: Math.round(donation * 100),
            product_name: "Fatima’s Cookbook",
          }),
        }
      );

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("No URL returned from backend:", data);
        alert("Something went wrong starting the checkout.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("There was a problem with the checkout process.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={`home-body`}>
        <div className="scroll-home">
          <div className="home-image-div">
            <p className="page-title">
              {isArabic ? "كتاب طبخ فاطمة" : "Fatima's Cookbook"}
            </p>
            <span className="quote">
              {isArabic ? "وصفات من فلسطين" : "Recipes from Rafah"}
            </span>
            <img
              src="img/picnic.png"
              alt="Cookbook cover image"
              className="picnic"
            />
          </div>
          <div className="group">
            <div className="purchase-section">
              <div style={{ display: "flex" }}>
                <input
                  className="cost-input"
                  type="text"
                  inputMode="decimal"
                  pattern="^\$?\d+(\.\d{0,2})?$"
                  placeholder={isArabic ? "20.00" : "$20.00"}
                  value={donation === 0 ? "" : `$${donation.toFixed(2)}`}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^0-9.]/g, "");
                    const numeric = parseFloat(raw);
                    if (!isNaN(numeric)) {
                      setDonation(numeric);
                    } else {
                      setDonation(0);
                    }
                  }}
                />

                <button
                  className="purchase-button"
                  onClick={handleCheckout}
                  disabled={loading}
                >
                  {loading
                    ? isArabic
                      ? "جارٍ التحميل..."
                      : "Processing..."
                    : isArabic
                    ? "تبرع الآن"
                    : "Buy Now!"}
                </button>
              </div>
              <p className="donate-description" style={{ margin: "10px 0" }}>
                {isArabic
                  ? "حدد المبلغ الذي تريد دفعه ($):"
                  : "Please enter the amount you'd like to pay in USD$"}
              </p>

              <p className="donate-description">
                {isArabic ? (
                  <>
                    <span>تبرعك يمنحك وصولاً إلى الوصفات</span>
                    <br />
                    <span>ويدعم عائلة في رفح في غزة في أمس الحاجة.</span>
                  </>
                ) : (
                  <>
                    <span>
                      100% of the money goes to Palestinian refugees and
                      families in Gaza
                    </span>
                  </>
                )}
              </p>
            </div>

            <div className="home-nav">
              {isLoggedIn && (
                <Link href="/recipes" passHref>
                  <p className="home-nav-item">
                    {isArabic ? "تصفح الوصفات" : "BROWSE RECIPES"}
                  </p>
                </Link>
              )}
              <Link href="/about" passHref>
                <p className="home-nav-item">
                  {isArabic ? "معلومات" : "ABOUT"}
                </p>
              </Link>
              <Link href="/contact" passHref>
                <p className="home-nav-item">
                  {isArabic ? "اتصل بنا" : "CONTACT"}
                </p>
              </Link>
              {!isLoggedIn ? (
                <Link href="/login" passHref>
                  <p className="home-nav-item">
                    {isArabic ? "تسجيل الدخول" : "SIGN IN"}
                  </p>
                </Link>
              ) : (
                <p className="home-nav-item" onClick={logout}>
                  {isArabic ? "" : "Logout"}
                </p>
              )}
              <Link href="/legal" passHref>
                <p className="home-nav-item">
                  {isArabic ? "المعلومات القانونية" : "Legal Info"}
                </p>
              </Link>
              <div
                className="home-nav-item"
                onClick={() => actions.toggleLang()}
              >
                {isArabic ? "English" : "العربية"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
