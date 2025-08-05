"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { Context } from "../context/appContext";
import Swal from "sweetalert2";
import styles from "../login/login.css";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const lang = store.lang;
  const isArabic = lang === "ar";
  const t = (obj) => obj?.[lang] || obj?.en || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/forgot-password`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Email Sent",
          text: "Check your inbox for the password reset link.",
        });
        setEmail("");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.error || "Something went wrong.",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <p className="back-button" onClick={() => router.push("/")}>
        {isArabic ? "العودة إلى كتاب الوصفات" : " ← Back to Home"}
      </p>
      <form onSubmit={handleSubmit} className="forgot-form">
        <p className="forgot-title">Forgot Password</p>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-input"
        />
        <button
          type="submit"
          className="home-nav-item"
          disabled={loading}
          style={{ marginTop: "10px" }}
        >
          {loading ? "Sending..." : "Send Reset Email"}
        </button>
      </form>
    </div>
  );
}
