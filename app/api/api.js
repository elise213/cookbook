const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function apiFetch(endpoint, options = {}) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.error || "API error");
  }

  return res.json();
}
