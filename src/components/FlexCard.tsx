import { Link } from "react-router-dom";
import Button from "./Button";
import React from "react";

interface FlexCardProps {
  title: string;
  description: string;
  image: string;
  isButton?: boolean;
  isReverse?: boolean;
  path?: string;
}

const FlexCard: React.FC<FlexCardProps> = ({
  title,
  description,
  image,
  isButton,
  isReverse,
  path,
}) => {
  return (
    <>
      <div
        className={`${
          isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
        } flex flex-col gap-x-10 items-center justify-center lg:space-x-8`}
      >
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={image}
            alt="Map of projects locations"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>

        <div className="w-full lg:w-1/2 text-left">
          <Link to={`${path}`} className="text-3xl font-bold text-gray-800">
            {title}
          </Link>
          <p className="text-base mt-6 mb-2 leading-loose">{description}</p>
          {isButton && (
            <Link to={`${path}`}>
              <Button text="View project" />
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default FlexCard;
