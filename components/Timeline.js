import React from "react";

export default function Timeline() {
  const experiences = [
    {
      title: "Software Quality Assurance Intern",
      date: "2025",
      location: "PT Bio Farma (Persero)"
    },
    {
      title: "Chairman",
      date: "2024",
      location: "Himatif FMIPA Unpad",
    },
    {
      title: "External Relations Staff",
      date: "2023",
      location: "Himatif FMIPA Unpad",
    },
    {
      title: "Project Supervisor",
      date: "2023",
      location: "Informatics Festival",
    },
    {
      title: "Graphic Designer",
      date: "2022",
      location: "DinSon",
    },
    {
      title: '"Technology, Information, and Communication Section Chief"',
      date: "2022",
      location: "OSIS SMA Negeri 3 Bandung",
    },
  ];

  return (
    <div className="bg-gray-100 rounded-2xl p-5 pb-0 pt-3">
      <div className="relative pl-6  border-gray-300">
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-5">
            <span className="absolute left-[-30px] top-[10px] w-1 h-1 bg-black rounded-full"></span>
            <h3 className="font-medium leading-tight text-[10px]">
              {exp.title}
            </h3>
            <p className="text-gray-500 text-[7px]">
            {exp.location} – {exp.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}