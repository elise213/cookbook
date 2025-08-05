// components/PasswordGate.jsx
"use client";
import { useEffect, useState } from "react";
import injectContext from "../context/appContext";

const PasswordGate = ({ children }) => {
  const [input, setInput] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  // const correctPassword = process.env.NEXT_PUBLIC_SITE_PASSWORD;

  const correctPassword =
    typeof window !== "undefined"
      ? process.env.NEXT_PUBLIC_SITE_PASSWORD
      : null;

  console.log(
    "NEXT_PUBLIC_SITE_PASSWORD:",
    process.env.NEXT_PUBLIC_SITE_PASSWORD
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("authenticated");
      if (stored === "true") setAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === correctPassword) {
      sessionStorage.setItem("authenticated", "true");
      setAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (authenticated) return children;

  return (
    <div className="password-gate">
      <form onSubmit={handleSubmit}>
        <label>Enter Password:</label>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Enter</button>
      </form>
      <style jsx>{`
        .password-gate {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #e7dfd8;
          flex-direction: column;
        }

        input {
          margin-top: 10px;
          padding: 5px;
          font-size: 16px;
        }

        button {
          margin-top: 10px;
          padding: 5px 15px;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

// ✅ Wrap and export with context
export default injectContext(PasswordGate);
