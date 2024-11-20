import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the menu toggle
import logo from "../assets/logoFinance.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="py-4 bg-financial-primary shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center">
          <a href="landing">
            <img src={logo} alt="Logo" className="h-10 inline pr-1 rounded-full"/>
          </a>
          <h1 className="text-3xl text-white font-bold">Finance Tracker</h1>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        {/* Using tailwinds md property, responsiveness is accounted for over 768 pixels. after that, using menu open use state, show or hide hamburger menu */}
        <ul 
          className={`md:flex items-center space-y-4 md:space-y-0 md:space-x-4 absolute md:static top-[4rem] left-0 w-full md:w-auto bg-financial-primary p-5 md:p-0 transition-all duration-300 
            ${menuOpen ? "block" : "hidden"}`}
        >
        {/*Map is used to iterate through the array of links.This way styling is only written and edited in one place */}
          {[
            [1,"login","Login"],
            [2,"signup","Sign Up"],
            [3,"home","Home"],
            [4,"investments","Investments"],
          ].map(([id,url,title]) => (
            <li key={id}><a href={url} className="text-lg text-white hover:text-gray-300 duration-300 block">{title}</a></li>
            ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
