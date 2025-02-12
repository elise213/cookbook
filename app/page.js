"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "./context/appContext";
import styles from "./globals.css";
import Image from "next/image";
import Link from "next/link";
import FakeNavBar from "./components/FakeNavbar";
import { auto } from "@popperjs/core";
import Footer from "./components/Footer";

const Home = () => {
  const { store, actions } = useContext(Context);
  const scrollRef = useRef();
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [index, setIndex] = useState(0);

  const images = ["/img/seats.jpg", "/img/6.jpg", "/img/7.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

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
    <>
      <div className={` home-body content`}>
        <FakeNavBar />
        <div className="home-div">
          <div className="slideshow">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Slide ${i + 1}`}
                className={`slide ${i === index ? "active" : ""}`}
              />
            ))}
          </div>
          <div className="image-div">
            {/* <img src="/img/TH1.png" alt="CCEA Logo" className="home-image" /> */}
            <div className="home-text-div">
              <p className="welcome">WELCOME {"  "}</p>
              <p className="home-text">
                Established in 1927, the Theosophy Hall stands as a hub for
                artistic, spiritual, social, and intellectual gatherings:
                theatrical performance and rehearsal, study groups, dance,
                music, readings, film screenings, and events we haven't yet
                imagined. The Theosophy Hall Theater in Los Angeles California
                has hosted countless spiritual and philosophical gatherings.
                With the capacity for 350 guests, the Theosophy Hall provides a
                perfect blend of historical ambiance and modern amenities.
              </p>

              <div className="learn-more-button">
                <Link
                  href="/about"
                  passHref
                  style={{ textDecoration: "none", color: "black" }}
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Home;
