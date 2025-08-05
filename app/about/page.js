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
                    وُلِدت فاطمة في مدينة رفح جنوب قطاع غزة. نشأت في مجتمع غني
                    بالتقاليد والطعام اللذيذ. في قلب منزلها في رفح، كانت تتعلم
                    وصفات الطبخ من والدتها وجدتها — حيث تحمل كل وصفة إرثًا
                    فلسطينيًا عريقًا.
                  </p>
                  <p>
                    بعد أن تم قصف منزلها، اضطرت فاطمة للفرار إلى مصر مع أطفالها
                    وزوجها. هذا الكتاب هو احتفال بتراث فاطمة الفلسطيني، وتحية
                    لأولئك الذين حافظوا عليه رغم كل المصاعب.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Fatima was born in Rafah, Gaza. She grew up in a community
                    full of rich traditions and delicious food. In the heart of
                    her home in Rafah, she learned recipes from her mother and
                    grandmother — each dish carrying a legacy.
                  </p>
                  <p>
                    After her home was bombed, Fatima fled to Egypt with her
                    children and her husband. This cookbook is a celebration of
                    Fatima's Palestinian heritage and a tribute to all of those
                    who have preserved it against all odds.
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
                      عند شرائك هذا الكتاب، فإنك تدعم والدي فاطمة وأخوها الذين
                      ما زالوا في غزة، وتُسهم في مساعدة أطفالها على الالتحاق
                      بالمدرسة في القاهرة.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      When you purchase the cookbook, you are supporting
                      Fatima's parents and brother who are still in Gaza, and
                      helping her children to attend school in Cairo.
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
