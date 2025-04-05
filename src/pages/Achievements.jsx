import { Box, Typography } from "@mui/material";

const Achievements = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        padding: "2rem 0",
        margin: "2rem 0",
      }}
    >
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
        ACHIEVEMENTS
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "1rem 0",
          width: "90%",
        }}
      >
        <Typography
          align="center"
          sx={{
            color: "rgb(87, 87, 87)",
            fontSize: {
              xs: "16px",
              md: "20px",
            },
            // margin: "0 1rem",
            fontFamily: "'Josefin Sans', Arial, sans-serif",
          }}
        >
          • Led team ”4BITS” to clinch the <b>first position</b> at SRIJAN
          Quizathon organised by JAIPURIA Institute.
        </Typography>
        <Typography
          align="center"
          sx={{
            color: "rgb(87, 87, 87)",
            fontSize: {
              xs: "16px",
              md: "20px",
            },
            // margin: "0 1rem",
            fontFamily: "'Josefin Sans', Arial, sans-serif",
          }}
        >
          • Solved <b>1000+</b> problems across all coding platforms.
        </Typography>
        <Typography
          align="center"
          sx={{
            color: "rgb(87, 87, 87)",
            fontSize: {
              xs: "16px",
              md: "20px",
            },
            // margin: "0 1rem",
            fontFamily: "'Josefin Sans', Arial, sans-serif",
          }}
        >
          • Attained a max rating of <b>1863</b> on Leetcode and <b>1656</b> on
          Codechef and a 5* rating on HackerRank.
        </Typography>
      </Box>
    </Box>
  );
};

export default Achievements;
