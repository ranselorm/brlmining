// src/pages/InvestorCentre.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import News from "../components/News";
import Hero from "../components/Hero";

const InvestorCentreOverview: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-deep mx-auto px-4 py-16 sm:px-6 md:px-24 font-primary">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Events</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-base font-semibold">
                121 Mining Investment Frankfurt – 16-17 November 2022
              </h3>
              <p className="text-sm text-gray-500 mb-1">October 31, 2022</p>
            </div>
          </div>
          <Link
            to="/all-events"
            className="text-primary font-semibold underline mt-4 inline-block text-sm"
          >
            ALL EVENTS
          </Link>
        </div>

        {/* Media Section */}
        <div className="md:border-l md:pl-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Media</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Lithoquest – a promising gold explorer in high grade BIFs
              </h3>
              <p className="text-sm text-gray-500 mb-1">February 5, 2022</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">
                Lithoquest Resources bulks up its portfolio by acquiring two
                district-scale gold projects in Ontario
              </h3>
              <p className="text-sm text-gray-500 mb-1">July 23, 2021</p>
            </div>
          </div>
          <Link
            to="/all-media"
            className="text-primary font-semibold underline mt-4 inline-block text-sm"
          >
            ALL MEDIA
          </Link>
        </div>
      </div>
    </div>
  );
};

const InvestorCentre: React.FC = () => {
  const reports = [
    {
      title: "Financial Statement – 2024 Q2",
      downloadLink: "/path/to/financial-statement-q2-2024.pdf",
    },
  ];

  const presentations = [
    {
      title: "Corporate Presentation Q4 2024",
      downloadLink: "/path/to/corporate-presentation-q4-2024.pdf",
    },
  ];

  return (
    <div className="">
      <Hero title="Investor Centre" background="/images/report-bg.jpg" />
      <div className="flex flex-col md:flex-row gap-x-4 container mx-auto px-4 sm:px-6 md:px-24 md:py-16 py-6">
        <Section title="Reports" viewAllLink="/all-reports" items={reports} />
        <Section
          title="Presentations"
          viewAllLink="/all-presentations"
          items={presentations}
        />
      </div>
      <InvestorCentreOverview />
      <News />
    </div>
  );
};

export default InvestorCentre;
