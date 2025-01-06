import React, { createContext, useEffect, useState } from "react";

export const Theme = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    theme === "dark"
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [theme]);

  const toggleThemeMode = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <Theme.Provider value={{ theme, toggleThemeMode }}>
      {children}
    </Theme.Provider>
  );
};
