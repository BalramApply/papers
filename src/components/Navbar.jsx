import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to track the theme mode
  const [darkMode, setDarkMode] = useState(false);

  // State to handle mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Effect to apply the theme based on the mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 text-black dark:text-white p-4 fixed top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center">
        {/* Logo or title */}
        <div className="text-xl font-semibold">
          <Link to="/">MyWebsite</Link>
        </div>

        {/* Dark/Light Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? (
            <span role="img" aria-label="Light Mode">🌞</span>
          ) : (
            <span role="img" aria-label="Dark Mode">🌙</span>
          )}
        </button>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-700 transition"
        >
          <span className="text-xl">&#9776;</span> {/* Hamburger Icon */}
        </button>
      </div>

      {/* Links for desktop */}
      <div className="hidden lg:flex space-x-4">
        <Link to="/" className="hover:text-gray-500">Home</Link>
        <Link to="/mca" className="hover:text-gray-500">MCA</Link>
        <Link to="/about" className="hover:text-gray-500">About</Link>
        <Link to="/contact" className="hover:text-gray-500">Contact</Link>
      </div>

      {/* Mobile Menu Links (visible when menu is open) */}
      <div
        className={`lg:hidden mt-4 space-y-4 ${isMenuOpen ? "block" : "hidden"}`}
      >
        <Link to="/" className="block text-center py-2 hover:text-gray-500">Home</Link>
        <Link to="/mca" className="block text-center py-2 hover:text-gray-500">MCA</Link>
        <Link to="/about" className="block text-center py-2 hover:text-gray-500">About</Link>
        <Link to="/contact" className="block text-center py-2 hover:text-gray-500">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
