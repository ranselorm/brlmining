import Hero from "../components/Hero";

interface TeamMemberProps {
  name: string;
  title: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  title,
  description,
}) => (
  <div className="p-4 mb-6 md:w-1/2">
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <h4 className="text-sm font-semibold  mb-2">{title}</h4>
    <p className="text-sm leading-loose">{description}</p>
  </div>
);

const Management = () => {
  const teamMembers = [
    {
      name: "Bruce Counts",
      title: "President, CEO, Director",
      description:
        "Mr. Counts has over 30 years of experience in international mineral exploration and more than 20 as a director and senior officer of publicly traded mineral exploration companies. He was directly involved in the discovery of several kimberlite fields including the Lac de Gras field which is host to the Ekati Diamond Mine in Canada’s Northwest Territories. Bruce holds a Bachelor of Applied Science in Geological Engineering from the University of British Columbia and is a registered Professional Geoscientist.",
    },
    {
      name: "Dwight Walker",
      title: "Chief Financial Officer",
      description:
        "Mr. Walker is a Chartered Professional Accountant with over 30 years of experience in finance and administration with the last 15 years in the mining sector. He has served as the Chief Financial Officer of several public companies. Mr. Walker was the CFO of ECU Silver Mining Inc, an emerging Mexico-based silver producer that managed a workforce of 500 employees and operated two mills before the company was sold through a plan of arrangement transaction valued at over $300 million. He has a Bachelor of Mathematics degree from the University of Waterloo.",
    },
    {
      name: 'Joanne "Jo" Price',
      title: "Director",
      description:
        "Mr. Walker is a Chartered Professional Accountant with over 30 years of experience in finance and administration with the last 15 years in the mining sector. He has served as the Chief Financial Officer of several public companies. Mr. Walker was the CFO of ECU Silver Mining Inc, an emerging Mexico-based silver producer that managed a workforce of 500 employees and operated two mills before the company was sold through a plan of arrangement transaction valued at over $300 million. He has a Bachelor of Mathematics degree from the University of Waterloo.",
    },
    {
      name: "Lon Shaver",
      title: "Director & Audit Committee Chair",
      description:
        "Mr. Walker is a Chartered Professional Accountant with over 30 years of experience in finance and administration with the last 15 years in the mining sector. He has served as the Chief Financial Officer of several public companies. Mr. Walker was the CFO of ECU Silver Mining Inc, an emerging Mexico-based silver producer that managed a workforce of 500 employees and operated two mills before the company was sold through a plan of arrangement transaction valued at over $300 million. He has a Bachelor of Mathematics degree from the University of Waterloo.",
    },
  ];
  return (
    <>
      <Hero
        title="Management & Advisors"
        description="Experienced, technically-driven & fiscally prudent management applying a methodical approach to exploration using modern techniques and up-to-date deposit models."
        background="/images/management-bg.jpg"
      />
      <div className="px-4 md:px-24 bg-deep font-primary pt-12">
        <h1 className="text-xl md:text-2xl font-bold mb-8">
          Company Management
        </h1>
        <div className="flex flex-wrap">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              title={member.title}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Management;
