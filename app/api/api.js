import axios from "axios";

const BASE_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// GLOBAL ERROR HANDLING
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      console.warn("Unauthorized — redirect to login?");
    }
    return Promise.reject(err);
  }
);

export async function loginUser(email, password) {
  try {
    const response = await api.post("/login", { email, password });
    return { user: response.data.user };
  } catch (err) {
    return { error: err.response?.data?.message || "Login failed" };
  }
}

export async function logout() {
  // Just clears the cookie client-side
  document.cookie = "access_token=; Max-Age=0; path=/;";
}

export async function forgotPassword(email) {
  try {
    const res = await api.post("/forgot-password", { email });
    return { success: true, resetLink: res.data.reset_link };
  } catch (err) {
    return { error: err.response?.data?.error || "Failed to send reset email" };
  }
}

export async function resetPassword(token, new_password) {
  try {
    const res = await api.post("/reset-password", { token, new_password });
    return { success: true };
  } catch (err) {
    return { error: err.response?.data?.error || "Reset failed" };
  }
}

export async function checkAuth() {
  try {
    const res = await api.get("/protected");
    return { userMessage: res.data.message };
  } catch (err) {
    return { error: "Unauthorized" };
  }
}

export default api;
