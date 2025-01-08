import React from "react";

const CLanguage = () => {
  const papers = [
    { title: "exam_07_01_24", link: "https://drive.google.com/file/d/1v4y5hLgq8FSQlGxGHxJ1TvG84Iy-C1NP/view?usp=drivesdk"},
    { title: "sessional_1_12_24", link: "https://drive.google.com/file/d/1tVAAv6mls_ZOZeTpmYWJ5vvTXSgcf4md/view?usp=drivesdk"},
  ];

  return (
    <div className="center-container">
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">C Language Papers</h1>
      <div className="flex flex-col items-center space-y-4">
        {papers.map((paper, index) => (
          <a
            key={index}
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            {paper.title}
          </a>
        ))}
      </div>
    </div>
    </div>
  );
};

export default CLanguage;
