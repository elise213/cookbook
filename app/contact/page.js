"use client";
import React, { useRef, useContext } from "react";
import styles from "./contact.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import { Context } from "../context/appContext";

const Contact = () => {
  const form = useRef();
  const { store } = useContext(Context);
  const lang = store.lang;

  const SERVICE_ID = "service_5v912b5";
  const TEMPLATE_ID = "template_u7nitmj";
  const PUBLIC_KEY = "frmUHhhWUG9vtMRit";

  const translations = {
    en: {
      name: "Name",
      email: "Email address",
      message: "Message",
      send: "SEND",
      successTitle: "Message Sent Successfully",
      errorTitle: "Oops, something went wrong",
    },
    ar: {
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "رسالة",
      send: "إرسال",
      successTitle: "تم إرسال الرسالة بنجاح",
      errorTitle: "حدث خطأ ما",
    },
  };

  const t = translations[lang];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        Swal.fire({
          icon: "success",
          title: t.successTitle,
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: t.errorTitle,
          text: error.text,
        });
      }
    );

    e.target.reset();
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="scroll">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="hidden" name="source" value="cookbook" />

            <input
              type="text"
              id="nameInput"
              name="name"
              className="form-control"
              placeholder={t.name}
            />

            <input
              type="text"
              id="emailInput"
              name="email"
              className="form-control"
              placeholder={t.email}
            />

            <textarea
              id="contactTextArea"
              name="message"
              className="form-control"
              placeholder={t.message}
            ></textarea>

            <button
              style={{ width: "100%" }}
              className="home-nav-item"
              type="submit"
            >
              {t.send}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
