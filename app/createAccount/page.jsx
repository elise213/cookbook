"use client";
import React, { useState, useRef, useContext } from "react";
import { useRouter } from "next/navigation";
import { Context } from "../context/appContext";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import styles from "./create.css";
import Link from "next/link";

const SERVICE_ID = "service_5v912b5";
const TEMPLATE_ID = "template_11p5p5t";
const PUBLIC_KEY = "frmUHhhWUG9vtMRit";

const CreateAccount = ({ setLog, log }) => {
  const router = useRouter();
  const { actions } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [is_org, setIs_org] = useState("");
  const [resourceName, setResourceName] = useState("");
  const [resourceCity, setResourceCity] = useState("");
  const formRef = useRef(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await actions.createUser(is_org, name, email, password);

      Swal.fire({
        icon: "success",
        title: "Account Created",
        text:
          is_org === "1"
            ? "You now have an account. Organization verification is pending."
            : "You now have an account. Please log in.",
      });

      if (is_org === "1" && resourceName && resourceCity) {
        sendOrgVerificationEmail();
      }

      router.push("/login");
    } catch (error) {
      let message = "An error occurred while creating your account.";

      if (error.message === "Email already exists") {
        message =
          "That email is already registered. Please log in or use a different email.";
      }

      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: message,
      });
    }
  };

  const sendOrgVerificationEmail = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("resourceName", resourceName);
    formData.append("resourceCity", resourceCity);

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );
      Swal.fire({
        icon: "success",
        title: "Verification Email Sent",
        text: "Your information has been sent for verification.",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to send verification email.",
      });
    }
  };

  return (
    <div className="login-modal-content">
      <div className="login-modal-body">
        <form ref={formRef} onSubmit={handleRegister}>
          <div className="form-section">
            <label htmlFor="name" className="form-label less-margin">
              Name
            </label>
            <input
              type="text"
              className="form-input"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-section">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-input"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-section">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-input"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button
            className="home-nav-item"
            variant="contained"
            color="primary"
            type="submit"
          >
            Register
          </Button>
        </form>
        <Link href="/login">
          <span className="forgot-password">Return to Login</span>
        </Link>
      </div>
    </div>
  );
};

export default CreateAccount;
