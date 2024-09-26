import React from "react";
import Image from "next/image";
// import stypes from "./workshops.css"
import styles from "../screenings/screenings.css";

const page = () => {
  return (
    <div className="screenings-container">
      <Image
        height={600}
        width={600}
        className="screenings-image"
        src={"/img/sample6.png"}
        alt=""
      ></Image>
      <div className="about">
        <a
          href="https://forms.gle/jhqCyXccjosS1Qje6"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apply for Fiscal Sponsorship with CCEA
        </a>

        <span>
          We are dedicated to nurturing a deeper appreciation for 8mm and 16mm
          filmmaking. Our workshops offer hands-on experience shooting and
          editing analog film using our Bolex Reflex cameras and analog editing
          equipment. Our development sessions introduce participants to
          eco-friendly processing methods using household items to develop film
          in a manner that's environmentally conscious, non-toxic, and
          inexpensive. With the artist's permission, the films made in the
          workshops will be shown at one of CCEA's public screenings.
        </span>
      </div>
    </div>
  );
};

export default page;
