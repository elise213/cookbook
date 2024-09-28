"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./rentals.css";
import FakeNavBar from "../components/FakeNavbar";
import Footer from "../components/Footer";
import Image from "next/image";

const Rentals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  // Function to open modal with the clicked image
  const handleImageClick = (src) => {
    setModalImageSrc(src);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImageSrc("");
  };
  return (
    <>
      <div className="about-page">
        <FakeNavBar />
        <div className="about-person">
          <Image
            height={100}
            width={100}
            layout="responsive"
            quality={100}
            className="person-image"
            onClick={() => handleImageClick("/img/2.jpg")}
            src="/img/2.jpg"
            alt=""
          ></Image>
          <p className="person-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className="about-person">
          <Image
            height={100}
            width={100}
            layout="responsive"
            quality={100}
            className="person-image"
            onClick={() => handleImageClick("/img/1.jpg")}
            src="/img/1.jpg"
            alt=""
          ></Image>
          <p className="person-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className="about-person">
          <Image
            height={100}
            width={100}
            layout="responsive"
            quality={100}
            className="person-image"
            onClick={() => handleImageClick("/img/8.jpg")}
            src="/img/8.jpg"
            alt=""
          ></Image>
          <p className="person-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className="about-person">
          <Image
            height={100}
            width={100}
            layout="responsive"
            quality={100}
            className="person-image"
            onClick={() => handleImageClick("/img/3.jpg")}
            src="/img/3.jpg"
            alt=""
          ></Image>
          <p className="person-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>

        <div className="about-person">
          <Image
            height={100}
            width={100}
            layout="responsive"
            quality={100}
            className="person-image"
            onClick={() => handleImageClick("/img/4.jpg")}
            src="/img/4.jpg"
            alt=""
          ></Image>
          <p className="person-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className="about-person">
          <Image
            height={100}
            width={100}
            layout="responsive"
            quality={100}
            className="person-image"
            onClick={() => handleImageClick("/img/5.jpg")}
            src="/img/5.jpg"
            alt=""
          ></Image>
          <p className="person-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className="about-person">
          <Image
            height={100}
            width={100}
            layout="responsive"
            quality={100}
            className="person-image"
            onClick={() => handleImageClick("/img/6.jpg")}
            src="/img/6.jpg"
            alt=""
          ></Image>
          <p className="person-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className="about-person">
          <Image
            height={100}
            width={100}
            layout="responsive"
            quality={100}
            className="person-image"
            onClick={() => handleImageClick("/img/7.jpg")}
            src="/img/7.jpg"
            alt=""
          ></Image>
          <p className="person-bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>

        <Footer />
      </div>

      {/* Modal for the larger image */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <Image
              height={1200}
              width={900}
              layout="responsive"
              quality={100}
              className="modal-image"
              src={modalImageSrc}
              alt="Larger view"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Rentals;
