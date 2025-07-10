"use client";
import React, { useContext } from "react";
import styles from "./contact.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="page-container">
      <NavBar />
      <div className="page-content">
        <div className="contact-page-contents">
          <p className="about-title" style={{ margin: "0" }}>
            Schedule a Tour
          </p>
          <div className="calendar-box">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3klgnsxkxQi2cBYDmV0eEBn_UtCJV12I23tWNPkZKtmiCMHsnM3KcNQNpKYen8jzug-ULpJfXx?gv=true"
              frameBorder="0"
              title="Google Calendar Booking"
            ></iframe>
          </div>
          <div className="right-side">
            <p className="subtitle">Theosophy Hall in LA</p>
            <p className="description">
              The Theosophy Hall is the perfect backdrop to memorable
              productions. We accept long-term film bookings 6+ months out.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
