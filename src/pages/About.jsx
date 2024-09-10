import { Avatar, Box, Typography } from "@mui/material";
import college from "../assets/college.jpeg";
import shrinik from "../assets/shrinik.jpeg";
import skills from "../assets/skills.webp";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
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

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            "@media (min-width: 800px)": {
              flexDirection: "row",
            },
            md: "row",
          },
          width: {
            xs: "95%",
            lg: "85%",
          },
        }}
      >
        {/* Education Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            backgroundColor: "#f6f6f6",
            padding: "2%",
            margin: "10px",
            transition: "all 0.5s",
            cursor: "pointer",
            "&:hover": {
              transform: "translateY(-0.4vmax)",
              boxShadow: "0px 6px 15px rgba(53, 53, 53,  0.363)",
            },
          }}
        >
          <Avatar
            src={college}
            alt="Education Image"
            sx={{
              width: {
                xs: "300px",
                lg: "350px",
                "@media (min-width: 800px) and (max-width: 1000px)": {
                  width: "200px",
                },
              },
              height: {
                xs: "300px",
                "@media (min-width: 800px) and (max-width: 1000px)": {
                  height: "200px",
                },
                lg: "350px",
              },
              margin: "1rem 0",
            }}
          />
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "400",
              fontSize: {
                xs: "28px",
                sm: "34px",
                md: "38px",
              },
              color: "rgb(89, 75, 89)",
              fontFamily: "'Josefin Sans', Arial, sans-serif",
            }}
          >
            Education
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontWeight: "600",
              fontFamily: "'Josefin Sans', Arial, sans-serif",
              fontSize: {
                xs: "15px",
                sm: "18px",
              },
              color: "rgb(94, 94, 94)",
              lineHeight: "1.5",
              letterSpacing: "normal",
            }}
          >
            Bachelor of Technology in Computer Science and Engineering (AI){" "}
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{
              display: "block",
              margin: "1em 0",
              color: "rgb(94, 94, 94)",
              fontWeight: "400",
              lineHeight: "1.5",
              wordWrap: "break-word",
              fontSize: {
                xs: "15px",
                sm: "17px",
              },
              fontFamily: "'Josefin Sans', Arial, sans-serif",
            }}
          >
            • With a degree in Computer Science, I grasped the knowledge of core
            subjects coupled with practical experience in full-stack web
            development and front-end app development.
          </Typography>
          <Typography
            sx={{
              display: "block",
              margin: "1em 0",
              color: "rgb(94, 94, 94)",
              fontWeight: "400",
              lineHeight: "1.5",
              wordWrap: "break-word",
              fontSize: {
                xs: "15px",
                sm: "17px",
              },
              fontFamily: "'Josefin Sans', Arial, sans-serif",
            }}
          >
            • In addition to my practical experience, I have honed my coding
            skills by solving 500+ problems across various platforms and
            participating in various hackathons and coding competitions{" "}
          </Typography>
        </Box>

        {/* Work Experience Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            backgroundColor: "#f6f6f6",
            padding: "2%",
            margin: "10px",
            transition: "all 0.5s",
            cursor: "pointer",
            "&:hover": {
              transform: "translateY(-0.4vmax)",
              boxShadow: "0px 6px 15px rgba(53, 53, 53,  0.363)",
            },
          }}
        >
          <Avatar
            src={shrinik}
            alt="Work Experience Image"
            sx={{
              width: {
                xs: "300px",
                lg: "350px",
                "@media (min-width: 800px) and (max-width: 1000px)": {
                  width: "200px",
                },
              },
              height: {
                xs: "300px",
                "@media (min-width: 800px) and (max-width: 1000px)": {
                  height: "200px",
                },
                lg: "350px",
              },
              margin: "1rem 0",
            }}
          />
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "400",
              fontSize: {
                xs: "28px",
                sm: "34px",
                md: "38px",
              },
              color: "rgb(89, 75, 89)",
              fontFamily: "'Josefin Sans', Arial, sans-serif",
              letterSpacing: "normal",
            }}
          >
            {" "}
            Work Experience
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontWeight: "600",
              fontFamily: "'Josefin Sans', Arial, sans-serif",
              fontSize: {
                xs: "18px",
                sm: "20px",
              },
              color: "rgb(94, 94, 94)",
              lineHeight: "1.5",
              letterSpacing: "normal",
              marginTop: "0.8em",
            }}
          >
            {" "}
            Shrinik Club
          </Typography>
          <Typography
            sx={{
              display: "block",
              margin: "1em 0",
              color: "rgb(94, 94, 94)",
              fontWeight: "400",
              lineHeight: "1.5",
              wordWrap: "break-word",
              fontSize: {
                xs: "15px",
                sm: "17px",
              },
              fontFamily: "'Josefin Sans', Arial, sans-serif",
            }}
          >
            {" "}
            • Successfully organized and executed tech and gaming event for the
            Shrink Club, attracting an impressive gathering of 250+
            participants.
          </Typography>
          <Typography
            sx={{
              display: "block",
              margin: "1em 0",
              color: "rgb(94, 94, 94)",
              fontWeight: "400",
              lineHeight: "1.5",
              wordWrap: "break-word",
              fontSize: {
                xs: "15px",
                sm: "17px",
              },
              fontFamily: "'Josefin Sans', Arial, sans-serif",
            }}
          >
            {" "}
            • Created and distributed certificates to 30+ event participants,
            recognizing their achievements and adding value to the overall event
            experience.
          </Typography>
          <Typography
            sx={{
              display: "block",
              margin: "1em 0",
              color: "rgb(94, 94, 94)",
              fontWeight: "400",
              lineHeight: "1.5",
              wordWrap: "break-word",
              fontSize: {
                xs: "15px",
                sm: "17px",
              },
              fontFamily: "'Josefin Sans', Arial, sans-serif",
            }}
          >
            {" "}
            • Contributed to event planning and execution, including
            coordinating logistics, setting up equipment, and ensuring a smooth
            event flow
          </Typography>
        </Box>

        {/* Skills Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: 1,
            backgroundColor: "#f6f6f6",
            padding: "2%",
            margin: "10px",
            transition: "all 0.5s",
            cursor: "pointer",
            "&:hover": {
              transform: "translateY(-0.4vmax)",
              boxShadow: "0px 6px 15px rgba(53, 53, 53,  0.363)",
            },
          }}
        >
          <Avatar
            src={skills}
            alt="Skills Image"
            sx={{
              width: {
                xs: "300px",
                lg: "350px",
                "@media (min-width: 800px) and (max-width: 1000px)": {
                  width: "200px",
                },
              },
              height: {
                xs: "300px",
                "@media (min-width: 800px) and (max-width: 1000px)": {
                  height: "200px",
                },
                lg: "350px",
              },
              margin: "1rem 0",
            }}
          />
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: "400",
              fontSize: {
                xs: "28px",
                sm: "34px",
                md: "38px",
              },
              color: "rgb(89, 75, 89)",
              fontFamily: "'Josefin Sans', Arial, sans-serif",
            }}
          >
            {" "}
            Skills
          </Typography>
          <Typography
            sx={{
              display: "block",
              margin: "2em 0",
              color: "rgb(94, 94, 94)",
              fontWeight: "400",
              lineHeight: "1.5",
              wordWrap: "break-word",
              fontSize: {
                xs: "15px",
                sm: "17px",
              },
              fontFamily: "'Josefin Sans', Arial, sans-serif",
            }}
          >
            {" "}
            • I am Proficient in C/C++, Python. Skilled in front-end
            technologies (HTML, CSS, JavaScript, React) and Kotlin for app
            development.
          </Typography>
          <Typography
            sx={{
              display: "block",
              margin: "1em 0",
              color: "rgb(94, 94, 94)",
              fontWeight: "400",
              lineHeight: "1.5",
              wordWrap: "break-word",
              fontSize: {
                xs: "15px",
                sm: "17px",
              },
              fontFamily: "'Josefin Sans', Arial, sans-serif",
            }}
          >
            {" "}
            • Back-end technologies (SQL, MongoDB, Node.js, Express), with
            additional competence in algorithms, Android Studio, and Git.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
