import { Box } from "@mui/material";
import { TypewriterEffectSmoothDemo } from "../components/TypeWriter";
import { BackgroundBeamsWithCollisionDemo } from "../components/BackgroundBeams";
import { FloatingNavDemo } from "../components/FloatingNav";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TypewriterEffectSmoothDemo />
      <FloatingNavDemo />

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },

          alignItems: "center",
          width: "100%",
          height: {
            xs: "85vh",
            sm: "auto",
          },
        }}
      >
        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            height: {
              xs: "10rem",
              sm: "30rem",
            },
          }}
        >
          <img
            src="https://img1.wsimg.com/isteam/ip/a13e352a-6035-4b18-a5f1-a63b97b07c5e/IMG20231108173843.jpg/:/rs=w:1920,m"
            alt="Animesh Sinha"
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        <BackgroundBeamsWithCollisionDemo />
      </Box>
    </Box>
  );
};

export default HeroSection;
