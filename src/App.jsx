import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./pages/HeroSection";
import Circle from "./components/ui/Circle";
import { useMediaQuery, useTheme } from "@mui/material";
import Welcome from "./pages/Welcome";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Connect from "./pages/Connect";
import Footer from "./pages/Footer";
import { TimelineDemo } from "./pages/Timeline";
import SkillsSection from "./pages/Skills";
import Certifications from "./pages/Certifications";

function App() {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              {isLg && <Circle />}
              <TimelineDemo />
              {/* <About /> */}
              <Welcome />
              <Projects />
              <SkillsSection />
              <Achievements />
              <Certifications />
              <Connect />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
