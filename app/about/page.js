"use client";
import React, { useContext } from "react";
import { Context } from "../context/appContext";
import styles from "./about2.css";
import NavBar from "../components/Navbar";

const About = () => {
  const { store } = useContext(Context);
  const lang = store.lang;
  const isArabic = lang === "ar";

  return (
    <>
      <NavBar />
      <div className="about-page">
        <div className="scroll">
          <div className="about-content-div">
            <div className="bio-text" dir={isArabic ? "rtl" : "ltr"}>
              {isArabic ? (
                <>
                  <p>
                    نشأت فاطمة في غزة، في مجتمع مليء بالتقاليد العريقة والطعام
                    الشهي. تعلّمت من والدتها وجدتها وصفات لم تُكتب بقلم شخص
                    واحد، بل وُلدت من أرض فلسطين.
                  </p>
                  <p>
                    بعد أن قُصف منزلها، فرت فاطمة من غزة مع أطفالها وزوجها.
                    والداها وعائلة أخيها ما زالوا هناك. هذا الكتاب هو احتفاء
                    بالتراث الفلسطيني، وتحية لكل من حافظ عليه رغم كل الصعاب.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Fatima grew up in Gaza, in a community full of rich
                    traditions and delicious food. Fatima learned from her
                    mother and grandmother — recipes not written by any one
                    person, but born of the land of Palestine.
                  </p>
                  <p>
                    After her home was bombed, Fatima fled Gaza with her
                    children and her husband. Her parents, and and her brother's
                    family are still there. This cookbook is a celebration of
                    Palestinian heritage, and a tribute to all of those who have
                    preserved it against all odds.
                  </p>
                </>
              )}
            </div>

            <div
              className="about-section-special"
              style={{ marginBottom: "30px" }}
            >
              <div className="about-text" dir={isArabic ? "rtl" : "ltr"}>
                {isArabic ? (
                  <>
                    <p>
                      عند شرائك هذا الكتاب، فإنك تدعم عائلة فاطمة التي ما زالت
                      في غزة، وتُسهم في مساعدة أطفالها على الالتحاق بالمدرسة في
                      مصر.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      When you purchase the cookbook, you are supporting
                      Fatima's parents in Gaza, and helping her children to
                      attend school in Egypt.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
