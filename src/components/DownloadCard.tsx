import React from "react";
import { Icon } from "@iconify/react";

type DownloadCardProps = {
  title: string;
  downloadLink: string;
};

const DownloadCard: React.FC<DownloadCardProps> = ({ title, downloadLink }) => {
  return (
    <div className="bg-white p-10 rounded shadow-lg w-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <a
        href={downloadLink}
        download
        className="inline-flex items-center justify-center bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-accent transition-colors"
      >
        <Icon icon="material-symbols:download" className="mr-2 text-lg" />
        DOWNLOAD PDF
      </a>
    </div>
  );
};

export default DownloadCard;
