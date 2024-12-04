import { useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa"; // Import the icons
import { useDarkMode } from "../context/DarkModeContext"; // Import dark mode context
import logo from "../assets/logoWealthwise.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode(); // Use dark mode context

  return (
    <nav className={`py-4 shadow-md ${darkMode ? "bg-gray-800" : "bg-financial-primary"}`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center">
          <a href="landing">
            <img src={logo} alt="Logo" className="h-10 inline pr-1 rounded-md" />
          </a>
          <h1 className={`text-3xl font-bold ${darkMode ? "text-gray-200" : "text-white"}`}>
            WealthWise
          </h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex items-center space-y-4 md:space-y-0 md:space-x-4 absolute md:static top-[4rem] left-0 w-full md:w-auto p-5 md:p-0 transition-all duration-300
            ${darkMode ? "bg-gray-800" : "bg-financial-primary"} ${menuOpen ? "block" : "hidden"}`}
        >
          {[ 
            [1, "login", "Login"],
            [2, "signup", "Sign Up"],
            [3, "home", "Home"],
            [4, "investments", "Investments"],
          ].map(([id, url, title]) => (
            <li key={id}>
              <a
                href={url}
                className={`text-lg hover:text-gray-300 ${darkMode ? "text-gray-300 dark:hover:text-gray-400" : "text-white dark:hover:text-gray-400"} duration-300 block`}
              >
                {title}
              </a>
            </li>
          ))}

          {/* Dark Mode Toggle */}
          <li>
            <button
              onClick={toggleDarkMode}
              className={`text-lg ${darkMode ? "text-gray-300" : "text-white"} hover:text-gray-300 dark:hover:text-gray-400 duration-300 block`}
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-blue-500" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
