import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ButtonProps {
  text: string;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({ text, icon }) => {
  return (
    <button className="bg-primary text-white text-xs px-6 py-3 rounded-full uppercase border-[1px] border-white mt-12 flex items-center gap-x-2 hover:bg-accent transition duration-100">
      {text}
      {icon && <Icon icon={icon} />}
    </button>
  );
};

export default Button;
