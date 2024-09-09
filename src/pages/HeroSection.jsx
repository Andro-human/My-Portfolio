import { Box, Button, Grid2, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f8f8f8",
      }}
    >
      {/* Name Header */}
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: 2,
          fontFamily: "'Josefin Sans', Arial, sans-serif",
          color: "rgb(89, 75, 89)",

          fontSize: {
            xs: "28px",
            md: "38px",
          },
          margin: "1rem",
          //   fontWeight: "500"
        }}
      >
        Animesh Sinha
      </Typography>

      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row"
          },
        
          alignItems: "center",
          width: "100%",
           height: {
                xs: "91vh",
                sm: "auto",
            },
        //   height: "auto"
        //   height: "100vh"
        }}
      >
        {/* Image Section */}
        <Grid2
          sm={6}
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            height: {
                xs: "10rem",
                sm: "30rem",
            }
            // height: "30rem"
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
        </Grid2>

        {/* Text Section */}
        <Grid2
          sm={6}
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            // height: {
            //     xs: "10rem",
            //     sm: "30rem",
            // },
            height: "30rem",
            backgroundColor: "rgb(22, 22, 22)",
            color: "white",
          }}
        >
          <Typography
            variant="h3"
            sx={{
            //   marginBottom: "1rem",
              fontFamily: "'Righteous', serif, system-ui",
              padding: "1rem",
              fontSize: {
                xs: "40px",
                md: "48px",
                // md: "28px"
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
        </Grid2>
      </Box>
    </Box>
  );
};

export default HeroSection;
