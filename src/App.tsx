import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutPage from "./pages/About";
import Layout from "./components/Layout";
import InvestorCentre from "./pages/InvestorCentre";
import NewsRoom from "./pages/NewsRoom";
import Contact from "./pages/Contact";
import ProjectRoutes from "./pages/ProjectRoutes";
import GoldStandard from "./pages/GoldStandard";
import Miminiska from "./pages/Miminiska";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/investor-centre" element={<InvestorCentre />} />
          <Route path="/newsroom" element={<NewsRoom />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project">
            <Route path="gold-standard" element={<GoldStandard />} />
            <Route path="miminiska" element={<Miminiska />} />
          </Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
