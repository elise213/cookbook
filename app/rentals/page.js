import React from "react";
import styles from "./rentals.css";
import FakeNavBar from "../components/FakeNavbar";
import Footer from "../components/Footer";
import Image from "next/image";

const Rentals = () => {
  return (
    <>
      <div className="about-page">
        <FakeNavBar />
        <div className="about-person">
          <Image
            height={100}
            width={100}
            layout="responsive"
            quality={100}
            className="person-image"
            src="/img/Ricky.jpg"
            alt=""
          ></Image>
          <p className="person-bio">
            Ricky Berrin is a Los Angeles-based lawyer, producer, and business
            affairs executive with a distinguished career in the entertainment
            industry. He has served as production counsel and executive on
            notable films, including <em>How I Faked My Life with AI </em>{" "}
            (Tribeca 2024), <em>Defiant </em>(Toronto International Film
            Festival 2023), and the Emmy-nominated film <em>Flight Risk</em>{" "}
            (Amazon 2022). His work also extends to television, where he served
            as production counsel for the critically acclaimed HBO series{" "}
            <em>The Vow</em>. In addition, Ricky produced the innovative
            mixed-reality project <em>Persuasion Machines</em>, which premiered
            at Sundance in 2020. Ricky received his MBA from NYU Stern School of
            Business, his JD from Duke University Law School, and his BA from
            the University of Pennsylvania.
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Rentals;
