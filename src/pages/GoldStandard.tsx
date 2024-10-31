// src/pages/GoldStandard.tsx
import React from "react";
import ProjectDetails from "../components/ProjectDetails";

const GoldStandard: React.FC = () => {
  return (
    <ProjectDetails
      title="Gold Standard"
      location="Northwestern Ontario, Canada"
      sections={[
        {
          title: "Location",
          content:
            "The Gold Standard Project is located in north-western Ontario approximately 65 km north of the city of Fort Frances...",
        },
        {
          title: "Highlights",
          content: [
            "Three historical showings on the property that represent mine shafts that were active between 1900 and 1903.",
            "Results from recent work confirm high-grade potential, including 166 g/t Au, 88.6 g/t Au, and 83.4 g/t Au from grab samples.",
            "Minimal exploration work completed in the project area.",
            "Accessible year-round.",
            "Low-cost option to earn a 100% interest in claims covering historical high-grade gold workings.",
          ],
        },
        {
          title: "History",
          content: [
            {
              date: "1900",
              description:
                "Rainy Lake Mining and Power Co. sank a shaft to 22.8m with 7.4m of cross cuts at Sairy Camp on the shore of Grant Lake.",
            },
            {
              date: "1901-1903",
              description:
                "Gold Standard Mining Co. sank two shafts in the area. One near Napanee Lake was sunk to a depth of 45.7m.",
            },
            {
              date: "1969-1971",
              description:
                "The International Nickel Co. drilled four exploratory holes totalling 180m.",
            },
            {
              date: "1989",
              description: "Canhorn Mining Corporation optioned the property.",
            },
          ],
        },
        {
          title: "Technical Details",
          content:
            "The Gold Standard property lies within the Archean Manitou – Stormy Lakes greenstone belt, an 80 km by 20 km assemblage...",
        },
      ]}
      prevProject={{ name: "Miminiska", path: "/project/miminiska" }}
      nextProject={{ name: "Keezhik", path: "/project/keezhik" }}
    />
  );
};

export default GoldStandard;
