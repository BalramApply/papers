import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/">MyWebsite</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded bg-gray-700 hover:bg-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/mca" className="hover:text-gray-400">
            MCA
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden mt-4 ${
          isMenuOpen ? "block" : "hidden"
        } space-y-2`}
      >
        <Link
          to="/"
          onClick={closeMenu} // Close the menu on click
          className="block px-4 py-2 hover:bg-gray-700 rounded"
        >
          Home
        </Link>
        <Link
          to="/mca"
          onClick={closeMenu} // Close the menu on click
          className="block px-4 py-2 hover:bg-gray-700 rounded"
        >
          MCA
        </Link>
        <Link
          to="/about"
          onClick={closeMenu} // Close the menu on click
          className="block px-4 py-2 hover:bg-gray-700 rounded"
        >
          About
        </Link>
        <Link
          to="/contact"
          onClick={closeMenu} // Close the menu on click
          className="block px-4 py-2 hover:bg-gray-700 rounded"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
