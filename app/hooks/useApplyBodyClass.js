import { useContext, useEffect } from "react";
import { Context } from "../context/appContext";

export const useApplyBodyClass = () => {
  const { store } = useContext(Context);

  useEffect(() => {
    const body = document.body;
    const className = "no-scroll";
    const homeBody = document.querySelector(".home-body");

    // Apply to body
    if (store.isNavOpen || store.showContactModal) {
      body.classList.add(className);
    } else {
      body.classList.remove(className);
    }

    // Apply to .home-body
    if (homeBody) {
      if (store.isNavOpen || store.showContactModal) {
        homeBody.classList.add(className);
      } else {
        homeBody.classList.remove(className);
      }
    }
  }, [store.isNavOpen, store.showContactModal]);
};
