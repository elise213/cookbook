"use client";
import React, { useContext } from "react";
import styles from "./contact.css";
import NavBar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="page-container">
      <NavBar />
      <div className="page-content">
        <div className="contact-page-contents"></div>
      </div>
    </div>
  );
};

export default Contact;
