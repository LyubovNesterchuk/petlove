export const logoutUser = async () => {
  const res = await fetch("/auth/logout", {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);
    throw new Error(data?.message || "Logout failed");
  }

  return res;
};