import React from "react";
import { useNavigate } from "react-router-dom";

const Subjects = () => {
  const navigate = useNavigate();

  return (
    <div className="center-container">
      <h1 className="text-2xl font-bold mb-4">Select a Subject</h1>
      <div className="space-y-4">
        <button
          onClick={() => navigate("/download/data-structure")}
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Data Structure
        </button>
        <button
          onClick={() => navigate("/download/operating-system")}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Operating System
        </button>
        <button
          onClick={() => navigate("/download/c-language")}
          className="px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          C Language
        </button>
      </div>
    </div>
  );
};

export default Subjects;
