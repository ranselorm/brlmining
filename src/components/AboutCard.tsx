import { Link } from "react-router-dom";
import Button from "./Button";
import React from "react";

interface AboutCardProps {
  title: string;
  description: string;
  image: string;
  isButton?: boolean;
  isReverse?: boolean;
}

const AboutCard: React.FC<AboutCardProps> = ({
  title,
  description,
  image,
  isButton,
  isReverse,
}) => {
  return (
    <>
      <div
        className={`${
          isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } container mx-auto flex flex-col gap-x-10 items-center lg:space-x-8`}
      >
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={image}
            alt="Map of projects locations"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>

        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-base mb-4 leading-loose">{description}</p>
          {isButton && (
            <Link to="/projects">
              <Button text="View all projects" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutCard;