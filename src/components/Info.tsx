import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Info: React.FC = () => {
  return (
    <div
      className="w-full bg-cover bg-center py-8 font-primary"
      style={{ backgroundImage: "url('/images/world.jpg')" }}
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-4 md:py-16 md:px-24">
        {/* Investor Centre Card */}
        <div className="bg-primary text-white p-6 md:w-1/2 rounded">
          <div className="flex items-center mb-4">
            <Icon icon="mdi:finance" className="text-3xl mr-2" />
            <h2 className="text-3xl font-bold">Investor Centre</h2>
          </div>
          <p className="my-6">
            Our goal is to generate wealth through the discovery of a new gold
            deposit.
          </p>
          <Link
            to="/investor-centre"
            className="inline-block mt-4 px-6 py-3 border border-white text-white rounded-full text-sm"
          >
            STOCK & INVESTOR INFO
          </Link>
        </div>

        {/* Company Card */}
        <div className="bg-primary text-white p-6 md:w-1/2 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <Icon
              icon="mdi:office-building-outline"
              className="text-3xl mr-2"
            />
            <h2 className="text-2xl font-bold">The Company</h2>
          </div>
          <p className="my-6">
            Leadership and the experience to unlock value and advance the Fort
            Hope Gold Projects.
          </p>
          <Link
            to="/about"
            className="inline-block mt-4 px-4 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-primary transition"
          >
            ABOUT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
