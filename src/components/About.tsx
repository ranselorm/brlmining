// src/components/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <section className="flex flex-col gap-4 md:gap-12 lg:flex-row items-center justify-center py-16 px-4">
      <div className="w-full lg:w-1/2 h-[370px] flex justify-center lg:justify-end mb-8 lg:mb-0">
        <img
          src="/images/hero2.jpg"
          alt="Mineral Exploration"
          className="w-full h-auto rounded object-cover"
        />
      </div>

      <div className="w-full lg:w-4/6 text-center lg:text-left text-sm">
        <h2 className="text-2xl mb-4">
          BREAKTHROUGH
          <span className="font-bold ml-2">RESOURCES</span>
        </h2>
        <p className="text-gray-700 mb-6 text-left">
          Breakthrough Resources Limited (BRL) is a Ghanaian-based emerging
          mineral exploration company with a focus on the development of small
          to medium-scale prospects in the West African sub-region.
        </p>
        <p className="text-gray-700 mb-6">
          We are committed to operating all of our investment assets and
          facilities in an environmentally responsible manner, ensuring the
          health and wellness of our associates and of the communities in which
          we operate.
        </p>
        <p className="text-gray-700">
          We take a methodical approach to ensure the desired corporate results
          without compromising the safety and quality of the projects. Most
          importantly, we understand the local market and are driven to exceed
          local expectations and execute to international standards.
        </p>
      </div>
    </section>
  );
};

export default About;
