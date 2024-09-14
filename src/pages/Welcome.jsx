import { Box, Button, Typography } from "@mui/material";

const Welcome = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f6f6f6",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        padding: "3rem 0",
        margin: "2rem 0",
        // justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          // margin: "24px",
          color: "rgb(21, 21, 21)",
          fontSize: {
            xs: "22px",
            md: "26px",
          },
          margin: "0 0 1rem 0",
          fontFamily: "'Josefin Sans', Arial, sans-serif",
        }}
      >
        Welcome to My Website
      </Typography>
      <Typography
        align="center"
        sx={{
          color: "rgb(87, 87, 87)",
          fontSize: {
            xs: "16px",
            md: "20px",
          },
          margin: "0.5rem 0 1rem 0",
          fontFamily: "'Josefin Sans', Arial, sans-serif",
        }}
      >
        Explore my work in web development and app development.
      </Typography>
      <Button
        variant="contained"
        href="https://www.linkedin.com/in/animeshsinha13/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          backgroundColor: "#000000",
          fontFamily: "'Josefin Sans', Arial, sans-serif",
          fontWeight: "600",
          borderRadius: "0",
          width: "12rem",
          height: "3.5rem",
          fontSize: {
            // xs: "0.8rem",
            sm: "1rem",
          },
          "&:hover": {
            color: "black",
            backgroundColor: "rgb(200, 200, 200)",
          },
        }}
      >
        FIND OUT MORE
      </Button>
    </Box>
  );
};

export default Welcome;
