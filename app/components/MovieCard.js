"use client";
import React, { useEffect, useContext } from "react";
import { Context } from "../context/appContext";
import Image from "next/image";
import styles from "../styles/movie-card.css";

const MovieCard = ({ result }) => {
  const { store, actions } = useContext(Context);

  if (!result) {
    return null;
  }

  const videoId = result.trailer
    ? new URL(result.trailer).searchParams.get("v")
    : null;
  const trailerUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?&loop=1&mute=1&playlist=${videoId}&showinfo=0&rel=0&enablejsapi=1`
    : null;

  useEffect(() => {
    function adjustCloseButtonPosition() {
      const modal = document.querySelector(".modal");
      const closeMc = document.querySelector(".close-mc");

      if (modal && closeMc) {
        const modalHeight = modal.offsetHeight;
        const topValue = `calc(50vh - ${modalHeight / 2}px)`;
        closeMc.style.top = topValue;
      }
    }

    adjustCloseButtonPosition();
    window.addEventListener("resize", adjustCloseButtonPosition);

    return () =>
      window.removeEventListener("resize", adjustCloseButtonPosition);
  }, [store.modalIsOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      const modal = document.querySelector(".modal");
      if (store.modalIsOpen && modal && !modal.contains(event.target)) {
        actions.toggleModal();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [store.modalIsOpen, actions]);

  return (
    <>
      {store.modalIsOpen && (
        <div className="modal">
          <div className="together">
            <div
              className="close-mc"
              onClick={(e) => {
                e.stopPropagation();
                actions.toggleModal();
              }}
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
            <Image
              width={300}
              height={450}
              className="movie-modal-image"
              src={result.image}
              alt=""
            />
            <div className="review-container">
              <span className="review-title" id="">
                {result.subtitle ? result.subtitle : result.title}
              </span>

              {result.description && (
                <p className="review">{result.description}</p>
              )}
              {result.instruction && (
                <span className="review">
                  {result.instruction}
                  {result.instruction2 && <span>{result.instruction2}</span>}
                </span>
              )}

              {trailerUrl ? (
                <div className="streaming-trailer-div">
                  <div className="trailer-container">
                    <iframe
                      className="iframe-2"
                      src={trailerUrl}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
