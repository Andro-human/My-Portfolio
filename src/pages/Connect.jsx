import { Box, Link, Typography } from "@mui/material";
import GithubIcon from "../assets/svgFiles/GithubIcon.jsx";
import LinkedIn from "../assets/svgFiles/LinkedIn.jsx";
import X from "../assets/svgFiles/X.jsx";
import Leetcode from "../assets/svgFiles/Leetcode.jsx";
import CodeChef from "../assets/svgFiles/CodeChef.jsx";
import Hackerrank from "../assets/svgFiles/Hackerrank.jsx";
import MailIcon from "../assets/svgFiles/mailIcon.jsx";
import { BackgroundBoxesDemo } from "../components/BackgroundBoxes.jsx";
import { FloatingDockDemo } from "../components/FloatingDock.jsx";
import { BackgroundLinesDemo } from "../components/BackgroundLines.jsx";

const iconStyles = {
  cursor: "pointer",
  "&:hover": {
    transform: "translateY(-0.4vmax)",
  },
};

const Connect = () => {
  return (
    // <BackgroundBoxesDemo />
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

        {/* <Box
          sx={{
            display: "flex",
            marginTop: "2em",
            marginBottom: "1.5rem",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            gap: "1.5rem",
            // border: "2px solid red",
            height: "3rem",
          }}
        >
          <Link
            href="mailto:hey.animeshsinha@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={iconStyles}
          >
            <MailIcon />
          </Link>
          <Link
            href="https://github.com/Andro-human"
            target="_blank"
            rel="noopener noreferrer"
            sx={iconStyles}
          >
            <GithubIcon />{" "}
          </Link>
          <Link
            href="https://www.linkedin.com/in/animeshsinha13/"
            sx={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />{" "}
          </Link>
          <Link
            href="https://twitter.com/Andro_human"
            sx={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <X />{" "}
          </Link>
        </Box> */}

        {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            marginBottom: "2rem",
            // border: "2px solid red",
            gap: "1rem",
          }}
        >
          <Link
            href="https://leetcode.com/u/androhuman/"
            sx={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Leetcode />
          </Link>
          <Link
            href="https://www.codechef.com/users/andro_human"
            sx={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeChef />
          </Link>
          <Link
            href="https://www.hackerrank.com/profile/Androhuman"
            sx={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Hackerrank />
          </Link>
        </Box> */}
        {/* <BackgroundBoxesDemo /> */}
      </Box>
    // </BackgroundBoxesDemo>
  );
};

export default Connect;
