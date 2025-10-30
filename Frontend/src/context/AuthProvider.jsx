// src/context/AuthProvider.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = typeof window !== "undefined" ? localStorage.getItem("user") : null;
  const [authUser, setAuthUser] = useState(initialAuthUser ? JSON.parse(initialAuthUser) : null);

  // Keep localStorage in sync
  useEffect(() => {
    if (authUser) localStorage.setItem("user", JSON.stringify(authUser));
    else localStorage.removeItem("user");
  }, [authUser]);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
