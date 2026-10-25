"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Dark mode is always the initial default
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("sarriatech_theme") as Theme;
      if (savedTheme === "light") {
        setThemeState("light");
        applyTheme("light");
      } else {
        // Default strictly to dark mode
        setThemeState("dark");
        applyTheme("dark");
      }
    } catch {
      setThemeState("dark");
      applyTheme("dark");
    }
  }, []);

  const applyTheme = (t: Theme) => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      if (t === "light") {
        root.classList.add("light");
        root.classList.remove("dark");
      } else {
        root.classList.add("dark");
        root.classList.remove("light");
      }
    }
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
    try {
      localStorage.setItem("sarriatech_theme", newTheme);
    } catch {
      // ignore
    }
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
