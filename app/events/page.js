"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context/appContext";
import Image from "next/image";
import styles from "./events.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Events = () => {
  const { store, actions } = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEvent, setModalEvent] = useState(null);
  const today = new Date();

  const upcomingEvents = store.events.filter(
    (event) => new Date(event.date) >= today
  );

  const pastEvents = store.events.filter(
    (event) => new Date(event.date) < today
  );

  const handleEventClick = (event) => {
    setModalEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalEvent(null);
  };

  return (
    <div className="events-page">
      <Navbar />
      <div className="event-content-container">
        <div className="event-text-div">
          <p className="event-text">
            Stay updated with the vibrant array of events hosted in our theater.
            This space serves as a hub for learning, cultural richness, and
            spiritual exploration, embodying the Theosophical commitment to
            fostering universal brotherhood and personal growth. Join us at one
            of our upcoming events to experience the dynamic community that
            calls Theosophy Hall home.
          </p>
        </div>
        <div className="events-div">
          <p className="event-heading">UPCOMING EVENTS</p>
          <div className="events-grid">
            {upcomingEvents.map((event, index) => (
              <div
                className="event-card"
                key={index}
                onClick={() => handleEventClick(event)}
              >
                <Image
                  width={250}
                  height={200}
                  quality={90}
                  className="event-image"
                  src={`/img/${event.images[0]}`}
                  alt={event.title}
                />
                <div className="event-info">
                  <p className="event-title">{event.title}</p>
                  <p className="event-date">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="events-div" style={{ borderTop: "1px solid gray" }}>
          <p className="event-heading">PAST EVENTS</p>
          <div className="events-grid">
            {pastEvents.map((event, index) => (
              <div
                className="event-card"
                key={index}
                onClick={() => handleEventClick(event)}
              >
                <Image
                  width={250}
                  height={200}
                  quality={90}
                  className="event-image"
                  src={`/img/${event.images[0]}`}
                  alt={event.title}
                />
                <div className="event-info">
                  <p className="event-title">{event.title}</p>
                  <p className="event-date">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && modalEvent && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div
            className="modal-content-event"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <p className="modal-event-title">{modalEvent.title}</p>
            <p className="modal-event-date">{modalEvent.date}</p>

            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
            >
              {modalEvent.images.map((img, imgIndex) => (
                <SwiperSlide key={imgIndex}>
                  <Image
                    width={600}
                    height={400}
                    className="modal-image"
                    src={`/img/${img}`}
                    alt={modalEvent.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <p className="modal-description">
              This is where event descriptions can be added. Event details,
              guest speakers, or highlights from the event.
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Events;
