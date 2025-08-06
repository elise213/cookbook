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
                    نشأت فاطمة في مجتمع غني بالتقاليد العريقة والطعام الشهي في
                    غزة. في مدينة رفح، كانت تطهو مع أطفالها الوصفات التي تعلمتها
                    من والدتها وجدتها — حيث يحمل كل طبق إرثاً عميقاً، لم يكتبه
                    شخص واحد، بل وُلد من أرض فلسطين.
                  </p>
                  <p>
                    بعد أن قُصف منزلها، اضطرت فاطمة للفرار من غزة مع أطفالها
                    وزوجها. هذا الكتاب هو احتفاء بالتراث الفلسطيني، وتحية لكل من
                    حافظ عليه رغم كل الصعاب.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Fatima grew up in a community full of rich traditions and
                    delicious food in Gaza. In Rafah, she would cook with her
                    children the recipes she learned from her mother and
                    grandmother — each dish carrying a legacy. The recipes
                    weren’t written by any one person, but were born of the land
                    of Palestine.
                  </p>
                  <p>
                    After her home was bombed, Fatima fled Gaza with her
                    children and her husband. This cookbook is a celebration of
                    Palestinian heritage and a tribute to all of those who have
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
