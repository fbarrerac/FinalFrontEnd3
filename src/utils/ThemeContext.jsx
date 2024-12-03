/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{theme, themeToggle}}>
      {children}
    </ThemeContext.Provider>
  );
};
