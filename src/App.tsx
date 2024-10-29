import About from "./components/About";
import Button from "./components/Button";
import Hero from "./components/Hero";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Hero
          title="Exploring for Ontario’s next Gold Mine"
          background="/images/hero1.jpg"
          button={true}
        />
      </Layout>
    </>
  );
}

export default App;
