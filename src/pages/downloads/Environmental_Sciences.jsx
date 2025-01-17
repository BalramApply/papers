import React from "react";

const Environmental_Sciences = () =>{
    const papers = [
        { title: "environment study", link: "/paper.pdf"},
        { title: "environment study", link: "/paper.pdf"},
        { title: "environment study", link: "/paper.pdf"},
    ];

    return(
        <div className="center-container">
            <div className="p-4">
            <h1 className="text-2xl font-bold text-center mb-4">Environmental Sciences</h1>
            <div className="flex flex-col items-center space-y-4">
            {papers.map((paper, index) => (
              <a
                key={index}
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
                {paper.title}
              </a>
            ))}
            </div>
            </div>
        </div>
    );
};

export default Environmental_Sciences;