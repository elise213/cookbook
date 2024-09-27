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
      <div className="footer-div-1">
        <div className="sitemap">
          <Link href="/" passHref>
            HOME
          </Link>
          <Link href="/about" passHref>
            ABOUT
          </Link>
          <Link href="/rentals" passHref>
            RENTALS
          </Link>
          <Link href="/events" passHref>
            EVENTS
          </Link>
          <Link href="/contact" passHref>
            CONTACT
          </Link>
        </div>
        <div className="footer-div-2">
          <div className="socials">
            <p>FOLLOW</p>
            <Link href="https://www.instagram.com/ccexarts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <i className="fa-brands fa-instagram" />
            </Link>
          </div>
          <EmailList />
        </div>
      </div>
      <p classNam e="footer-text">
        THE THEOSOPHY HALLEVENTS AND RENTALS
      </p>
    </footer>
  );
};

export default Footer;
