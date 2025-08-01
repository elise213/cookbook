// app/components/LayoutWrapper.jsx
"use client";
import { useEffect, useContext } from "react";
import { Context } from "../context/appContext";
import PasswordGate from "./PasswordGate";

export default function LayoutWrapper({ children }) {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.checkAuth();
  }, []);

  if (!store.authChecked) return null;

  return <PasswordGate>{children}</PasswordGate>;
}
