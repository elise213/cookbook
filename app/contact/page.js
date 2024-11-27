"use client";
import React, { useContext, useRef } from "react";
import { Context } from "../context/appContext";
import styles from "../styles/contact.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Link from "next/link";
import FakeNavbar from "../components/FakeNavbar";
import Footer from "../components/Footer";

const Contact = () => {
  const { actions } = useContext(Context);
  const form = useRef();
  const SERVICE_ID = "service_wghlfmq";
  const TEMPLATE_ID = "template_uv8sudi";
  const PUBLIC_KEY = "cJEvycw40i3Bo_bkK";

  // Function to send an email
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className="contact-page">
      <FakeNavbar />
      <div className="contact-div">
        <p className="home-text">
          We are here to assist you with any inquiries or reservations. Our team
          is dedicated to ensuring that your experience with Theosophy Hall is
          as enriching and seamless as possible. Contact us to discover how we
          can help bring your event to life in a space that’s steeped in both
          beauty and significance.
        </p>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="contact-form-div">
            <div className="form-col">
              <input
                type="text"
                id="nameInput"
                name="name"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="form-col">
              <input
                type="text"
                id="emailInput"
                name="email"
                className="form-control"
                placeholder="Email address"
              />
            </div>
          </div>
          <div className="contact-form-div">
            <div className="form-col">
              <input
                type="text"
                id="subjectInput"
                name="subject"
                className="form-control"
                placeholder="Subject"
              />
            </div>
          </div>
          <div className="contact-form-div">
            <div className="form-col-full">
              <textarea
                id="contactTextArea"
                name="message"
                className="form-control"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
          {/* <img src="/img/CCEA99.png" alt="CCEA Logo" className="contact-logo" /> */}
          <div className="form-col-full">
            <button className="send-button" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
