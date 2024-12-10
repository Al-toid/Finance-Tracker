import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; 

const DarkModeContext = createContext(); // Create the context

export const useDarkMode = () => useContext(DarkModeContext); // Custom hook to use the context

export const DarkModeProvider = ({ children }) => {
  // Check for dark mode preference in localStorage or default to 'false'
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false; // Parse the saved value, or use false if not present
  });

  // Update localStorage whenever darkMode changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode)); // Save the darkMode state to localStorage
  }, [darkMode]);

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
