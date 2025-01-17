import React from "react";

const English_Communication_Skills_Level_1 = () =>{
    const papers = [
        { title: "communication skills", link: "/paper.pdf"},
        { title: "communication skills", link: "/paper.pdf"},
        { title: "communication skills", link: "/paper.pdf"},
    ];

    return(
        <div className="center-container">
            <div className="p-4">
            <h1 className="text-2xl font-bold text-center mb-4">English Communication Skills Level 1</h1>
            <div className="flex flex-col items-center space-y-4">
            {papers.map((paper, index) => (
              <a
                key={index}
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
                {paper.title}
              </a>
            ))}
            </div>
            </div>
        </div>
    );
};

export default English_Communication_Skills_Level_1;