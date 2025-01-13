import { Box, Typography } from "@mui/material";
import { FloatingDockDemo } from "../components/FloatingDock.jsx";


const Connect = () => {
  return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          marginTop: "3rem",
          marginBottom: "2rem",
          zIndex: 100000
        }}
      >
        {/* <BackgroundLinesDemo /> */}
        <Typography
          sx={{
            // margin: "24px",
            color: "rgb(89, 75, 89)",
            fontSize: {
              xs: "28px",
              md: "40px",
            },
            fontFamily: "'Righteous', serif, system-ui",
            letterSpacing: "4px",
          }}
        >
          CONNECT WITH ME!
        </Typography>
        <FloatingDockDemo />

      </Box>
  );
};

export default Connect;
