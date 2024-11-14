// src/pages/Keezhik.tsx
import React from "react";
import ProjectDetails from "../components/ProjectDetails";

const Keezhik: React.FC = () => {
  return (
    <>
      <ProjectDetails
        title="Keezhik"
        location="Northwestern Ontario, Canada"
        sections={[
          {
            title: "Location",
            content:
              "The Gold Standard Project is located in north-western Ontario approximately 65 km north of the city of Fort Frances and within the traditional territory of the Naicatchewenin and Nigigoonsiminikaaning First Nations. The property comprises 284 mineral claims covering 6,016 ha and is accessible by all-season forestry road. The GS project covers three documented high-grade gold showings: GS-HW271, GS-G149, and Sairy Camp.",
          },
          {
            title: "Highlights",
            content:
              "Three historical showings on the property that represent mine shafts that were active between 1900 and 1903. Results from recent work confirm high-grade potential, including 166 g/t Au, 88.6 g/t Au, and 83.4 g/t Au from grab samples. Minimal exploration work completed in the project area. Accessible year-round. Low-cost option to earn a 100% interest in claims covering historical high-grade gold workings.",
          },
          {
            title: "History",
            content:
              "1900: Rainy Lake Mining and Power Co. sank a shaft to 22.8m with 7.4m of cross cuts at Sairy Camp on the shore of Grant Lake. 1901-1903: Gold Standard Mining Co. sank two shafts in the area. One near Napanee Lake was sunk to a depth of 45.7m. 1969-1971: The International Nickel Co. drilled four exploratory holes totalling 180m. 1989: Canhorn Mining Corporation optioned the property.",
          },
          {
            title: "Technical Details",
            content:
              "The Gold Standard property lies within the Archean Manitou – BRL Miningy Lakes greenstone belt, an 80 km by 20 km assemblage of northeast-trending mafic, intermediate, and felsic metavolcanic rocks, related intrusive rocks, and metasediments which have been intruded by Archean granitoid stocks and batholiths. Structurally, the belt is dominated by the northeast-striking Manitou Straits fault (MSF). The Gold Standard property is located northwest of the MSF and is underlain by intermediate to mafic volcanic flows and pyroclastic rocks of the Grant Lake group.",
          },
        ]}
        prevProject={{ name: "Gold Standard", path: "/project/gold-standard" }}
        nextProject={{ name: "Attwood", path: "/project/attwood" }}
      />
    </>
  );
};

export default Keezhik;
