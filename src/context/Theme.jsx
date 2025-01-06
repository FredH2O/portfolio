import React, { createContext, useState } from "react";

export const Theme = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleThemeMode = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <Theme.Provider value={{ theme, toggleThemeMode }}>
      {children}
    </Theme.Provider>
  );
};
