"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "./context/appContext";
import styles from "./globals.css";
import Link from "next/link";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Spacer from "./components/Spacer";

const Home = () => {
  const { store, actions } = useContext(Context);
  const scrollRef = useRef();
  const [index, setIndex] = useState(0);

  const images = [
    "img/theater.png",
    "/img/seats.jpg",
    "/img/6.jpg",
    "/img/7.jpg",
  ];

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

  // Overflow Debug
  // useEffect(() => {
  //   const checkOverflow = () => {
  //     const elements = document.querySelectorAll("*");
  //     const overflowingElements = [];

  //     elements.forEach((el) => {
  //       if (el.scrollWidth > window.innerWidth) {
  //         overflowingElements.push(el);

  //         console.log(
  //           `Overflowing element: ${el.className || el.tagName}`,
  //           `Width: ${el.scrollWidth}, Window: ${window.innerWidth}`
  //         );

  //         [...el.children].forEach((child) => {
  //           console.log(
  //             `↳ Child: ${child.className || child.tagName}`,
  //             `Width: ${child.scrollWidth}`
  //           );
  //         });
  //       }
  //     });

  //     if (overflowingElements.length > 0) {
  //       console.warn("Overflowing elements detected:", overflowingElements);
  //       overflowingElements.forEach((el) => {
  //         el.style.outline = "2px solid red";
  //       });
  //     }
  //   };

  //   checkOverflow();
  //   window.addEventListener("resize", checkOverflow);

  //   return () => window.removeEventListener("resize", checkOverflow);
  // }, []);

  const today = new Date();

  const upcomingEvents = store.events.filter(
    (event) => new Date(event.date) >= today
  );
  const pastEvents = store.events.filter(
    (event) => new Date(event.date) < today
  );

  return (
    <>
      <div className={` home-body content`}>
        <NavBar />
        <div className="home-second-div">
          <Spacer color={"rgba(255, 255, 255, 0.9)"} />
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
              <div className="home-text-div">
                <p className="welcome">WELCOME {"  "}</p>
                <p className="home-text">
                  Established in 1927, the Theosophy Hall stands as a hub for
                  artistic, spiritual, social, and intellectual gatherings:
                  theatrical performance and rehearsal, study groups, dance,
                  music, readings, film screenings, and events we haven't yet
                  imagined. The Hall has hosted countless spiritual and
                  philosophical gatherings. With the capacity for 350 guests,
                  the Theosophy Hall provides a perfect blend of historical
                  ambiance and modern amenities.
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
      </div>
    </>
  );
};
export default Home;
