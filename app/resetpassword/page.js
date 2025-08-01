import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { resetPassword } from "../utils/api";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const urlToken = router.query.token;
    if (urlToken) setToken(urlToken);
  }, [router.query]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await resetPassword(token, password);
    if (res.message) {
      alert("Password changed!");
      router.push("/login");
    } else {
      alert(res.error || "Something went wrong.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        placeholder="New password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Reset Password</button>
    </form>
  );
}
