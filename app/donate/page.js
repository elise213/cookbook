"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context/appContext";
import Image from "next/image";
import styles from "./donate.css";
import Link from "next/link";
import Footer from "../components/Footer";
import FakeNavbar from "../components/FakeNavbar";
import MovieCard from "../components/MovieCard";

const donate = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="donate-page">
      <FakeNavbar />
      <div className="donate-container">
        <div className="wire-container">
          <p className="wire-info">
            For credit card donations up to $1,000 and ACH up to $10,000, please
            use the form below.
          </p>
          {/* <span className="wire-info">
            <span
              style={{
                color: "red",
                textAlign: "left",
              }}
            >
              Warning
            </span>{" "}
            <span className="warning-text">{store.zeffyWarningText}</span>
          </span> */}
          <p className="wire-info">
            Please use a wire transfer for donations of $10,000 or more.
          </p>
          <div className="wire-info-2">
            <p className="wire-info">
              ACCT: 583331023
              <br />
              ROUTING: 021000021
            </p>
            <p className="wire-info">
              Chase Bank
              <br />
              270 Park Ave.
              <br />
              New York, NY 10017
            </p>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            // overflow: "hidden",
            height: "1300px",
            width: "100%",
            display: "flex",
          }}
        >
          <iframe
            className="donation-iframe"
            title="Donation form powered by Zeffy"
            src="https://www.zeffy.com/embed/donation-form/theosophy"
            allowpaymentrequest
            allowTransparency="true"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default donate;
