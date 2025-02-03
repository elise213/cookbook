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
  return (
    <>
      <div className="about-page">
        <FakeNavBar />
        <div className="about-content-div">
          <div className="about-header">
            {/* <Image
              height={100}
              width={100}
              layout="responsive"
              quality={100}
              className="person-image"
              src="/img/TH1.png"
              alt=""
              style={{ border: "none", marginTop: "10px", marginRight: "10px" }}
            ></Image> */}
            <p className="person-bio">
              Established in 1927, the Theosophy Hall stands as a hub for
              artistic, spiritual, social, and intellectual gatherings:
              theatrical performance and rehearsal, study groups, dance, music,
              readings, film screenings, and enriching events we haven't yet
              imagined.
            </p>
          </div>
          <div
            style={{
              marginTop: "30px",
            }}
          >
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
        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;
