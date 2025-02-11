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
      question:
        "What is the history of Theosophy Hall in downtown Los Angeles?",
      answer:
        "Theosophy Hall, located in downtown Los Angeles, has been a center for Theosophical study and practice since the early 20th century. Established by the United Lodge of Theosophists (ULT), it serves as a gathering place for those interested in the teachings of Theosophy, emphasizing self-study, self-improvement, and service to humanity. The building has hosted lectures, discussions, and study groups focused on the works of H.P. Blavatsky and William Q. Judge.",
    },
    {
      question:
        "What is the mission and vision of the United Lodge of Theosophists (ULT)?",
      answer:
        "The United Lodge of Theosophists (ULT) is dedicated to preserving and disseminating the original teachings of Theosophy, as presented by H.P. Blavatsky and William Q. Judge. It operates under the principle of unity, without formal membership, and encourages self-study and cooperative work to promote spiritual knowledge and understanding. The ULT seeks to inspire a deeper comprehension of universal truths and foster brotherhood among all people.",
    },
    {
      question:
        "Who was Pierre, and what was his role in the United Lodge of Theosophists?",
      answer:
        "Pierre was a devoted student of Theosophy and an influential figure in the United Lodge of Theosophists. He contributed to the study and dissemination of Theosophical teachings, emphasizing the importance of independent study and the application of Theosophical principles in daily life. His dedication to the ULT’s mission helped strengthen the organization's presence in Los Angeles and beyond.",
    },
    {
      question: "Who was Wes, and what impact did he have on the ULT?",
      answer:
        "Wes was a key figure in the United Lodge of Theosophists, known for his deep understanding of Theosophical philosophy and his ability to communicate its principles effectively. He played a significant role in organizing and leading discussions at Theosophy Hall, inspiring many to engage in Theosophical studies and apply its teachings to their lives.",
    },
    {
      question:
        "What kind of events are held at Theosophy Hall in Los Angeles?",
      answer:
        "Theosophy Hall hosts a variety of events, including public lectures, study groups, discussion meetings, and special programs on Theosophical philosophy. Topics often focus on the writings of H.P. Blavatsky, William Q. Judge, and other Theosophical thinkers. These events are open to all and encourage free inquiry into spiritual and philosophical questions.",
    },
    {
      question: "Does the United Lodge of Theosophists charge membership fees?",
      answer:
        "No. The United Lodge of Theosophists does not have formal membership or charge fees for participation. It operates on voluntary contributions and is open to anyone interested in studying and applying Theosophical teachings.",
    },
    {
      question: "Is Theosophy Hall in Los Angeles open to the public?",
      answer:
        "Yes. Theosophy Hall is open to anyone interested in learning about Theosophy. Visitors can attend public lectures, join study groups, and access Theosophical literature in the building’s library.",
    },
    {
      question:
        "What are some core teachings of Theosophy as presented at Theosophy Hall?",
      answer:
        "Theosophy emphasizes universal brotherhood, the study of ancient wisdom traditions, karma, reincarnation, and self-development. The teachings encourage seekers to explore truth independently and apply spiritual principles to everyday life. Theosophy Hall provides resources for those interested in deepening their understanding of these concepts.",
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

        {/* Room Descriptions with Carousel */}
        <div className="room-sections">
          {/* <div
            className="rental-page-title"
            style={{ alignSelf: "flex-start" }}
          >
            Explore The Property
          </div> */}

          {store.rooms.map((room, index) => (
            <div className="about-person" key={index}>
              <div className="room-carousel">
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  loop={true}
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
