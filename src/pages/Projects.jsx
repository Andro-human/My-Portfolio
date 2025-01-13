import {
  Box,
  Typography,
} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../Swiper.css";
import { AnimatedTestimonialsDemo } from "../components/CardCarousel";

// const CustomCard = styled(Card)({
//   margin: "2rem 0rem",
//   transition: "all 0.5s",
//   cursor: "pointer",
//   width: "100%",
//   backgroundColor: "#f6f6f6",
//   borderRadius: "0",
//   padding: "0",
//   "&:hover": {
//     transform: "translateX(-0.4vmax) translateY(-0.4vmax)",
//     boxShadow: "0px 6px 15px rgba(53, 53, 53,  0.363)",
//   },
// });

const CardSlider = () => {
  return (
    <Box
      id="projects"
      sx={{
        padding: 2,
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          color: "rgb(89, 75, 89)",
          fontFamily: "'Righteous', serif, system-ui",
          marginTop: "1rem",
        }}
      >
        PROJECTS
      </Typography>
        <AnimatedTestimonialsDemo />

    </Box>
  );
};

export default CardSlider;
