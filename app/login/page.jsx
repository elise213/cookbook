"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { Context } from "../context/appContext";
import styles from "../login/login.css";
import Navbar from "../components/Navbar";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store, actions } = useContext(Context);
  const router = useRouter();

  const { user, authChecked } = store;
  const isLoggedIn = !!user;

  const handleLogin = actions.handleLogin;
  const handleLogout = actions.logoutAndClear;
  const lang = store.lang;
  const isArabic = lang === "ar";
  const t = (obj) => obj?.[lang] || obj?.en || "";

  return (
    <>
      <Navbar />
      <p className="back-button" onClick={() => router.push("/")}>
        {isArabic ? "العودة إلى كتاب الوصفات" : " ← Back to Home"}
      </p>
      <div className="login-page">
        {authChecked && isLoggedIn ? (
          <button className="home-nav-item" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <form onSubmit={(e) => handleLogin(e, email, password, router)}>
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
            <br />

            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
            <br />

            <button
              className="home-nav-item"
              type="submit"
              style={{ width: "100%", margin: "0" }}
            >
              Log in
            </button>
            <Link href="/forgotpassword" style={{ marginTop: "20px" }}>
              <p className="quote">Forgot Password</p>
            </Link>
          </form>
        )}
      </div>
    </>
  );
}
