"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../context/appContext";
import Image from "next/image";
import styles from "./events.css";
import FakeNavbar from "../components/FakeNavbar";
import Footer from "../components/Footer";
import EmailList from "../components/EmailList";
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

  // Separate upcoming and past events
  const upcomingEvents = store.events.filter(
    (event) => new Date(event.date) >= today
  );
  const pastEvents = store.events.filter(
    (event) => new Date(event.date) < today
  );

  // Open modal for event details
  const handleEventClick = (event) => {
    setModalEvent(event);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalEvent(null);
  };

  return (
    <div className="events-page">
      <FakeNavbar />

      {/* Event Overview Section */}
      <div className="event-content-container">
        {/* <EmailList /> */}
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
        {/* Upcoming Events List */}
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

        {/* Calendar of Upcoming Events */}
        {/* <div className="availability-calendar">
          <div className="calendar-title">Upcoming Events Calendar</div>
          <div className="calendar-container">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=your_calendar_id&ctz=America/New_York"
              className="calendar-iframe"
              frameBorder="0"
              scrolling="no"
              style={{ minWidth: "300px", margin: "30px 0" }}
            ></iframe>
          </div>
        </div> */}

        {/* Past Events Section */}
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

      {/* Modal for Event Details */}
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

            {/* Event Photo Gallery */}
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
