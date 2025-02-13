"use client";
import React from "react";
import styles from "./about.css";
import FakeNavBar from "../components/FakeNavbar";
import Footer from "../components/Footer";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="about-page">
        <FakeNavBar />

        <div className="about-content-div">
          <div className="about-quote">
            "The true Theosophist belongs to no cult or sect, yet belongs to
            each and all..."
          </div>
          <div className="about-header">
            <img src="/img/TH1.png" alt="CCEA Logo" className="about-logo" />
          </div>
          <div className="about-section">
            <div className="about-title">
              The United Lodge of Theosophists, Los Angeles
            </div>
            <div className="about-text">
              Founded in 1909, the United Lodge of Theosophists (ULT) in Los
              Angeles was established to continue the pure teachings of
              Theosophy, free from organizational politics. The Lodge follows
              the principles set forth by Helena P. Blavatsky and William Q.
              Judge, emphasizing the study and practical application of
              Theosophical philosophy. ULT remains independent, focusing solely
              on the dissemination of Theosophy without hierarchy or official
              membership structures.
            </div>
            <div className="about-text">
              From its early years, ULT in Los Angeles became a prominent center
              for Theosophical thought in the United States. Its location
              provided a meeting ground for influential thinkers, spiritual
              seekers, and authors who shaped modern esoteric thought.
              Throughout the early to mid-20th century, the Lodge attracted
              figures such as Manly P. Hall, whose lectures on esoteric
              philosophy resonated deeply with Theosophical teachings. The Lodge
              also served as a key venue for visiting Theosophists from around
              the world, fostering a rich exchange of ideas that solidified its
              role as a hub for Theosophical studies in America.
            </div>
            <div className="about-text">
              By the 1960s, the Lodge had firmly established itself as a beacon
              for serious students of Theosophy. It hosted lectures, study
              groups, and discussions that explored the teachings of Blavatsky
              and Judge in relation to contemporary spiritual movements. ULT Los
              Angeles' commitment to self-study and service helped preserve the
              original intent of Theosophy while adapting to the needs of an
              evolving audience. To this day, it continues to promote the
              principles of universal brotherhood, independent inquiry, and the
              practical application of Theosophical wisdom in daily life.
            </div>
          </div>

          <div className="about-section">
            <div className="bio-section">
              <div className="bio-name">Helena P. Blavatsky</div>
              <div className="bio-container">
                <img
                  src="/img/Blavatsky.jpg"
                  className="theo-bio-img"
                  alt="Helena P. Blavatsky"
                />
                <div className="bio-text">
                  Helena Petrovna Blavatsky (1831–1891) was a pioneering
                  Theosophist, author of
                  <i>The Secret Doctrine</i> and <i>Isis Unveiled</i>, and
                  co-founder of the Theosophical Society. She introduced the
                  world to esoteric teachings that synthesized Eastern and
                  Western thought, emphasizing the unity of all life, karma, and
                  reincarnation. Her works sought to unveil the hidden aspects
                  of spirituality and offer a cohesive framework that interwove
                  Eastern mysticism with Western esotericism.
                </div>
              </div>
              <div className="bio-text">
                Born in Russia, Blavatsky exhibited a profound interest in
                metaphysics and spiritual traditions from an early age. Her
                travels across Europe, India, and Tibet exposed her to diverse
                religious and philosophical systems, which greatly influenced
                her writings. She asserted that ancient wisdom traditions
                carried universal truths, and her goal was to revive and clarify
                these teachings for contemporary seekers. Her work often
                challenged materialist and dogmatic views, advocating for a more
                expansive understanding of human consciousness.
              </div>
            </div>
          </div>
          <div className="about-section">
            <div className="bio-section">
              <div className="bio-name">William Q. Judge</div>
              <div className="bio-container">
                <img src="/img/Judge.jpg" className="theo-bio-img" />
                <div className="bio-text">
                  William Quan Judge (1851–1896) was a central figure in the
                  early Theosophical movement, instrumental in bringing
                  Theosophy to America. A devoted student of Blavatsky, he
                  co-founded the Theosophical Society and played a crucial role
                  in expanding its reach beyond Europe and India. Judge was a
                  prolific writer and lecturer, emphasizing the accessibility of
                  Theosophy for everyday individuals, making it a practical
                  guide rather than a purely esoteric philosophy.
                </div>
              </div>
              <div className="bio-text">
                His most well-known work, The Ocean of Theosophy, provides a
                concise yet profound introduction to Theosophical teachings,
                covering topics such as karma, reincarnation, and spiritual
                evolution. Judge also contributed extensively to The Path, a
                Theosophical magazine he founded, which became a vital platform
                for spreading Theosophical ideas and engaging with seekers of
                truth.
              </div>
            </div>
          </div>
          <div className="about-section">
            <div className="about-title">Mission & Vision</div>
            <div className="about-text">
              ULT exists to encourage the study of Theosophy, support universal
              brotherhood, and promote self-realization through service to
              humanity.
            </div>
          </div>
          <div className="about-section">
            <div className="about-title">
              The Three Objects of The Theosophical Society
            </div>
            <ul className="about-list">
              <li className="about-list-item">
                To form a nucleus of the Universal Brotherhood of Humanity
                without distinction of race, creed, sex, caste or color.
              </li>
              <li className="about-list-item">
                To encourage the study of comparative religion, philosophy, and
                science.
              </li>
              <li className="about-list-item">
                To investigate the unexplained laws of nature and the powers
                latent in man.
              </li>
            </ul>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;
