import { Box, Typography } from "@mui/material";
import { LinkPreviewDemo } from "../components/LinkPreview";

const Achievements = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f6f6f6",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        padding: "2rem 0",
        margin: "2rem 0",
        // justifyContent: "center",
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
          • Led team ”4BITS” to clinch the{" "}

          <LinkPreviewDemo word="first" url="https://www.linkedin.com/feed/update/urn:li:activity:7138107888383787008/" />
          {" "} at SRIJAN Quizathon organised by JAIPURIA Institute.
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
          • Solved <b>800+</b> problems across all coding platforms.
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
          • Attained a max rating of <b>1804</b> on <LinkPreviewDemo word="Leetcode" url="https://leetcode.com/u/Androhuman/" /> and <b>1656</b> on <LinkPreviewDemo word="Codechef" url="https://www.codechef.com/users/andro_human" /> and a
          5* rating on HackerRank.
        </Typography>
      </Box>
    </Box>
  );
};

export default Achievements;
