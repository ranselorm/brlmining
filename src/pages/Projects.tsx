import FlexCard from "../components/FlexCard";
import Hero from "../components/Hero";
import News from "../components/News";

const Projects = () => {
  return (
    <section className="">
      <Hero
        title="Projects"
        description="Storm Exploration is exploring for multimillion-ounce gold deposits on four district scale projects in north-western Ontario, Canada. The projects range from grassroots to the early stages of discovery where the presence of high-grade gold has been confirmed by drilling. Exploration programs will focus on expanding the existing zones of gold mineralization and identifying new targets for discovery drilling."
        background="/images/project-bg.jpg"
      />
      <div className="w-full mx-auto px-4 sm:px-6 md:px-24 py-16">
        <div className="flex flex-col gap-y-12">
          <FlexCard
            title="Miminiska"
            description="High-grade gold has been confirmed by drilling at a number of locations on the Miminiska property. Historical assays include 5.75g/t Au over 20.84m* and 13.95g/t Au over 5.32m* with mineralization hosted in banded iron formation and associated shear zones.The 5,494 ha Miminiska project is located approximately 350 km north of the city of Thunder Bay in north-western Ontario and within traditional territory of the Eabametoong First Nation.Storm Exploration is earning a 100% interest in the Miminiska property as part of an option agreement with Landore Resources Canada (see News Release). *Historical assays have not been independently verified by Storm Exploration; and, there is no guarantee that the Company can reproduce the results in whole or in part. Potential investors should not rely on these historical results when making an investment decision."
            image="/images/map.jpg"
            isButton
            path="/project/miminiska"
          />
          <FlexCard
            title="Gold Standard"
            description="High-grade gold has been confirmed by drilling at a number of locations on the Miminiska property. Historical assays include 5.75g/t Au over 20.84m* and 13.95g/t Au over 5.32m* with mineralization hosted in banded iron formation and associated shear zones.The 5,494 ha Miminiska project is located approximately 350 km north of the city of Thunder Bay in north-western Ontario and within traditional territory of the Eabametoong First Nation.Storm Exploration is earning a 100% interest in the Miminiska property as part of an option agreement with Landore Resources Canada (see News Release). *Historical assays have not been independently verified by Storm Exploration; and, there is no guarantee that the Company can reproduce the results in whole or in part. Potential investors should not rely on these historical results when making an investment decision."
            image="/images/map2.jpg"
            isButton
            isReverse
            path="/project/gold-standard"
          />
          <FlexCard
            title="Keezhik"
            description="High-grade gold has been confirmed by drilling at a number of locations on the Miminiska property. Historical assays include 5.75g/t Au over 20.84m* and 13.95g/t Au over 5.32m* with mineralization hosted in banded iron formation and associated shear zones.The 5,494 ha Miminiska project is located approximately 350 km north of the city of Thunder Bay in north-western Ontario and within traditional territory of the Eabametoong First Nation.Storm Exploration is earning a 100% interest in the Miminiska property as part of an option agreement with Landore Resources Canada (see News Release). *Historical assays have not been independently verified by Storm Exploration; and, there is no guarantee that the Company can reproduce the results in whole or in part. Potential investors should not rely on these historical results when making an investment decision."
            image="/images/map3.jpg"
            isButton
            path="/project/keezhik"
          />
          <FlexCard
            title="Artwood"
            description="High-grade gold has been confirmed by drilling at a number of locations on the Miminiska property. Historical assays include 5.75g/t Au over 20.84m* and 13.95g/t Au over 5.32m* with mineralization hosted in banded iron formation and associated shear zones.The 5,494 ha Miminiska project is located approximately 350 km north of the city of Thunder Bay in north-western Ontario and within traditional territory of the Eabametoong First Nation.Storm Exploration is earning a 100% interest in the Miminiska property as part of an option agreement with Landore Resources Canada (see News Release). *Historical assays have not been independently verified by Storm Exploration; and, there is no guarantee that the Company can reproduce the results in whole or in part. Potential investors should not rely on these historical results when making an investment decision."
            image="/images/map3.jpg"
            isButton
            isReverse
            path="/project/artwood"
          />
        </div>
      </div>
      <News />
    </section>
  );
};

export default Projects;
