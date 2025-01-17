import React from "react";

const Computer_Fundametals_And_Programming_In_C = () => {
  const papers = [
    { title: "C Language Paper 1", link: "/papers/c-language-1.pdf" },
    { title: "C Language Paper 2", link: "/papers/c-language-2.pdf" },
    { title: "C Language Paper 3", link: "/papers/c-language-3.pdf" },
  ];

  return (
    <div className="center-container">
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Computer Fundametals And Programming In C</h1>
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

export default Computer_Fundametals_And_Programming_In_C;
