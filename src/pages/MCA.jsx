import React from "react";
import DownloadPage from "../components/DownloadPage";

const MCA = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-6">MCA Question Papers</h1>
      <p className="text-center mt-4 text-gray-600">
        Download MCA-specific question papers below.
      </p>
      <DownloadPage />
    </div>
  );
};

export default MCA;
