import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./pages/HeroSection";
import Circle from "./components/ui/Circle";
import About from './pages/About';
import { useMediaQuery, useTheme } from "@mui/material";
import Welcome from "./pages/Welcome";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Connect from "./pages/Connect";
import Footer from "./pages/Footer";

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
              <About />
              <Welcome />
              <Projects/>
              <Achievements />
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
