"use client";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const Page = () => {
  useEffect(() => {
    const image = document.querySelector(".levitating-image");

    if (image) {
      image.addEventListener("mouseover", () => {
        image.style.opacity = "0.8";
      });
      image.addEventListener("mouseout", () => {
        image.style.opacity = "1";
      });
    }

    const numStars = 7;
    const stars = [];
    const messages = [];

    function createStar() {
      const star = document.createElement("div");
      star.classList.add("star");
      document.body.appendChild(star);

      const message = document.createElement("div");
      message.classList.add("message");
      message.textContent = "Look for the morning star";
      document.body.appendChild(message);

      star.addEventListener("mouseenter", () => {
        message.style.opacity = "1";
      });

      star.addEventListener("mouseleave", () => {
        message.style.opacity = "0";
      });

      stars.push(star);
      messages.push(message);

      moveStar(star, message);
    }

    function moveStar(star, message) {
      const maxX = window.innerWidth;
      const maxY = window.innerHeight;

      function animate() {
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        star.style.transform = `translate(${newX}px, ${newY}px)`;
        message.style.transform = `translate(${newX}px, ${newY + 20}px)`;

        setTimeout(animate, Math.random() * 4000 + 2000);
      }

      animate();
    }

    for (let i = 0; i < numStars; i++) {
      createStar();
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: "var(--color2)",
        flex: "1",
        padding: "0 0 20px 0",
      }}
    >
      <Navbar version="2" />
      <div className="image-container2">
        <img
          src="img/address.png"
          alt="Theosophy Hall Los Angeles address"
          className="back-image"
        />
        <img
          src="img/building.png"
          alt="Theosophy Hall Los Angeles"
          className="levitating-image"
        />
      </div>
    </div>
  );
};

export default Page;
