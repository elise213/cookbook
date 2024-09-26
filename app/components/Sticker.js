import React from "react";
import Image from "next/image";
// import styles from "../styles/sticker.css";

const Sticker = (props) => {
  let option = null;
  let new1 = "/img/New.png";
  let new2 = "/img/newrsticker.png";
  let staff = "/img/staff2.png";
  let horror = "/img/horror.png";

  if (props.sticker && props.sticker.category) {
    if (props.sticker.category === "new") {
      option = new1;
    } else if (props.sticker.category === "staff") {
      option = staff;
    } else if (props.sticker.category === "newtofree") {
      option = new2;
    } else if (props.sticker.category === "horror") {
      option = horror;
    }
  }

  return (
    <>
      {option && (
        <Image className="sticker" src={option} height={80} width={80} alt="" />
      )}
    </>
  );
};

export default Sticker;
