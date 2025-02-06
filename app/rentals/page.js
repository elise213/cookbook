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

const Rentals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const { store } = useContext(Context);

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
        <div className="rental-packages">
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
        </div>

        {/* Availability Calendar */}
        {/* <div className="availability-calendar"> */}
        {/* <div className="rental-page-title">Availability Calendar</div>
          <div className="calendar-container"> */}
        <div className="availability-calendar">
          <div className="rental-page-title">Book an Appointment</div>
          <div className="calendar-container">
            <InlineWidget
              url="https://calendly.com/maracodes213/15?month=2025-02  "
              styles={{ width: "100%", height: "700px" }}
            />
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>

        {/* Room Descriptions with Carousel */}
        <div className="room-sections">
          <div
            className="rental-page-title"
            style={{ alignSelf: "flex-start" }}
          >
            Explore The Property
          </div>

          {store.rooms.map((room, index) => (
            <div className="about-person" key={index}>
              {/* Room Image Carousel */}
              <div className="room-carousel">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  loop={true} // Enables infinite looping
                >
                  {room.images.map((img, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <Image
                        height={400}
                        width={600}
                        // layout="responsive"
                        quality={100}
                        className="person-image"
                        src={`/img/${img}`}
                        alt={room.name}
                        onClick={() => handleImageClick(room.images)}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <p className="room-title">{room.name}</p>
              <span className="person-bio">{room.text}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="testimonials-section">
          <div className="rental-page-title">What People Are Saying</div>
          <div style={{ maxWidth: "500px", marginTop: "30px" }}>
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
