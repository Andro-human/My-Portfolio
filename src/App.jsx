import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./pages/HeroSection";
import Circle from "./pages/circle";
import About from './pages/About';
import { useMediaQuery, useTheme } from "@mui/material";

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
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
