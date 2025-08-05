"use client";
import { useEffect, useState } from "react";
import injectContext from "../context/appContext";

const PasswordGate = ({ children }) => {
  const [input, setInput] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  // Check if user is already authenticated from a past session
  useEffect(() => {
    const stored = sessionStorage.getItem("authenticated");
    if (stored === "true") {
      setAuthenticated(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/check-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: input }),
      });

      const data = await res.json();

      if (data.success) {
        sessionStorage.setItem("authenticated", "true"); // ✅ Store session
        setAuthenticated(true);
      } else {
        alert("Incorrect password");
      }
    } catch (err) {
      console.error("Password check failed:", err);
      alert("Error connecting to server.");
    } finally {
      setLoading(false);
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
        <button type="submit" disabled={loading}>
          {loading ? "Checking..." : "Enter"}
        </button>
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

export default injectContext(PasswordGate);
