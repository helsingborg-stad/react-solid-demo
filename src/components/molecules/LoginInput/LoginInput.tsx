"use client";

import { useContext, useState } from "react";
import AuthServiceContext from "../../../contexts/AuthServiceContext";

export default function LoginInput(): JSX.Element {
  const authService = useContext(AuthServiceContext);
  const [error, setError] = useState<string | null>(null);

  const token = authService?.getToken();

  const handleLogin = () => {
    setError(null);
    authService
      ?.login()
      .then(() => {
        setError(null);
      })
      .catch((loginError) => {
        setError(loginError?.message);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
      }}
    >
      <button onClick={handleLogin}>Login</button>
      <button onClick={() => authService?.logout()}>Logout</button>
      {token ? (
        <span style={{ color: "#a3be8c" }}>token: {token}</span>
      ) : (
        <span style={{ color: "#4c566a" }}>(not logged in)</span>
      )}
      <span style={{ color: "#bf616a" }}>{error}</span>
    </div>
  );
}
