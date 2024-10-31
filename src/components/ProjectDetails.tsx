// src/components/ProjectDetails.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProjectDetails.css";

type Section = {
  title: string;
  content: string | string[] | { date: string; description: string }[];
};

type ProjectDetailsProps = {
  title: string;
  location: string;
  sections: Section[];
  prevProject: { name: string; path: string };
  nextProject: { name: string; path: string };
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  location,
  sections,
  prevProject,
  nextProject,
}) => {
  const [openSection, setOpenSection] = useState<string>(sections[0].title);

  const handleToggle = (sectionTitle: string) => {
    setOpenSection(openSection === sectionTitle ? "" : sectionTitle);
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-4 md:px-60 font-primary">
      {/* Title and Location */}
      <div className="bg-white mb-8 py-8 px-8 pt-16 pb-6">
        <Link to="/projects" className="text-primary text-sm">
          &lt;<span className="ml-2">ALL PROJECTS</span>
        </Link>
        <h1 className="text-4xl font-bold mt-2">{title}</h1>
        <p className="text-lg text-gray-500">{location}</p>
      </div>

      {/* Sections */}
      {sections.map((section) => (
        <div key={section.title} className="my-4">
          <button
            onClick={() => handleToggle(section.title)}
            className="w-full flex justify-between items-center py-4 px-6 bg-gray-100 rounded shadow-sm text-lg font-semibold"
          >
            {section.title}
            <span>{openSection === section.title ? "▼" : "▶"}</span>
          </button>
          <div
            className={`toggle-content ${
              openSection === section.title ? "open" : ""
            }`}
          >
            {typeof section.content === "string" ? (
              <p>{section.content}</p>
            ) : Array.isArray(section.content) &&
              typeof section.content[0] === "string" ? (
              <ul className="list-disc pl-6">
                {(section.content as string[]).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <div>
                {(
                  section.content as { date: string; description: string }[]
                ).map((item, index) => (
                  <div key={index} className="my-2">
                    <p className="font-semibold">{item.date}</p>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <Link to={prevProject.path} className="text-indigo-600 hover:underline">
          &lt; PREV: {prevProject.name}
        </Link>
        <Link to={nextProject.path} className="text-indigo-600 hover:underline">
          NEXT: {nextProject.name} &gt;
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
