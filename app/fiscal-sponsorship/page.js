"use client";
import React from "react";
import styles from "../fiscal-sponsorship/fiscalFAQ.css";
import Footer from "../components/Footer";
import FakeNavbar from "../components/FakeNavbar";
import Image from "next/image";

// import Link from "next/link";
const page = () => {
  return (
    <>
      <div className="qaa">
        <div className="qaa-2">
          <a
            href="https://form.jotform.com/242646185686166"
            target="_blank"
            rel="noopener noreferrer"
            className="apply"
          >
            <Image
              height={600}
              width={600}
              className="fiscal-logo"
              src={"/img/CCEA-F.png"}
              alt=""
            ></Image>
          </a>
          <a
            href="https://form.jotform.com/242646185686166"
            target="_blank"
            rel="noopener noreferrer"
            className="apply"
          >
            Click Here to Apply!
          </a>

          <p>
            By securing fiscal sponsorship from the Center for Cinematic and
            Experimental Arts (CCEA), your project can become eligible for
            tax-deductible donations from individuals and institutions that
            support recognized 501(c)(3) tax-exempt nonprofits.
          </p>
          <p>
            CCEA only charges a 4% administrative fee on contributions made to
            projects accepted into the fiscal sponsorship program. Projects can
            still receive funding from investors, but only donor funds are
            eligible for tax deductions. Donors are not entitled to any project
            profits, whereas investors expect a financial return on their
            investment but cannot receive tax benefits.
          </p>
          <p>
            Donors may find supporting your film more appealing than traditional
            film investment, as their contributions would be tax-deductible.
            Even though CCEA provides fiscal sponsorship, your project remains
            an independent legal entity, with full creative control and
            ownership, and you are responsible for your own tax reporting and
            liabilities. CCEA does not claim any rights over the project.
          </p>
          <p>
            ​​CCEA embraces independent projects encompassing narrative and
            documentary styles of any duration and genre. Furthermore, CCEA
            supports various other projects and entities aligned with its
            mission, and/or in the pursuit of attaining their 501(c)(3) status,
            including interactive media, podcasts, exhibitions, art festivals,
            and more.
          </p>

          <p>
            If you have multiple projects, please apply for each one separately.
            Applications are accepted year-round and can be submitted at any
            stage of the project’s life cycle, including development,
            production, or post-production. Non-U.S. citizens are also welcome
            to apply, though certain tax limitations may apply depending on
            location.
          </p>
          <p>
            CCEA reviews applications throughout the year, and applicants will
            receive a response within 2 weeks. Please email info@ccearts.org
            with any questions.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default page;
