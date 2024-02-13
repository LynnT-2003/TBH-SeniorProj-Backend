"use client";
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const setAuthData = (name, email) => {
    setUserData({
      name,
      email,
    });
  };

  return (
    <AuthContext.Provider value={{ userData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
