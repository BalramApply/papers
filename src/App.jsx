import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MCA from "./pages/MCA";
import Subjects from "./pages/Subjects";
import Artificial_Intelligence_And_Applications from "./pages/downloads/Artificial_Intelligence_And_Applications";
import System_Software_And_Opearting_Systems from "./pages/downloads/System_Software_And_Opearting_Systems";
import Computer_Fundametals_And_Programming_In_C from "./pages/downloads/Computer_Fundametals_And_Programming_In_C";
import Digital_Electronics from "./pages/downloads/Digital_Electronics";
import Web_Designing_Fundamentals from "./pages/downloads/Web_Designing_Fundamentals";
import Environmental_Sciences from "./pages/downloads/Environmental_Sciences";
import English_Communication_Skills_Level_1 from "./pages/downloads/English_Communication_Skills_Level_1";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FallingStars from "./components/FallingStars";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">

        {/* falling night */}
        <FallingStars/>
        
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mca" element={<MCA />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/download/artificial-intelligence-and-applications" element={<Artificial_Intelligence_And_Applications />} />
            <Route path="/download/system-software-and-operating-systems" element={<System_Software_And_Opearting_Systems />} />
            <Route path="/download/computer-fundamentals-programming-in-c" element={<Computer_Fundametals_And_Programming_In_C />} />
            <Route path="/download/web-designing-fundamentals" element={<Web_Designing_Fundamentals />} />
            <Route path="/download/digital-electronics" element={<Digital_Electronics/>}/>
            <Route path="/download/environmental-sciences" element={<Environmental_Sciences/>}/>
            <Route path="/download/english-ommunication-skills-level-1" element={<English_Communication_Skills_Level_1/>}/>
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
