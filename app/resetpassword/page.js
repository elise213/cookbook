"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import styles from "./reset.css";

const ResetPassword = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Missing Token",
        text: "The reset link is invalid or expired.",
      });
    }
  }, [token]);

  const handleResetPassword = async () => {
    if (!newPassword || !confirmPassword) {
      return Swal.fire({
        icon: "warning",
        title: "Incomplete Fields",
        text: "Please fill out both fields.",
      });
    }

    if (newPassword !== confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "Passwords do not match.",
      });
    }

    if (!token) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Link",
        text: "Reset token is missing or expired.",
      });
    }

    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/reset-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token, new_password: newPassword }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Password Reset",
          text: "Your password was reset successfully!",
        });
        setTimeout(() => router.push("/"), 2000);
      } else {
        throw new Error(data.error || "Failed to reset password.");
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Your Password</h2>
      <input
        type="password"
        placeholder="New password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="form-input"
      />
      <input
        type="password"
        placeholder="Confirm new password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="form-input"
      />
      <button
        onClick={handleResetPassword}
        disabled={loading}
        className="submit-btn"
      >
        {loading ? "Resetting..." : "Reset Password"}
      </button>
    </div>
  );
};

export default ResetPassword;
