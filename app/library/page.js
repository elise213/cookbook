import React from "react";
import styles from "./library.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div>
      <Navbar version="1" />

      <section class="book-container">
        <iframe src="https://theosophylib.com/" title="Embedded Site"></iframe>
      </section>
    </div>
  );
};

export default page;
