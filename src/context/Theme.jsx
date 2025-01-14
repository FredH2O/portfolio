import React, { createContext, useContext, useEffect, useState } from "react";

const Theme = createContext();

export const useTheme = () => {
  return useContext(Theme);
};

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
