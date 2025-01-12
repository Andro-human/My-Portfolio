import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { Box, Button, Typography } from "@mui/material";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    (<BackgroundBeamsWithCollision>
      <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            height: "30rem",
            backgroundColor: "rgb(22, 22, 22)",
            color: "white",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'Righteous', serif, system-ui",
              padding: "1rem",
              fontSize: {
                xs: "40px",
                md: "48px",
              },
            }}
          >
            FULL STACK WEB DEVELOPMENT
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 4,
              fontFamily: "'Josefin Sans', Arial, sans-serif",
              color: "rgb(169, 169, 169)",
              fontSize: "22px",
              padding: "1rem",
            }}
          >
            Applications that make an impact in the real world.
          </Typography>
          <Button
            variant="contained"
            href="#projects"
            sx={{
              backgroundColor: "#ffffff",
              color: "#000000",
              height: "4rem",
              width: {
                sm: "8rem",
                md:"10rem",
              },
              fontWeight: 600,
              cursor: "pointer",
              fontSize: {
                xs: "14px",
                md: "18px",
              },
              borderRadius: "0px",
              fontFamily: "'Josefin Sans', Arial, sans-serif",
              margin: "1rem 0",
              "&:hover": {
                backgroundColor: "rgba(255,255,255, 0.75)"
              }
            }}
          >
            MY WORK
          </Button>
        </Box>
    </BackgroundBeamsWithCollision>)
  );
}
