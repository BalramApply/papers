import React from "react";

const System_Software_And_Opearting_Systems = () => {
  const papers = [
    { title: "Operating System Paper 1", link: "/papers/os-1.pdf" },
    { title: "Operating System Paper 2", link: "/papers/os-2.pdf" },
    { title: "Operating System Paper 3", link: "/papers/os-3.pdf" },
  ];

  return (
    <div className="center-container">
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">System Software Operating Systems</h1>
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

export default System_Software_And_Opearting_Systems;
