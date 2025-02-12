"use client";
import React, { useContext, useState } from "react";
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
import { InlineWidget } from "react-calendly";
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

  return (
    <>
      <div className="rentals-page">
        <FakeNavBar />

        {/* Rental Packages Section */}
        {/* <div className="rental-packages">
          <div className="rental-page-title">Rental Packages</div>

          <div className="packages-grid">
            <div className="package-card">
              <Image
                src="/img/2.jpg"
                alt="Basic Package"
                width={100}
                height={100}
                className="package-photo"
              />
              <div className="card-info">
                <div className="package-name">Basic Rental</div>
                <div className="package-details">
                  Includes standard lighting and seating for up to 50 guests.
                </div>
                <div className="package-price">$500 / day</div>
              </div>
            </div>
            <div className="package-card">
              <Image
                src="/img/3.jpg"
                alt="Premium Package"
                width={100}
                height={100}
                className="package-photo"
              />

              <div className="card-info">
                <div className="package-name">Premium Rental</div>
                <div className="package-details">
                  Includes advanced lighting, sound system, and seating for 100
                  guests.
                </div>
                <div className="package-price">$1000 / day</div>
              </div>
            </div>
            <div className="package-card">
              <Image
                src="/img/4.jpg"
                alt="VIP Package"
                width={100}
                height={100}
                className="package-photo"
              />

              <div className="card-info">
                <div className="package-name">VIP Experience</div>
                <div className="package-details">
                  Exclusive access, personalized setup, backstage amenities, and
                  seating for 200 guests.
                </div>
                <div className="package-price">$2500 / day</div>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="rental-image-div">
          <img src="/img/banner.jpg" alt="seats" className="rental-image" />
          <div className="overlay-text">RENTALS</div>
        </div> */}

        {/* Room Descriptions with Carousel */}
        <div className="room-sections">
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
                        src={`/img/${room.images[0]}`} // Display first image from array
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
                            LEARN MORE
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

        {/* Availability Calendar */}
        {/* <div className="availability-calendar">
          <div className="rental-page-title">Schedule a Tour</div>
          <div className="calendar-container">
            <InlineWidget
              url="https://calendly.com/maracodes213/15?month=2025-02  "
              styles={{ height: "500px" }}
            />
          </div>
        </div> */}

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
          <div style={{ maxWidth: "500px" }}>
            <div className="testimonial">
              <p className="testimonial-text">
                "An absolutely wonderful venue! The lighting and acoustics were
                perfect for our event."
              </p>
              <p className="testimonial-author">— Jessica R.</p>
            </div>
            <div className="testimonial">
              <p className="testimonial-text">
                "We hosted a lecture here, and everything went smoothly. The
                space has a calming energy."
              </p>
              <p className="testimonial-author">— Mark T.</p>
            </div>
            <div className="testimonial">
              <p className="testimonial-text">
                "The VIP package was worth every penny. We had a seamless
                experience with top-notch amenities."
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
