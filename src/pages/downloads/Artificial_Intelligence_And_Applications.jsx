import React from "react";

const Artificial_Intelligence_And_Applications = () => {
  const papers = [
    { title: "artificial intelligence Paper 1", link: "/papers/data-structure-1.pdf" },
    { title: "artificial intelligence Paper 2", link: "/papers/data-structure-2.pdf" },
    { title: "artificial intelligence Paper 3", link: "/papers/data-structure-3.pdf" },
  ];

  return (
    <div className="center-container">
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Artificial Intelligence And Applications</h1>
      <div className="flex flex-col items-center space-y-4">
        {papers.map((paper, index) => (
          <a
            key={index}
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            {paper.title}
          </a>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Artificial_Intelligence_And_Applications;
