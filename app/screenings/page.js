"use client";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/appContext";
import Image from "next/image";
import styles from "./screenings.css";
// import FrontPageCard from "../components/FrontPageCard";

const Screenings = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="screenings-container">
      <Image
        height={600}
        width={600}
        quality={100}
        className="screenings-image"
        src={"/img/sample5.png"}
        alt=""
      ></Image>
      {/* <div className="about">
        <span>
          CCEA brings an array of rare experimental and 16mm films to the heart
          of Austin, Texas. We aim to be where the spirit of creativity meets
          the warmth of community.
        </span>
      </div> */}
      <div className="movie-scroll-labels">
        <p>UPCOMING EVENTS</p>
      </div>
      <div className="scroll-search-results">
        <ul style={{ listStyleType: "none" }}>
          {store.events.map((result, i) => (
            <li
              key={i}
              style={
                i === store.events.length - 1 ? { paddingRight: "35px" } : {}
              }
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Screenings;
