"use client";
import React, { useContext, useState, useEffect } from "react";
import styles from "../styles/footer.css";
import { Context } from "../context/appContext";
import EmailList from "./EmailList";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Footer = () => {
  const { store, actions } = useContext(Context);
  const [isNavOpen, setIsNavOpen] = useState(store.isNaVOpen);

  useEffect(() => {
    setIsNavOpen(store.isNavOpen);
  }, [store.isNavOpen]);

  return (
    <footer>
      <div className="footer-div-2">
        <div className="footer-nav">
          <p className="footer-nav-item">
            <Link href="/" passHref>
              HOME
            </Link>
          </p>
          <p className="footer-nav-item">
            <Link href="/rentals" passHref>
              RENTALS
            </Link>
          </p>
          <p className="footer-nav-item">
            <Link href="/about" passHref>
              ABOUT
            </Link>
          </p>
          <p className="footer-nav-item">
            <Link href="/support" passHref>
              SUPPORT US
            </Link>
          </p>
          <p className="footer-nav-item">
            <Link href="/contact" passHref>
              CONTACT
            </Link>
          </p>
          <p className="footer-nav-item">
            <Link href="/policies" passHref>
              RENTAL POLICIES
            </Link>
          </p>
        </div>

        <div className="footer-content">
          <div className="footer-div-1">
            <EmailList />
            <div className="socials">
              <Link href="https://www.instagram.com/theosophyhall/">
                <InstagramIcon style={{ fontSize: "20px" }} />
              </Link>
              <Link href="/contact" passHref>
                <EmailOutlinedIcon style={{ fontSize: "20px" }} />
              </Link>
            </div>
          </div>
          <div className="contact-footer-div">
            <p className="footer-contact-text">802-379-9777</p>
            <p className="footer-contact-text">hello@theosophyhall.com</p>
            <p className="footer-contact-text">245 W 33rd St. LA, CA</p>
          </div>
        </div>
      </div>
      <p className="footer-copyright">©2025 THEOSOPHY HALL THEATER</p>
    </footer>
  );
};

export default Footer;
