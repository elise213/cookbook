"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context/appContext";
import Image from "next/image";
import styles from "./events.css";
import Link from "next/link";
import Footer from "../components/Footer";
import FakeNavbar from "../components/FakeNavbar";
import MovieCard from "../components/MovieCard";

const events = () => {
  const { store, actions } = useContext(Context);
  const scrollRef = useRef();
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const body = document.body;
    const className = "no-scroll";
    const homeBody = document.querySelector(".home-body");

    if (store.isNavOpen || store.showContactModal) {
      body.classList.add(className);
    } else {
      body.classList.remove(className);
    }

    if (homeBody) {
      if (store.isNavOpen || store.showContactModal) {
        homeBody.classList.add(className);
      } else {
        homeBody.classList.remove(className);
      }
    }
  }, [store.isNavOpen, store.showContactModal]);

  const checkOverflow = () => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const isOver = container.scrollWidth > container.offsetWidth;
    setIsOverflowing(isOver);
  };

  const getActiveEvent = () => {
    const { store } = useContext(Context);
    return store.events.find((event) => event.id === store.activeEventId);
  };

  useEffect(() => {
    if (store.modalIsOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [store.modalIsOpen]);

  useEffect(() => {
    const body = document.body;
    if (store.isNavOpen || store.showContactModal) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  }, [store.isNavOpen, store.showContactModal]);

  useEffect(() => {
    checkOverflow();
    const handleResize = () => {
      actions.updateScreenSize();
      checkOverflow();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const today = new Date();

  // Separate events into upcoming and past events
  const upcomingEvents = store.events.filter(
    (event) => new Date(event.date) >= today
  );
  const pastEvents = store.events.filter(
    (event) => new Date(event.date) < today
  );

  return (
    <div className="events-page">
      <FakeNavbar />

      {/* Upcoming Events */}
      <p className="event-heading">UPCOMING EVENTS</p>
      <div
        ref={scrollRef}
        className="scroll-search-results"
        style={{
          justifyContent: isOverflowing ? "flex-start" : "center",
        }}
      >
        <ul>
          {upcomingEvents.map((result, i) => {
            return (
              <li
                key={i}
                style={
                  i === store.events.length - 1 ? { paddingRight: "" } : {}
                }
              >
                <div
                  className="event-container"
                  onClick={() => actions.toggleModal(result.id)}
                  style={{ padding: result.title ? "10px" : "0" }}
                >
                  <Image
                    style={{ filter: "grayscale(100%)" }}
                    width={result.title ? 200 : 220}
                    height={result.title ? 300 : 340}
                    quality={90}
                    className="movie"
                    src={
                      result.image ? result.image : "/path-to-default-image.jpg"
                    }
                    alt={result.title || "Default Image"}
                  />

                  {result.title && (
                    <p className="highlight-title">{result.title}</p>
                  )}

                  {store.modalIsOpen && store.activeEventId === result.id && (
                    <>
                      <div className="modal-overlay"></div>
                      <MovieCard result={getActiveEvent()} />
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Past Events */}
      <p className="event-heading">PAST EVENTS</p>
      <div className="scroll-search-results">
        <ul>
          {pastEvents.map((result, i) => {
            return (
              <li
                key={i}
                style={
                  i === store.events.length - 1 ? { paddingRight: "" } : {}
                }
              >
                <div
                  className="event-container"
                  // onClick={() => actions.toggleModal(result.id)}
                  style={{ padding: result.title ? "10px" : "0" }}
                >
                  <Image
                    style={{ filter: "grayscale(100%)" }}
                    width={result.title ? 200 : 220}
                    height={result.title ? 300 : 340}
                    quality={90}
                    className="movie"
                    src={
                      result.image ? result.image : "/path-to-default-image.jpg"
                    }
                    alt={result.title || "Default Image"}
                  />

                  {result.title && (
                    <p className="highlight-title">{result.title}</p>
                  )}

                  {store.modalIsOpen && store.activeEventId === result.id && (
                    <>
                      <div className="modal-overlay"></div>
                      <MovieCard result={getActiveEvent()} />
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default events;
