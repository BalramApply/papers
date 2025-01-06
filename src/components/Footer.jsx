import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Footer Links */}
        <div className="flex space-x-4">
          <a
            href="/"
            className="hover:text-gray-300 transition duration-300"
          >
            Home
          </a>
          <a
            href="/mca"
            className="hover:text-gray-300 transition duration-300"
          >
            MCA
          </a>
          <a
            href="/about"
            className="hover:text-gray-300 transition duration-300"
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:text-gray-300 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-4 md:mt-0 text-center text-sm">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
