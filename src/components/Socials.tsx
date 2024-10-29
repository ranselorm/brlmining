import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface IconProps {
  color?: boolean;
}
const Socials: React.FC<IconProps> = ({ color }) => {
  return (
    <>
      <div className="flex space-x-4 flex-end">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Icon
            icon={"ri:twitter-x-line"}
            className={`${color && "text-white"} text-primary`}
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon={"line-md:linkedin"}
            className={`${color && "text-white"} text-primary`}
          />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon={"line-md:facebook"}
            className={`${color && "text-white"} text-primary`}
          />
        </a>
      </div>
    </>
  );
};

export default Socials;
