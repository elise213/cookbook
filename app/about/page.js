"use client";
import React, { useState } from "react";
import styles from "./about.css";
import FakeNavBar from "../components/FakeNavbar";
import Footer from "../components/Footer";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const About = () => {
  return (
    <>
      <div className="about-page">
        <FakeNavBar />
        <div className="about-content-div">
          <div className="about-header">
            <p className="person-bio">
              {/* Established in 1927, the Theosophy Hall stands as a hub for
              artistic, spiritual, social, and intellectual gatherings:
              theatrical performance and rehearsal, study groups, dance, music,
              readings, film screenings, and events we haven't yet
              imagined. */}
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;
