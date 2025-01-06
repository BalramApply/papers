import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MCA from "./pages/MCA";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DownloadPage from "./components/DownloadPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mca" element={<MCA />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
            <DownloadPage/>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
