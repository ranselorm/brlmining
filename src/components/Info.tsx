// src/components/InfoSection.tsx
import React from "react";
import { Icon } from "@iconify/react";

const Info: React.FC = () => {
  return (
    <section
      className="relative w-full h-[600px] md:h-[400px] bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('/images/bg.jpg')` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full mx-auto px-4 sm:px-4 py-8 md:px-32 text-white h-full">
        {/* Left Section: Newsletter Sign Up */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold mb-4">Newsletter Sign Up</h2>
          <div className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 w-full md:w-2/3 rounded-l-md focus:outline-none"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 rounded-r-md transition duration-200">
              Subscribe
            </button>
          </div>
        </div>

        {/* Middle Section: Boxes with Icons */}
        <div className="flex flex-wrap gap-[12px] w-full lg:w-1/2 lg:max-w-md justify-center items-center">
          <div className="bg-yellow-500 bg-opacity-75 text-white p-6 rounded flex flex-col items-center justify-center text-center shadow-md w-[150px] h-[130px] ">
            <Icon icon="f7:doc" className="text-4xl mb-2" />
            <p className="font-bold">Reports</p>
          </div>
          <div className="bg-yellow-500 text-black p-6 rounded flex flex-col items-center justify-center text-center shadow-md w-[150px] h-[130px]">
            <Icon icon="f7:doc" className="text-4xl mb-2" />
            <p className="font-bold">Reports</p>
          </div>
          <div className="bg-yellow-500 text-black p-6 rounded flex flex-col items-center justify-center text-center shadow-md w-[150px] h-[130px]">
            <Icon icon="f7:doc" className="text-4xl mb-2" />
            <p className="font-bold">Reports</p>
          </div>
          <div className="bg-yellow-500 text-black p-6 rounded flex flex-col items-center justify-center text-center shadow-md w-[150px] h-[130px]">
            <Icon icon="f7:doc" className="text-4xl mb-2" />
            <p className="font-bold">Reports</p>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="hidden lg:block w-[350px]">
          <img
            src="/images/shake.jpg"
            alt="Meeting"
            className="w-full h-[270px] rounded object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
