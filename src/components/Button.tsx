import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ButtonProps {
  text: string;
  icon?: string;
  path?: string;
}

const Button: React.FC<ButtonProps> = ({ text, icon, path }) => {
  return (
    <Link to={`${path}`}>
      <button className="bg-primary text-white text-xs px-6 py-4 rounded-full uppercase border-[1px] border-white mt-5 inline-flex items-center gap-x-2 hover:bg-accent transition duration-150 w-max">
        {text}
        {icon && <Icon icon={icon} />}
      </button>
    </Link>
  );
};

export default Button;
