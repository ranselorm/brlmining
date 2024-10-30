import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

type NewsCardProps = {
  category: string;
  date: string;
  title: string;
  iconUrl: string;
};

const NewsCard: React.FC<NewsCardProps> = ({
  category,
  date,
  title,
  iconUrl,
}) => {
  return (
    <div className="bg-white rounded shadow-lg overflow-hidden md:w-[370px] h-[380px]">
      {/* Icon Section */}
      <div
        className={`${
          category === "Financial" && "bg-secondary"
        } p-6 flex justify-center h-[210px] relative mb-4 bg-primary`}
      >
        {/* <img
          src={iconUrl}
          alt={category}
          className="h-full w-full object-cover"
        /> */}
        <Icon icon={iconUrl} className="text-[100px] text-[#f5f5f5] mt-4" />
        <span className="text-xs font-semibold uppercase text-gray-500 bg-gray-200 py-2 absolute bottom-0 left-4 bg-gray px-4">
          {category}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <p className="text-xs text-gray-500 mt-2">{date}</p>
        <h3 className="text-lg font-bold mt-2">{title}</h3>
      </div>
    </div>
  );
};

export default NewsCard;
