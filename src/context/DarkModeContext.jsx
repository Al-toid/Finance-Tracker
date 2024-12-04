import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"; 

const DarkModeContext = createContext(); // Create the context

export const useDarkMode = () => useContext(DarkModeContext); // Custom hook to use the context

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false); // State to track dark mode

  const toggleDarkMode = () => setDarkMode(!darkMode); // Toggle function

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? "dark" : ""}>{children}</div> {/* Apply 'dark' class */}
    </DarkModeContext.Provider>
  );
};

DarkModeProvider.propTypes = {
    children: PropTypes.any,
  };