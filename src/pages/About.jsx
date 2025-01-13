import { Box, Typography } from "@mui/material";
import { ThreeDCardDemo } from "../components/threeDCard";

const About = () => {
  const contentArray = [
    {
      heading: "Education",
      subheading: "BTech in Computer Science and Engineering (AI)",
      image: "college", // Replace with the actual image URL
      body: [
        " • With a degree in Computer Science, I grasped the knowledge of core subjects coupled with practical experience in full-stack web development and front-end app development.",
        "• In addition to my practical experience, I have honed my coding skills by solving 500+ problems across various platforms and participating in various hackathons and coding competitions",
      ],
    },
    {
      heading: "Work Experience",
      subheading: "Stellar Code",
      image: "stellar", // Replace with the actual image URL
      body: [
        "• Developed full-stack web applications using React, Express, Node.js, AWS DynamoDB and ECS, for Web3 projects, including Dapps and DAOs.",
        "• Enhanced Pepe’s Frogbar, a Telegram game with over 1 million users, by building APIs, creating database tables, adding features, and addressing security vulnerabilities.",
        "• Executed a project with Kraftin Tech to integrate the SanityCDN architecture, reducing load times by up to 30% and increasing overall site performance metrics.",
      ],
    },
    {
      heading: "Skills",
      subheading: " ",
      image: "skills",
      body: [
        "• I am Proficient in C/C++, Python. Skilled in front-end technologies (HTML, CSS, JavaScript, React) and Kotlin for app development.",
        "• Back-end technologies (SQL, MongoDB, Node.js, Express), with additional competence in algorithms, Android Studio, and Git.",
      ],
    },
  ];

  return (
    <Box
    id="about"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        margin: "1rem 0",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "rgb(89, 75, 89)",
          fontSize: {
            xs: "28px",
            sm: "38px",
            md: "45px",
          },
          fontWeight: "400",
          fontFamily: "'Righteous', serif, system-ui",
          margin: "2.5rem",
          letterSpacing: "4px",
        }}
      >
        ABOUT
      </Typography>
      <Box sx={{ display: "flex" }}>
        {contentArray.map((content, index) => (
          <ThreeDCardDemo
            key={index}
            heading={content.heading}
            subheading={content.subheading}
            image={content.image}
            body={content.body}
          />
        ))}
      </Box>
    </Box>
  );
};

export default About;
