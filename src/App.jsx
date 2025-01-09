import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MCA from "./pages/MCA";
import Subjects from "./pages/Subjects";
import DataStructure from "./pages/downloads/DataStructure";
import OperatingSystem from "./pages/downloads/OperatingSystem";
import CLanguage from "./pages/downloads/CLanguage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FallingStars from "./components/FallingStars"; // Import FallingStars

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Falling Stars */}
        <FallingStars />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mca" element={<MCA />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/download/data-structure" element={<DataStructure />} />
            <Route path="/download/operating-system" element={<OperatingSystem />} />
            <Route path="/download/c-language" element={<CLanguage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
