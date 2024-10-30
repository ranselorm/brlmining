import About from "./components/About";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import News from "./components/News";

function App() {
  return (
    <>
      <Layout>
        {/* <Hero
          title="Exploring for Ontario’s next Gold Mine"
          background="/images/hero1.jpg"
          button={true}
          mainPage={true}
        />
        <News /> */}
        <About />
      </Layout>
    </>
  );
}

export default App;
