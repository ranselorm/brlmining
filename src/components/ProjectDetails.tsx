// src/components/ProjectDetails.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import "./ProjectDetails.css";

type Section = {
  title: string;
  content: string;
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full mx-auto font-primary bg-white md:w-4/6">
      <div className="bg-white mb-8 py-8 px-8 pt-16 pb-6">
        <Link to="/projects" className="text-primary text-sm">
          &lt;<span className="ml-2">ALL PROJECTS</span>
        </Link>
        <h1 className="text-4xl font-bold mt-2">{title}</h1>
        <p className="text-lg mt-4">{location}</p>
      </div>

      {/* Sections */}
      {sections.map((section) => (
        <div key={section.title} className="my-4">
          <button
            onClick={() => handleToggle(section.title)}
            className={`w-full flex justify-between items-center px-6  ${
              section.title === "Location" || section.title === "History"
                ? "bg-gray py-5"
                : "bg-none"
            } rounded text-lg font-semibold`}
          >
            {section.title}
            {openSection === section.title ? (
              <Icon icon="mdi:chevron-down" className="text-xl" />
            ) : (
              <Icon icon="mdi:chevron-right" className="text-xl" />
            )}
          </button>
          {openSection === section.title && (
            <div
              className={`p-6 ${
                section.title === "Location" || section.title === "History"
                  ? "bg-gray"
                  : "bg-none"
              }`}
            >
              <p className="leading-loose">{section.content}</p>
            </div>
          )}
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
