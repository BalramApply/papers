import React from "react";

const DownloadPage = () => {
  // Sample data for question papers
  const questionPapers = [
    { id: 1, name: "Assignment_one", link: "https://docs.google.com/document/d/1T9j0CjN6Sp08iFFtLnEzmeLo4nNETGXp/edit?usp=drive_link&ouid=108466425487083083208&rtpof=true&sd=true" },
    { id: 2, name: "Assignment_two", link: "https://docs.google.com/document/d/1JZRN-DqUG1FRJS9pweYOYyDtRkngJbqf/edit?usp=drive_link&ouid=108466425487083083208&rtpof=true&sd=true" },
    { id: 3, name: "Assignment_three", link: "https://docs.google.com/document/d/1cEWNQep-zH0wkycvPWI_1WtemLHBuTBb/edit?usp=drive_link&ouid=108466425487083083208&rtpof=true&sd=true" },
    { id: 3, name: "Sessional", link: "https://drive.google.com/file/d/1tVAAv6mls_ZOZeTpmYWJ5vvTXSgcf4md/view?usp=drive_link" },
    { id: 3, name: "Most_inportant", link: "https://docs.google.com/document/d/1toZLx1K-GG4uT_hgYLZd34NR10qxFCcW/edit?usp=drive_link&ouid=108466425487083083208&rtpof=true&sd=true" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Download Question Papers</h2>
      <div className="space-y-4">
        {questionPapers.map((paper) => (
          <div
            key={paper.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded shadow hover:bg-gray-200 transition"
          >
            <span>{paper.name}</span>
            <a
              href={paper.link}
              target="_blank" // Open in a new tab
              rel="noopener noreferrer" // Security measure
              className="text-blue-500 hover:underline"
            >
              Open
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadPage;
