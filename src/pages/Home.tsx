import Hero from "../components/Hero";
import News from "../components/News";

const Home = () => {
  return (
    <>
      <Hero
        title="Exploring for Ontario’s next Gold Mine"
        background="/images/hero1.jpg"
        button={true}
        mainPage={true}
      />
      <News />
    </>
  );
};

export default Home;
