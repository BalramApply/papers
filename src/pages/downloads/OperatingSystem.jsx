import React from "react";

const OperatingSystem = () => {
  const papers = [
    { title: "Sessional_03_12_24", link: "https://drive.google.com/file/d/1vO8zn_-LhE4dYG1Hb7f2HJ7XXmZbKdEd/view?usp=drivesdk"},
  ];

  return (
    <div className="center-container">
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Operating System Papers</h1>
      <div className="flex flex-col items-center space-y-4">
        {papers.map((paper, index) => (
          <a
            key={index}
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            {paper.title}
          </a>
        ))}
      </div>
    </div>
    </div>
  );
};

export default OperatingSystem;
