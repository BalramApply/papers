import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>© 2025 MyWebsite. All Rights Reserved.</p>
      <p>
        <a href="/about" className="text-blue-400 hover:underline">About</a> | 
        <a href="/contact" className="text-blue-400 hover:underline ml-2">Contact</a>
      </p>
    </footer>
  );
};

export default Footer;
