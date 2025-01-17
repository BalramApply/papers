import React from "react";

const Digital_Electronics = () => {
    const papers = [
        { title: "Digital electronics Paper 1", link: "/papers/data-structure-1.pdf" },
        { title: "Digital electronics Paper 2", link: "/papers/data-structure-2.pdf" },
        { title: "Digital electronics Paper 3", link: "/papers/data-structure-3.pdf" },
      ];

      return (
        <div className="center-container">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-center mb-4">Digital Electronics</h1>
          <div className="flex flex-col items-center space-y-4">
            {papers.map((paper, index) => (
              <a
                key={index}
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                {paper.title}
              </a>
            ))}
          </div>
        </div>
        </div>
      );
    };;

export default Digital_Electronics;