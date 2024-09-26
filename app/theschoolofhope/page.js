"use client";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/appContext";
import Image from "next/image";
import styles from "../allthatsleft/allthatsleft.css";
import Link from "next/link";
import FakeNavbar from "../components/FakeNavbar";
import Footer from "../components/Footer";

const theschoolofhope = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="landing-container">
      <FakeNavbar />
      <div className="landing-container-2">
        <div className="landing-title">{store.fiscalFilms[2].title}</div>
        <br />
        {/* <div className="image-container"> */}
        <Image
          height={100}
          width={100}
          layout="responsive"
          quality={70}
          className="fiscalFilms-image"
          src={store.fiscalFilms[2].image}
          alt=""
        />
        {/* </div> */}
        <div className="project-text">{store.fiscalFilms[2].logline}</div>
        <div className="first-section">
          <div className="basic-info">
            <span className="heading">Type: </span>
            <span>{store.fiscalFilms[2].type}</span>
            <br />
            <span className="heading">Status: </span>
            <span>{store.fiscalFilms[2].status}</span>
            <br />
            <span className="heading">Director/Producer: </span>
            <span>{store.fiscalFilms[2].director}</span>
            <br />
            <span className="heading">Producer: </span>
            <span>{store.fiscalFilms[2].producer}</span>
            <br />
            {store.fiscalFilms[2].execProducer && (
              <>
                <span className="heading">Executive Producer: </span>
                <span>{store.fiscalFilms[2].execProducer}</span>
              </>
            )}
          </div>
          <div>
            <a href="#landing-title-2" className="read-more">
              <span>Read more about this project</span>
            </a>
          </div>
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
                textDecoration: "underline",
              }}
            >
              Warning:
            </span>{" "}
            <span className="wire-info">{store.zeffyWarningText}</span>
          </span>
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
            src="https://www.zeffy.com/embed/donation-form/741b1da1-b097-4b0e-8778-aaab0e4bf1bb"
            allowpaymentrequest="true"
            allowtransparency="true"
          ></iframe>
        </div>
        <div id="landing-title-2" className="landing-title-2">
          {store.fiscalFilms[2].title}
        </div>
        <span className="heading">Synopsis:</span>
        <span className="project-text">{store.fiscalFilms[2].synopsis}</span>

        <p className="project-text" style={{ textIndent: "40px" }}></p>
        <br />
        <br />
        <span className="heading">Director:</span>
        <span className="project-text">{store.fiscalFilms[2].directorBio}</span>
        <br />
        <br />
        <span className="heading">Producer:</span>
        <span className="project-text">{store.fiscalFilms[2].producerBio}</span>
        <br />
        <br />
        {store.fiscalFilms[2].producer2Bio && (
          <>
            <span className="heading">Director of Photography:</span>
            <span className="project-text">
              {store.fiscalFilms[2].producer2Bio}
            </span>
          </>
        )}
        <br />
        <div className="donate-first">
          <a href="#donation-form" className="donate-to">
            <p>Make a donation to </p>
            <p className="title-2">{store.fiscalFilms[2].title}</p>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default theschoolofhope;
