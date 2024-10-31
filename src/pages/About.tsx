import { useEffect } from "react";
import About from "../components/About";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <About />
    </>
  );
};

export default AboutPage;
