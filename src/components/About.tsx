// src/components/About.tsx
import React from "react";
import Hero from "./Hero";
import AboutCard from "./AboutCard";
import News from "./News";

const About: React.FC = () => {
  return (
    <section className="">
      <Hero
        title="About the Company"
        background="/images/about-bg.jpg"
        description="Storm Exploration Inc. is a Canadian mineral exploration company focused on advancing four district-scale gold projects in north-western Ontario, Canada. The company’s shares are listed on the TSX Venture Exchange trade under the symbol STRM."
      />
      <div className="w-full mx-auto px-4 sm:px-4 md:px-24 py-12 flex flex-col gap-y-20">
        <AboutCard
          title="Projects"
          description="Storm Exploration is advancing four district-scale gold projects in
            north-western Ontario that cover more than 46,000 ha of prospective
            geology. The Company’s primary project, Miminiska, hosts extensive
            drill-confirmed, high-grade gold mineralization and has the
            potential to host a multimillion-ounce deposit."
          image="/images/project.jpg"
          isButton
          path="/projects"
        />
        <AboutCard
          title="Corporate Governance"
          description="Storm Exploration understands that good corporate governance is critical to success. The company has adopted a corporate governance policy that is appropriate for a corporation of its size based on National Policy 58-201 “Corporate Governance Guidelines” and National Instrument 58-101 “Disclosure of Corporate Governance Practices”"
          image="/images/corporate.jpg"
          isReverse
        />
        <AboutCard
          title="Corporate Social Responsibility"
          description="Storm Exploration is committed to conducting its operations in a socially and environmentally responsible manner by fostering strong relationships with stakeholders. Storm Exploration believes that respect for local culture & values is a cornerstone of this principle."
          image="/images/school.jpg"
        />
      </div>
      <News />
    </section>
  );
};

export default About;
