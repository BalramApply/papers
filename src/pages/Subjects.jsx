import React from "react";
import { useNavigate } from "react-router-dom";

const Subjects = () => {
  const navigate = useNavigate();

  return (
    <div className="center-container">
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Select a Subject</h1>
      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={() => navigate("/download/digital-electronics")}
          className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Digital Electronics
        </button>
        <button
          onClick={() => navigate("/download/environmental-sciences")}
          className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
          Environmental Sciences
        </button>
        <button
          onClick={() => navigate("/download/web-designing-fundamentals")}
          className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
          web designing fundamentals
        </button>
        <button
          onClick={() => navigate("/download/english-ommunication-skills-level-1")}
          className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
          English Communication Skills Level 1
        </button>
        <button
          onClick={() => navigate("/download/artificial-intelligence-and-applications")}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Artificial Intelligence And Applications
        </button>
        <button
          onClick={() => navigate("/download/system-software-and-operating-systems")}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          System Software And Operating Systems
        </button>
        <button
          onClick={() => navigate("/download/computer-fundamentals-programming-in-c")}
          className="px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
          Computer Fundametals And Programming In C
        </button>
        
        
        
        
      </div>
    </div>
    </div>
  );
};

export default Subjects;
