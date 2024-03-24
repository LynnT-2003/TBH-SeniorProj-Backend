// LayoutContext.js
"use client";
import React, { createContext, useState } from "react";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <LayoutContext.Provider value={{ showNavbar, setShowNavbar }}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext;
