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
        description="Breakthrough Resources Limited (BRL) is a Ghanaian – based emerging mineral exploration company with focus on development of a small to medium – scale prospects in the West African sub-region.  BRL is currently investigating options for development of an underground gold mining operation at its flagship Sewum project, situated in SW Ghana."
      />
      <div className="container mx-auto px-4 md:px-8 lg:px-16 my-12 leading-relaxed">
        BRL is committed to ensuring the safe and efficient operation of its
        projects, and has recorded impressive results in its work on this
        project. BRL seeks for projects with the potential to be brought to
        advanced development stage and create value for shareholders. The
        Company’s plan is to build a portfolio of feasible mining prospects in
        Ghana and other African Countries and bring them to their full economic
        potential through JV partnerships. We will approach all our objectives
        in a socially and environmentally responsible manner with the aim of
        replicating best industry practices that the relevant parties can be
        proud of.
      </div>
      <div className="w-full mx-auto px-4 sm:px-4 md:px-24 py-12 flex flex-col gap-y-20">
        <AboutCard
          title="A Trusted Partner"
          description="We making value-added investment decisions quickly and maintain an open and honest dialogue throughout the process. Our network of mining industry experts has decades of experience in the evaluation and acquisition of mining interests and leases."
          image="/images/project.jpg"
          isButton
        />
        <AboutCard
          title="Why BRL?"
          description="Being self-funded, transparent, and efficient allows BRL to consistently deliver a seamless and pain-free project execution. We believe we have the right project with significant upside potential for immediate development and well-structured plan for execution. BRL’s board is made up industry expertise with extensive experience in resource development, engineering, and mining and processing. We take a methodical approach to ensure the desired corporate results without compromising the safety and quality of the projects. Most importantly, we understand the local regulatory requirements and dynamics, and are driven to exceed local expectations and execute to international standards."
          image="/images/corporate.jpg"
          isReverse
        />
        <AboutCard
          title="We truly think global and act local."
          description="BRL Mining Exploration is committed to conducting its operations in a socially and environmentally responsible manner by fostering strong relationships with stakeholders. BRL Mining Exploration believes that respect for local culture & values is a cornerstone of this principle."
          image="/images/school.jpg"
        />
      </div>
      <News />
    </section>
  );
};

export default About;
