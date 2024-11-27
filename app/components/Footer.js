"use client";
import React, { useContext, useState, useEffect } from "react";
import styles from "../styles/footer.css";
import { Context } from "../context/appContext";
import EmailList from "./EmailList";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";

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
          <Link href="https://www.instagram.com/theosophyhall/">
            {/* <i className="fa-brands fa-instagram" /> */}
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
