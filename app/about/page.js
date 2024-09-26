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
        <div className="about-div">
          <Image
            height={100}
            width={100}
            layout="responsive"
            quality={100}
            className="ccea-full-image"
            src="/img/CCEAFULL.png"
            alt=""
          ></Image>
          <p className="ccea-bio">
            CCEA’s mission is to empower independent filmmakers to create
            impactful art through workshops, events, and fiscal sponsorships.
            Our goal is to inspire deeper empathy and understanding across
            communities while dismantling the barriers that have historically
            limited access to filmmaking. We prioritize and uplift voices
            marginalized by the mainstream film industry, striving to build a
            more diverse and dynamic film landscape.
          </p>
          <p className="ccea-bio">
            We offer networking events, screenings, and workshops where industry
            professionals share their expertise in cinematography,
            screenwriting, editing, legal affairs, and more. Our fiscal
            sponsorship program supports filmmakers in securing funding for
            their projects, helping them bring their creative visions to life.
          </p>
          <p className="ccea-bio">
            At CCEA, we reject pressure to conform to established norms. We are
            committed to fostering genuine diversity—not only in the creation of
            high-quality art but also in broadening access to experience it.
          </p>
          <p className="ccea-bio">
            Founded on the belief that people from all socioeconomic backgrounds
            deserve the opportunity to create, CCEA has grown from humble
            beginnings into a sustainable, community-driven nonprofit. Our
            programs continue to attract creatives passionate about challenging
            and reshaping the narrative of the film industry.
          </p>
          <p className="ccea-bio">
            We believe artists thrive with community support and the freedom to
            experiment. We invite anyone with a love for film or experimental
            art to join us as a volunteer, participant, or supporter. Together,
            we can cultivate a more vibrant and inclusive industry.
          </p>
        </div>
        <div className="about-person">
          <Image
            height={100}
            width={100}
            layout="responsive"
            quality={100}
            className="person-image"
            src="/img/Mara3.jpg"
            alt=""
          ></Image>
          <p className="person-bio">
            Mara LaFontaine is a filmmaker and the founder and executive
            director of CCEA, where she strives to provide underprivileged
            filmmakers, and artistic community leaders, access to the resources
            and platforms they need to bring their vision to life. A graduate of
            UCLA, Mara is currently directing a feature documentary, writing a
            scripted feature, and producing a medical science documentary. She
            has created original trailers for art house cinemas, developed a
            deep love for 16mm experimental filmmaking, created live visuals for
            bands, live-edited award shows, and appeared in major films as an
            actor. Raised in Moab, Utah, Mara has served as a programmer for the
            <em> Salt Lake City Film Festival</em>, where her commitment to
            nurturing underrepresented voices began and continues to drive her
            work today.
          </p>
        </div>
        <div className="about-person">
          <Image
            height={100}
            width={100}
            layout="responsive"
            quality={100}
            className="person-image"
            src="/img/Ricky.jpg"
            alt=""
          ></Image>
          <p className="person-bio">
            Ricky Berrin is a Los Angeles-based lawyer, producer, and business
            affairs executive with a distinguished career in the entertainment
            industry. He has served as production counsel and executive on
            notable films, including <em>How I Faked My Life with AI </em>{" "}
            (Tribeca 2024), <em>Defiant </em>(Toronto International Film
            Festival 2023), and the Emmy-nominated film <em>Flight Risk</em>{" "}
            (Amazon 2022). His work also extends to television, where he served
            as production counsel for the critically acclaimed HBO series{" "}
            <em>The Vow</em>. In addition, Ricky produced the innovative
            mixed-reality project <em>Persuasion Machines</em>, which premiered
            at Sundance in 2020. Ricky received his MBA from NYU Stern School of
            Business, his JD from Duke University Law School, and his BA from
            the University of Pennsylvania.
          </p>
        </div>
        <div className="about-person">
          <Image
            height={100}
            width={100}
            layout="responsive"
            quality={100}
            className="person-image"
            src="/img/Justin.png"
            alt=""
          ></Image>
          <p className="person-bio">
            Justin Streichman is a queer filmmaker and editor based in Los
            Angeles, CA. His work has screened at the Hammer Museum, Manetti
            Shrem Museum of Art, Ars Electronica, and dance film festivals. His
            short documentary <em>DALE</em>, featuring the recently retired
            principal violist of the LA Philharmonic, is beginning its run on
            the festival circuit in the fall of 2024. He recently edited an
            evening length opera film, <em>Star Choir</em>, scheduled to screen
            at the Museum of Modern Art, New York in late 2024. And he’s
            finishing post production on a psychological horror film to be
            released in 2025. Streichman received an MFA from UC Davis, and his
            BA from UCLA.
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;
