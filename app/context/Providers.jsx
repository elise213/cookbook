// app/context/Providers.jsx
"use client";
import injectContext from "./appContext";

function Providers({ children }) {
  return children;
}

export default injectContext(Providers); // ✅ inject global store here
