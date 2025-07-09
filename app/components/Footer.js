"use client";
import React from "react";
import styles from "../styles/footer.css";
import Directions from "./Directions";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <hr />
          <p>Contact Us</p>
          <a href="mailto:hpb@theosophyhall.com">hpb@theosophyhall.com</a>
          <p>245 W 33rd St. LA, CA</p>
        </div>

        <div className="footer-section">
          <hr />
          <a href="#" aria-label="Instagram">
            Instagram
          </a>
          <a href="#" aria-label="Facebook">
            Facebook
          </a>
          <a href="#" aria-label="Twitter">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
