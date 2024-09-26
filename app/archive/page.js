"use client";
import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Video from "../components/Video";
import { Context } from "../../app/context/appContext";
import MovieCard from "../components/MovieCard";
// import FrontPageCard from "../components/FrontPageCard";

const page = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="home-body">
      <div className="scroll-search-results">
        <ul style={{ listStyleType: "none" }}>
          {store.events.map((result, i) => (
            <li key={i}>
              <div>{/* <FrontPageCard result={result} /> */}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
