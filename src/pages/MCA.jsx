import React from "react";
import { useNavigate } from "react-router-dom";

const MCA = () => {
  const navigate = useNavigate();

  return (
    <div className="center-container">
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">MCA</h1>
      <p className="text-lg mb-6">
        Welcome to the MCA page. Please select a subject to proceed.
      </p>
      <button
        onClick={() => navigate("/subjects")}
        className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Select Subject
      </button>
    </div>
    </div>
  );
};

export default MCA;
