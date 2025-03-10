import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: {
          xs: "1rem",
          sm: "2rem",
        },
      }}
    >
      <Typography
        sx={{
          color: "rgb(226, 226, 226)",
          fontSize: {
            xs: "17px",
            md: "20px",
          },
          margin: "1rem",
          fontFamily: "'Josefin Sans', Arial, sans-serif",
        }}
      >
        Animesh Portfolio
      </Typography>
      <Typography
        sx={{
          color: "rgb(145, 145, 145)",
          marginBottom: "1rem",
          fontSize: {
            xs: "17px",
            md: "20px",
          },
          fontFamily: "'Josefin Sans', Arial, sans-serif",
        }}
      >
        Copyright © 2025 Animesh Sinha - All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
