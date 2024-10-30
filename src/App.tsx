import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutPage from "./pages/About";
import Layout from "./components/Layout";
import InvestorCentre from "./pages/InvestorCentre";
import NewsRoom from "./pages/NewsRoom";
import Contact from "./pages/Contact";
import GoldStandard from "./pages/GoldStandard";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/gold-standard" element={<GoldStandard />} />
          <Route path="/investor-centre" element={<InvestorCentre />} />
          <Route path="/newsroom" element={<NewsRoom />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
