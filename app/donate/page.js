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
          <span className="wire-info">
            For credit card donations up to $1,000 and ACH up to $10,000, please
            use the form below.
            <br />
            <br />
            <span
              style={{
                color: "red",
                textAlign: "left",
              }}
            >
              Warning!!
            </span>{" "}
            A donation to the payment platform Zeffy will automatically populate
            at ~9%. To prevent this charge, enter the amount of your donation,
            choose "other" from the dropdown menu in the Summary section. In the
            box labeled "Contribution," enter $0, or the amount you want to give
            to Zeffy.
          </span>
        </div>
        <div className="wire-container">
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
          className="donation-form"
          id="donation-form"
          style={{ height: "1700px" }}
        >
          <iframe
            title="Donation form powered by Zeffy"
            style={{
              position: "absolute",
              border: "0",
              top: "0",
              left: "0",
              bottom: "0",
              right: "0",
              width: "100%",
              height: "100%",
            }}
            src="https://www.zeffy.com/en-US/embed/donation-form/0f0acc32-8176-4e42-8fcc-181879a6a219"
            allowpaymentrequest="true"
            allowtransparency="true"
          ></iframe>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default donate;
