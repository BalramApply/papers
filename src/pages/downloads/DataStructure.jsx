import React from "react";

const DataStructure = () => {
  const papers = [
    { title: "Data Structure Paper 1", link: "/papers/data-structure-1.pdf" },
    { title: "Data Structure Paper 2", link: "/papers/data-structure-2.pdf" },
    { title: "Data Structure Paper 3", link: "/papers/data-structure-3.pdf" },
  ];

  return (
    <div className="center-container">
      <h1 className="text-2xl font-bold mb-4">Data Structure Papers</h1>
      <div className="space-y-4">
        {papers.map((paper, index) => (
          <a
            key={index}
            href={paper.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {paper.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DataStructure;
