import React from "react";
import { useParams } from "react-router-dom";

const DownloadPage = () => {
  const { subject } = useParams();

  // Example question papers for each subject
  const papers = [
    { title: "Paper 1", link: "/papers/sample1.pdf" },
    { title: "Paper 2", link: "/papers/sample2.pdf" },
    { title: "Paper 3", link: "/papers/sample3.pdf" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        Download Papers for {decodeURIComponent(subject)}
      </h1>
      <div className="flex flex-col items-center space-y-4">
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

export default DownloadPage;
