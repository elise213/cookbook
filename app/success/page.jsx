"use client";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { Context } from "../context/appContext";
import Swal from "sweetalert2";
import Link from "next/link";

export default function SuccessPage() {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const lang = store.lang;
  const isArabic = lang === "ar";
  const t = (obj) => obj?.[lang] || obj?.en || "";
  return (
    <div style={styles.container}>
      <p style={styles.text}>
        Thank you for your purchase. Your login credentials have been sent to
        your email. Your generosity will support a family from Gaza.
      </p>
      <p>
        <Link href="/recipes" style={styles.link}>
          Back to the website
        </Link>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "80px 20px",
    textAlign: "center",
    fontFamily: "Cormorant, serif",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "1.5rem",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "1rem",
  },
  link: {
    fontSize: "1.1rem",
    color: "#0070f3",
    textDecoration: "underline",
    fontWeight: "bold",
  },
};
