"use client";
import React from "react";
import styles from "./about2.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <NavBar />
      <div className="about-page">
        <div className="title-div">
          <span className="about-heading">About</span>
        </div>
        <div className="about-content-div">
          <div className="bio-container-first">
            <img
              src="/img/entrance.png"
              className="theo-bio-img"
              alt="wall"
              style={{ marginTop: "20px", height: "400px" }}
            />

            <span className="about-title">Theosophy Hall, Los Angeles</span>
            <p className="about-text" style={{ marginTop: "20px" }}>
              Founded in 1909, the United Lodge of Theosophists (ULT) in Los
              Angeles was established to continue the pure teachings of
              Theosophy, free from organizational politics. The Lodge follows
              the principles set forth by Helena P. Blavatsky and William Q.
              Judge, emphasizing the study and practical application of
              Theosophical philosophy.
              <br />
              <br />
              Founded in 1909, the United Lodge of Theosophists (ULT) in Los
              Angeles was established to continue the pure teachings of
              Theosophy, free from organizational politics. The Lodge follows
              the principles set forth by Helena P. Blavatsky and William Q.
              Judge, emphasizing the study and practical application of
              Theosophical philosophy.
            </p>
          </div>

          <div className="bio-container">
            <img
              src="/img/Helena.png"
              className="theo-bio-img"
              alt="Helena P. Blavatsky"
              style={{ marginBottom: "-25px", marginLeft: "20px" }}
            />
            {/* <div className="column"> */}
            <div className="about-title">Helena P. Blavatsky</div>
            <div className="bio-text">
              Helena Petrovna Blavatsky (1831*1891) was a pioneering
              Theosophist, author ofThe Secret Doctrine and Isis Unveiled, and
              co-founder of the Theosophical Society. She introduced the world
              to esoteric teachings that synthesized Eastern and Western
              thought, emphasizing the unity of all life, karma, and
              reincarnation. Her works sought to unveil the hidden aspects of
              spirituality and offer a cohesive framework that interwove Eastern
              mysticism with Western esotericism. Born in Russia, Blavatsky
              exhibited a profound interest in metaphysics and spiritual
              traditions from an early age. Her travels across Europe, India,
              and Tibet exposed her to diverse religious and philosophical
              systems, which greatly influenced her writings. She asserted that
              ancient wisdom traditions carried universal truths, and her goal
              was to revive and clarify these teachings for contemporary
              seekers. Her work often challenged materialist and dogmatic views,
              advocating for a more expansive understanding of human
              consciousness.
            </div>
            {/* </div> */}
          </div>

          <div className="bio-container">
            <img
              src="/img/QJudge.png"
              className="theo-bio-img"
              alt="William Q. Judge"
              style={{ marginBottom: "-15px" }}
            />
            {/* <div className="column"> */}
            <div className="about-title">William Q. Judge</div>
            <div className="bio-text">
              William Quan Judge (1851*1896) was a central figure in the early
              Theosophical movement, instrumental in bringing Theosophy to
              America. A devoted student of Blavatsky, he co-founded the
              Theosophical Society and played a crucial role in expanding its
              reach beyond Europe and India. Judge was a prolific writer and
              lecturer, emphasizing the accessibility of Theosophy for everyday
              individuals, making it a practical guide rather than a purely
              esoteric philosophy. His most well-known work, The Ocean of
              Theosophy, provides a concise yet profound introduction to
              Theosophical teachings, covering topics such as karma,
              reincarnation, and spiritual evolution. Judge also contributed
              extensively to The Path, a Theosophical magazine he founded, which
              became a vital platform for spreading Theosophical ideas and
              engaging with seekers of truth.
            </div>
            {/* </div> */}
          </div>

          <div
            className="about-section-special"
            style={{ marginBottom: "30px" }}
          >
            <div className="about-text">
              ULT exists to encourage the study of Theosophy, support universal
              brotherhood, and promote self-realization through service to
              humanity.
            </div>
            <img
              src="/img/lucifer.svg"
              className="lucifer"
              alt="William Q. Judge"
            />
            <div className="about-text">
              Compassion is no attribute. It is the LAW of laws—eternal harmony,
              Alaya’s self; a shoreless universal essence, the light of
              everlasting right, and fitness of all things, the law of love
              eternal.
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
