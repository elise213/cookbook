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
          <div className="image-div">
            <div className="home-text-div">
              <p className="home-text">
                Welcome to Theosophy Hall's Theater Rental. Constructed in 1927,
                our ornate theater has hosted countless spiritual and
                philosophical gatherings over the decades. Whether you are
                looking to host a concert, event, or theatrical performance, our
                hall, with its vaulted ceilings and a capacity for up to 350
                attendees, provides the perfect blend of historical ambiance and
                modern amenities to create, celebrate, and inspire.
                {/* See{" "}
                <a href="https://giggster.com/listing/ornate-1920s-lodge-and-theater">
                  here
                </a>{" "}
                for more details. */}
              </p>
            </div>
            <img src="/img/TH1.png" alt="CCEA Logo" className="home-image" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Home;
