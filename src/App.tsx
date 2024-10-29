import About from "./components/About";
import Hero from "./components/Hero";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Hero
          title="Exploring for Ontario’s next Gold Mine"
          background="/images/hero1.jpg"
        />
      </Layout>
    </>
  );
}

export default App;
