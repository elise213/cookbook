"use client";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Context } from "../context/appContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context);
  const router = useRouter();

  const logoutAction = actions.logoutAndClear; // ✅ FIXED: don't invoke immediately

  useEffect(() => {
    // Clear both cookie names on load
    document.cookie = "access_token=; Max-Age=0; path=/;";
    document.cookie = "access_token_cookie=; Max-Age=0; path=/;";
    actions.logoutAndClear(); // ✅ clear frontend state too
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await actions.loginUser(email, password);
    if (result.success) {
      alert("Welcome!");
      router.push("/");
    } else {
      alert(result.error);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "3rem auto" }}>
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
        <br />

        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
        />
        <br />

        <button type="submit" style={{ marginTop: "1rem" }}>
          Login
        </button>
      </form>

      <button onClick={logoutAction} style={{ marginTop: "1rem" }}>
        Logout
      </button>
    </div>
  );
}
