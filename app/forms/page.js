"use client";
import React from "react";
import styles from "./forms.css";
import Footer from "../components/Footer";
import FakeNavbar from "../components/FakeNavbar";
import Image from "next/image";

// import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="forms-and-documents-page">
        <FakeNavbar />
        <p>Fiscal Sponsorship Forms and Downloads</p>

        <Footer />
      </div>
    </>
  );
};

export default page;
