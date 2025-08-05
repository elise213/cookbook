"use client";
import { useEffect, useContext } from "react";
import { Context } from "../context/appContext";
import PasswordGate from "./PasswordGate";

export default function LayoutWrapper({ children }) {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (actions?.checkAuth) {
      console.log("🔍 Running checkAuth from LayoutWrapper");
      actions.checkAuth().then((res) => {
        console.log("✅ checkAuth result:", res);
      });
    }
  }, [actions]);

  // Optionally wait for authChecked here too
  if (!store?.authChecked) return <p>Loading...</p>;

  return <PasswordGate>{children}</PasswordGate>;
}
