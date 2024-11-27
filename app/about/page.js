"use client";
import React, { useState } from "react";
import styles from "./about.css";
import FakeNavBar from "../components/FakeNavbar";
import Footer from "../components/Footer";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqData = [
    {
      question:
        "If I am part of the fiscal sponsorship program, can my project still receive funding from investors?",
      answer:
        "Yes, Projects can still receive funding from investors, but only donor funds are eligible for tax deductions. Donors are not entitled to any project profits, whereas investors expect a financial return on their investment but cannot receive tax benefits.",
    },
    {
      question:
        "Can I apply for funding if my project is not yet fully developed?",
      answer:
        "Yes, even if your project is in its early stages, you can still apply for funding. Many sponsors are open to helping early-stage projects develop.",
    },
    {
      question:
        "What are the fees for participation in CCEA's fiscal sponsorship program?",
      answer:
        "CCEA charges a 4% administrative fee on    contributions made to projects made through our fiscal sponsorship program.",
    },
    {
      question:
        "Does fiscal sponsorship transfer any ownership of my project to CCEA?",
      answer:
        "No. Your project remains an independent legal entity, with full creative control and ownership, and you are responsible for your own tax reporting and liabilities. CCEA does not claim any rights over the project.",
    },
    {
      question:
        "If I am not a citizen of the USA, may I still participate in the fiscal sponsorship program?",
      answer:
        "Yes.  Non-U.S. citizens are welcome, though certain tax limitations may apply depending on location.",
    },
    {
      question: "May I apply for fiscal sponsorhip for multiple projects?",
      answer:
        "Yes. However, if you have multiple projects, you must apply for each one separately.",
    },
  ];
  return (
    <>
      <div className="about-page">
        <FakeNavBar />
        <div className="about-content-div">
          <Image
            height={100}
            width={100}
            layout="responsive"
            quality={100}
            className="person-image"
            src="/img/TH1.png"
            alt=""
            style={{ border: "none", marginTop: "10px", marginRight: "10px" }}
          ></Image>
          <p className="person-bio">
            Established in 1927, the Theosophy Hall stands as a hub for
            artistic, spiritual, social, and intellectual gatherings: theatrical
            performance and rehearsal, study groups, dance, music, readings,
            film screenings, and enriching events we haven't yet imagined.
          </p>
          <div
            style={{
              marginTop: "80px",
            }}
          >
            <p className="event-heading">Frequently Asked Questions</p>
            {faqData.map((item, index) => (
              <div className="about-div-2" key={index}>
                <div
                  onClick={() => toggleFAQ(index)}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "5px",
                    border: "1px solid black",
                    borderRadius: "5px",
                    // borderColor: openIndex === index ? "lightGreen" : "maroon",
                  }}
                >
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
        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;
