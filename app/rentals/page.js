"use client";
import React, { useContext, useEffect, useState, useRef } from "react";
import styles from "./rentals.css";
import FakeNavBar from "../components/FakeNavbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { Context } from "../context/appContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Spacer from "../components/Spacer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";

const Rentals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const { store } = useContext(Context);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqData = [
    {
      question: "What types of events can be hosted in the rental space?",
      answer:
        "The rental space is suitable for a variety of events, including corporate meetings, private parties, weddings, conferences, and workshops. It offers a flexible layout, customizable seating arrangements, and essential amenities to accommodate different types of gatherings.",
    },
    {
      question: "Is the venue available for film and photo shoots?",
      answer:
        "Yes, the venue is available for film productions, commercial photo shoots, and creative projects. It offers a visually appealing space with natural lighting, versatile backdrops, and easy load-in access for film crews and photographers.",
    },
    {
      question: "What amenities are included with the rental?",
      answer:
        "The rental includes access to high-speed Wi-Fi, professional lighting options, a sound system, chairs and tables, a kitchen or catering space, and on-site parking. Additional equipment or services may be available upon request.",
    },
    {
      question:
        "Are there any restrictions or guidelines for renting the space?",
      answer:
        "Yes, renters must adhere to guidelines regarding noise levels, capacity limits, and cleanup responsibilities. Certain decor restrictions may apply, and all events must comply with local regulations. A security deposit and event insurance may be required for specific bookings.",
    },
  ];

  // Open modal with multiple images
  const handleImageClick = (images) => {
    setModalImages(images);
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImages([]);
  };

  const GoogleCalendarBooking = () => {
    return (
      <div
        style={{
          textAlign: "center",
          width: "100%",
          backgroundColor: "white",
          height: "700px",
        }}
        className="iframe-cont-1"
      >
        <div
          style={{
            margin: "auto",
            overflow: "hidden",
            maxWidth: "600px",
            height: "700px",
          }}
          className="iframe-cont-2"
        >
          <iframe
            scrolling="false"
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3klgnsxkxQi2cBYDmV0eEBn_UtCJV12I23tWNPkZKtmiCMHsnM3KcNQNpKYen8jzug-ULpJfXx?gv=true"
            style={{
              border: "0",
              width: "100%",
              overflow: "hidden",
              backgroundColor: "white",
              margin: "0",
              height: "100%",
            }}
          ></iframe>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="rentals-page">
        <FakeNavBar />
        <div className="room-sections">
          <Spacer />
          {store.rooms.map((room, index) => {
            const isEven = index % 2 === 0; // Check if index is even

            return (
              <div
                className={`about-person ${isEven ? "even" : "odd"}`}
                key={index}
              >
                {/* Alternate the order of elements */}
                {isEven ? (
                  <>
                    <div className="room-image">
                      <img
                        src={`/img/${room.images[0]}`}
                        alt={room.name}
                        className="person-image"
                      />
                    </div>
                    <div className="rental-text-div">
                      <div className="room-text">
                        <p className="room-title">{room.name}</p>
                        <span className="person-bio">{room.text}</span>
                        <div
                          className="learn-more-button"
                          style={{ marginRight: "0", marginTop: "20px" }}
                        >
                          <Link
                            href="https://giggster.com/listing/ornate-1920s-lodge-and-theater"
                            passHref
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            LEARN MORE
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="rental-text-div">
                      <div className="room-text">
                        <p className="room-title">{room.name}</p>
                        <span className="person-bio">{room.text}</span>
                        <div
                          className="learn-more-button"
                          style={{ marginRight: "0", marginTop: "20px" }}
                        >
                          <Link
                            href="https://giggster.com/listing/ornate-1920s-lodge-and-theater"
                            passHref
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            SCHEDULE A TOUR
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="room-image">
                      <img
                        src={`/img/${room.images[0]}`} // Display first image from array
                        alt={room.name}
                        className="person-image"
                      />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <GoogleCalendarBooking />

        <div className="faq-page">
          <p className="event-heading">Frequently Asked Questions</p>
          {faqData.map((item, index) => (
            <div className="about-div-2" key={index}>
              <div onClick={() => toggleFAQ(index)} className="div-2-drop">
                <span className="person-bio">{item.question}</span>
                <span
                  style={{
                    transform:
                      openIndex === index ? "rotate(90deg)" : "rotate(0)",
                    transition: "transform 0.3s",
                  }}
                >
                  <ArrowForwardIosIcon />
                </span>
              </div>
              {openIndex === index && (
                <div className="drop-div">
                  <p className="person-bio">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="testimonials-section">
          <p className="event-heading">What People Are Saying</p>
          <div className="testimonial-container">
            <div className="testimonial">
              <p className="testimonial-text">
                "An absolutely wonderful venue! Perfect for our event."
              </p>
              <p className="testimonial-author">— Jessica R.</p>
            </div>
            <div className="testimonial">
              <p className="testimonial-text">
                "The Theosophy Hall is the most magical building in LA."
              </p>
              <p className="testimonial-author">— Aldous Huxley</p>
            </div>
            <div className="testimonial">
              <p className="testimonial-text">
                "We hosted a lecture here, and everything went very smoothly."
              </p>
              <p className="testimonial-author">— Mark T.</p>
            </div>
            <div className="testimonial">
              <p className="testimonial-text">
                "We had a seamless experience with top-notch hospitality."
              </p>
              <p className="testimonial-author">— Sophia L.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      {/* Modal with Image Carousel */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>

            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true} // Enables infinite looping
            >
              {modalImages.map((img, imgIndex) => (
                <SwiperSlide key={imgIndex}>
                  <Image
                    height={800}
                    width={1200}
                    quality={100}
                    className="modal-image"
                    src={`/img/${img}`}
                    alt="Larger view"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default Rentals;
