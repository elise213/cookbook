"use client";
import React, { useState, useRef, useContext } from "react";
import { useRouter } from "next/navigation";
import { Context } from "../context/appContext";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import styles from "./create.css";
import Link from "next/link";

const SERVICE_ID = "service_5v912b5";
const TEMPLATE_ID = "template_11p5p5t";
const PUBLIC_KEY = "frmUHhhWUG9vtMRit";

const translations = {
  name: { en: "Name", ar: "الاسم" },
  email: { en: "Email", ar: "البريد الإلكتروني" },
  password: { en: "Password", ar: "كلمة المرور" },
  register: { en: "Register", ar: "تسجيل" },
  returnLogin: { en: "Return to Login", ar: "العودة إلى تسجيل الدخول" },
  successTitle: { en: "Account Created", ar: "تم إنشاء الحساب" },
  successTextOrg: {
    en: "You now have an account. Organization verification is pending.",
    ar: "لديك الآن حساب. جاري التحقق من المنظمة.",
  },
  successTextUser: {
    en: "You now have an account. Please log in.",
    ar: "تم إنشاء الحساب. الرجاء تسجيل الدخول.",
  },
  errorTitle: { en: "Registration Failed", ar: "فشل التسجيل" },
  errorExists: {
    en: "That email is already registered. Please log in or use a different email.",
    ar: "هذا البريد الإلكتروني مسجل بالفعل. الرجاء تسجيل الدخول أو استخدام بريد إلكتروني آخر.",
  },
  errorGeneric: {
    en: "An error occurred while creating your account.",
    ar: "حدث خطأ أثناء إنشاء حسابك.",
  },
  verifySent: {
    en: "Verification Email Sent",
    ar: "تم إرسال بريد التحقق",
  },
  verifyText: {
    en: "Your information has been sent for verification.",
    ar: "تم إرسال معلوماتك للتحقق.",
  },
  verifyFail: {
    en: "Failed to send verification email.",
    ar: "فشل في إرسال البريد الإلكتروني للتحقق.",
  },
};

const CreateAccount = ({ setLog, log }) => {
  const { store, actions } = useContext(Context);
  const lang = store.lang;
  const isArabic = lang === "ar";
  const t = (obj) => obj?.[lang] || obj?.en || "";

  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [is_org, setIs_org] = useState("");
  const [resourceName, setResourceName] = useState("");
  const [resourceCity, setResourceCity] = useState("");
  const formRef = useRef(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await actions.createUser(is_org, name, email, password);

      Swal.fire({
        icon: "success",
        title: t(translations.successTitle),
        text:
          is_org === "1"
            ? t(translations.successTextOrg)
            : t(translations.successTextUser),
      });

      if (is_org === "1" && resourceName && resourceCity) {
        sendOrgVerificationEmail();
      }

      router.push("/login");
    } catch (error) {
      let message = t(translations.errorGeneric);
      if (error.message === "Email already exists") {
        message = t(translations.errorExists);
      }

      Swal.fire({
        icon: "error",
        title: t(translations.errorTitle),
        text: message,
      });
    }
  };

  const sendOrgVerificationEmail = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("resourceName", resourceName);
    formData.append("resourceCity", resourceCity);

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      Swal.fire({
        icon: "success",
        title: t(translations.verifySent),
        text: t(translations.verifyText),
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: t(translations.verifyFail),
      });
    }
  };

  return (
    <div
      className="login-modal-content"
      dir={isArabic ? "rtl" : "ltr"}
      style={isArabic ? { textAlign: "right" } : {}}
    >
      <div className="login-modal-body">
        <form ref={formRef} onSubmit={handleRegister}>
          <div className="form-section">
            <label htmlFor="name" className="form-label less-margin">
              {t(translations.name)}
            </label>
            <input
              type="text"
              className="form-input"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-section">
            <label htmlFor="email" className="form-label">
              {t(translations.email)}
            </label>
            <input
              type="email"
              className="form-input"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-section">
            <label htmlFor="password" className="form-label">
              {t(translations.password)}
            </label>
            <input
              type="password"
              className="form-input"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="home-nav-item"
            variant="contained"
            color="primary"
            type="submit"
          >
            {t(translations.register)}
          </button>
        </form>

        <Link href="/login">
          <span className="forgot-password">{t(translations.returnLogin)}</span>
        </Link>
      </div>
    </div>
  );
};

export default CreateAccount;
