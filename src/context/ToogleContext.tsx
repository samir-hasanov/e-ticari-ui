import React, { createContext, useState } from "react";
import { IProps } from "./ContextApi";

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Create the context with the defined type
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

// Create a provider component to wrap the app with
export const ToggleContext: React.FC<IProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const themeContextValue: ThemeContextType = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
