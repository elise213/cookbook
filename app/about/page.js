"use client";
import React from "react";
import styles from "./about2.css";
import NavBar from "../components/Navbar";

const About = () => {
  return (
    <>
      <NavBar />
      <div className="about-page">
        <div className="scroll">
          <div className="about-content-div">
            <div className="bio-container">
              {/* <div className="about-title">Fatima's Story</div> */}
              <div className="bio-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </div>
            </div>

            <div className="bio-container">
              {/* <img
              src="/img/QJudge.png"
              className="theo-bio-img"
              alt="William Q. Judge"
              style={{ marginBottom: "-15px" }}
            /> */}
              <div className="bio-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </div>
            </div>

            <div
              className="about-section-special"
              style={{ marginBottom: "30px" }}
            >
              <div className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
