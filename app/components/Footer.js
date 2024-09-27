"use client";
import React, { useContext, useState, useEffect } from "react";
import styles from "../styles/footer.css";
import { Context } from "../context/appContext";
import EmailList from "./EmailList";
import Link from "next/link";

const Footer = () => {
  const { store, actions } = useContext(Context);
  const [isNavOpen, setIsNavOpen] = useState(store.isNaVOpen);

  useEffect(() => {
    setIsNavOpen(store.isNavOpen);
  }, [store.isNavOpen]);

  return (
    <footer>
      <div className="border">
        <img src="/img/border.png" alt="CCEA Logo" className="border-bl" />
        <img src="/img/border.png" alt="CCEA Logo" className="border-br" />
      </div>
      <div className="footer-div-2">
        <EmailList />
        <div className="socials">
          <p>FOLLOW</p>
          <Link href="https://www.instagram.com/ccexarts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <i className="fa-brands fa-instagram" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
