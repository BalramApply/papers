import React from "react";

const Web_Designing_Fundamentals = () =>{
    const papers = [
        { title: "web designing Paper 1", link: "/papers/data-structure-1.pdf" },
        { title: "web designing Paper 2", link: "/papers/data-structure-2.pdf" },
        { title: "web designing Paper 3", link: "/papers/data-structure-3.pdf" },
      ];

      return(
        <div className="center-container">
            <div className="p-4">
            <h1 className="text-2xl font-bold text-center mb-4">web-designing-fundamentals</h1>
            <div className="flex flex-col items-center space-y-4">
            {papers.map((paper, index) => (
              <a
                key={index}
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                {paper.title}
              </a>
            ))}
            </div>
            </div>
        </div>
      );
};

export default Web_Designing_Fundamentals;