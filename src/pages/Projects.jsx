import {
  Box,
  Button,
  Card,
  CardContent,
  styled,
  Typography,
} from "@mui/material";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../Swiper.css"
import blood from '../assets/blood-bank.jpeg'
import chat from '../assets/chat-app.png'
import image from '../assets/image-analyzer.png'
import mi from '../assets/mi-store.png'
import videoBee from '../assets/videoBee.png'

const CustomCard = styled(Card)({
  margin: "2rem 0rem",
  transition: "all 0.5s",
  cursor: "pointer",
  width: "100%",
  backgroundColor: "#f6f6f6",
  borderRadius: "0",
  padding: "0",
  "&:hover": {
    transform: "translateX(-0.4vmax) translateY(-0.4vmax)",
    boxShadow: "0px 6px 15px rgba(53, 53, 53,  0.363)",
  },
});

const CardSlider = () => {
  return (
    <Box
    id="projects"
    sx={{
      padding: 2
    }}
  >
    <Typography
      variant="h4"
      align="center"
      sx={{
        color: "rgb(89, 75, 89)",
        fontFamily: "'Righteous', serif, system-ui",
        marginTop: "1rem"
      }}
    >
      PROJECTS
    </Typography>
   

      <Swiper 
        modules={[Autoplay, Pagination, Navigation, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 2,
          },
          1368: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <CustomCard>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                  fontWeight: "400",
                  fontSize: {
                    xs: "22px",
                    sm: "26px",
                    md: "30px",
                  },
                  marginTop: "1rem",
                  color: "rgb(27, 27, 27)",
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                Blood Bank
              </Typography>

              <Box
                component="img"
                src={blood}
                alt="Blood bank image"
                sx={{
                  width: {
                    xs: "370px",
                    // lg: "400px",
                  },
                  height: {
                    xs: "200px",
                    // lg: "250px",
                  },
                  margin: "1rem",
                  boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
                }}
              />

              <Typography
                variant="body2"
                align="center"
                sx={{
                  display: "block",
                  marginTop: "1rem",
                  marginBottom: "0.2rem",
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
                • Developed a MERN stack web application for efficient blood
                donation and inventory management.{" "}
              </Typography>
              <Typography
                align="center"
                sx={{
                  display: "block",
                  margin: "0.5rem 0",
                  color: "rgb(94, 94, 94)",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  // align: "center",
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                  },
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                • Implemented distinct user roles (Donor, Organization,
                Hospital, Admin) to streamline processes and responsibilities
                within the blood donation ecosystem.{" "}
              </Typography>
              <Typography
                align="center"
                sx={{
                  display: "block",
                  margin: "0.5rem 0",
                  color: "rgb(94, 94, 94)",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  // align: "center",
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                  },
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                • Ensured data security through robust user authentication
                mechanisms such as bcrypt for encryption, and JSON Web Token for
                secure login procedures.
              </Typography>
              <Typography
                align="center"
                sx={{
                  display: "block",
                  margin: "0.5rem 0",
                  color: "rgb(94, 94, 94)",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  // align: "center",
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                  },
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                • Leveraged various APIs such as Redux, Postman, and Axios for
                enhanced functionality and seamless communication.
              </Typography>
              <Typography
                align="center"
                sx={{
                  display: "block",
                  margin: "0.5rem 0",
                  color: "rgb(94, 94, 94)",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  // align: "center",
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                  },
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                • Tech Stack - MongoDb | Express.js | React.js | Node.js | Redux
                | Axios | Postman{" "}
              </Typography>
              <a
                href="https://blood-bank.animeshsinha.dev"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#000000",
                    fontFamily: "'Josefin Sans', Arial, sans-serif",
                    fontWeight: "600",
                    borderRadius: "0",
                    width: "12rem",
                    height: "3.5rem",
                    marginTop: {
                      xs: "1rem",
                      sm: "5rem",
                      md:"5rem",
                    },
                    marginBottom: "1rem",
                    fontSize: {
                      sm: "1rem",
                    },
                    "&:hover": {
                      color: "black",
                      backgroundColor: "rgb(200, 200, 200)",
                    },
                  }}
                >
                  View Project
                </Button>
              </a>
            </CardContent>
          </CustomCard>
        </SwiperSlide>
        <SwiperSlide>
          <CustomCard>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                  fontWeight: "400",
                  fontSize: {
                    xs: "22px",
                    sm: "26px",
                    md: "30px",
                    marginTop: "1rem",
                  },
                  color: "rgb(27, 27, 27)",
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                Chat App
              </Typography>
              <Box
                component="img"
                src={chat}
                alt="Chat App image"
                sx={{
                  width: {
                    xs: "370px",
                    // lg: "400px",
                  },
                  height: {
                    xs: "200px",
                    // lg: "250px",
                  },
                  margin: "1rem",
                  boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
                }}
              />

              <Typography
                variant="body2"
                align="center"
                sx={{
                  display: "block",
                  marginTop: "1rem",
                  marginBottom: "0.2rem",
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
                • Created a chat app using the MERN stack that is responsive and
                interactive making use of the MUI library.{" "}
              </Typography>
              <Typography
                align="center"
                sx={{
                  display: "block",
                  margin: "0.5rem 0",
                  color: "rgb(94, 94, 94)",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  // align: "center",
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                  },
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                • Implemented Real-time messaging using socket.io and utilized
                Cloudinary to store user profile pictures on the cloud.{" "}
              </Typography>
              <Typography
                align="center"
                sx={{
                  display: "block",
                  margin: "0.5rem 0",
                  color: "rgb(94, 94, 94)",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  // align: "center",
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                  },
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                • Enhanced data security by incorporating a login mechanism
                based on bcrypt, JSON Web Token and cookie-parser ensuring user
                privacy.
              </Typography>
              <Typography
                align="center"
                sx={{
                  display: "block",
                  margin: "0.5rem 0",
                  color: "rgb(94, 94, 94)",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  // align: "center",
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                  },
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                • Utilized Redux for state management, Axios to make APIs calls
                and Postman for testing and debugging.
              </Typography>
              <Typography
                align="center"
                sx={{
                  display: "block",
                  margin: "0.5rem 0",
                  color: "rgb(94, 94, 94)",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  // align: "center",
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                  },
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                Tech Stack - React.js | MUI | Node.js | Express.js | MongoDb |
                Cloudinary | Redux | Postman{" "}
              </Typography>

              <a
                href="https://chat-app.animeshsinha.dev"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#000000",
                    fontFamily: "'Josefin Sans', Arial, sans-serif",
                    fontWeight: "600",
                    borderRadius: "0",
                    width: "12rem",
                    height: "3.5rem",
                    marginTop: {
                      xs: "2.3rem",
                      sm: "3.7rem",
                      md:"6.5rem",
                    },
                    marginBottom: "1rem",
                    fontSize: {
                      sm: "1rem",
                    },
                    "&:hover": {
                      color: "black",
                      backgroundColor: "rgb(200, 200, 200)",
                    },
                  }}
                >
                  View Project
                </Button>
              </a>
            </CardContent>
          </CustomCard>
        </SwiperSlide>
        <SwiperSlide>
          <CustomCard>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                  fontWeight: "400",
                  fontSize: {
                    xs: "22px",
                    sm: "26px",
                    md: "30px",
                    marginTop: "1rem",
                  },
                  color: "rgb(27, 27, 27)",
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                Image Visualizer
              </Typography>
              <Box
                component="img"
                src={image}
                alt="Image Analyzer"
                sx={{
                  width: {
                    xs: "370px",
                    // lg: "400px",
                  },
                  height: {
                    xs: "200px",
                    // lg: "250px",
                  },
                  margin: "1rem",
                  boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"

                }}
              />

              <Typography
                variant="body2"
                align="center"
                sx={{
                  display: "block",
                  marginTop: "1rem",
                  marginBottom: "0.2rem",
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
                Designed an Image Visualizer with Next.js and MUI, offering a
                fast, responsive frontend for efficient image analysis.{" "}
              </Typography>
              <Typography
                align="center"
                sx={{
                  display: "block",
                  margin: "0.5rem 0",
                  color: "rgb(94, 94, 94)",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  // align: "center",
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                  },
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                Leveraged Google’s Gemini API to fetch accurate image
                descriptions, improving content recognition by up to 90%.{" "}
              </Typography>
              <Typography
                align="center"
                sx={{
                  display: "block",
                  margin: "0.5rem 0",
                  color: "rgb(94, 94, 94)",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  // align: "center",
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                  },
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                Provided related keywords and questions for each image to
                enhance context and boost user engagement by 40%.
              </Typography>
              <Typography
                align="center"
                sx={{
                  display: "block",
                  margin: "0.5rem 0",
                  color: "rgb(94, 94, 94)",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  // align: "center",
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                  },
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                • Tech Stack - Next.js | MUI | Js | Google’s Gemini API.
              </Typography>
              <Typography
                align="center"
                sx={{
                  display: "block",
                  margin: "0.5rem 0",
                  color: "rgb(94, 94, 94)",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  // align: "center",
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                  },
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                • Tech Stack - MongoDb | Express.js | React.js | Node.js | Redux
                | Axios | Postman{" "}
              </Typography>

              <a
                href="https://image-analyzer.animeshsinha.dev"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#000000",
                    fontFamily: "'Josefin Sans', Arial, sans-serif",
                    fontWeight: "600",
                    borderRadius: "0",
                    width: "12rem",
                    height: "3.5rem",
                    marginTop: {
                      xs: "5rem",
                      sm: "6.5rem",
                      md:" 9.7rem",
                    },
                    marginBottom: "1rem",
                    fontSize: {
                      sm: "1rem",
                    },
                    "&:hover": {
                      color: "black",
                      backgroundColor: "rgb(200, 200, 200)",
                    },
                  }}
                >
                  View Project
                </Button>
              </a>
            </CardContent>
          </CustomCard>
        </SwiperSlide>
        <SwiperSlide>
          <CustomCard>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                  fontWeight: "400",
                  fontSize: {
                    xs: "22px",
                    sm: "26px",
                    md: "30px",
                  },
                  marginTop: "1rem",
                  color: "rgb(27, 27, 27)",
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                VideoBee
              </Typography>
              <Box
                component="img"
                src={videoBee}
                alt="VideoBee Image"
                sx={{
                  width: {
                    xs: "370px",
                    // lg: "400px",
                  },
                  height: {
                    xs: "200px",
                    // lg: "250px",
                  },
                  margin: "1rem",
                  boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
                }}
              />

              <Typography
                variant="body2"
                align="center"
                sx={{
                  display: "block",
                  marginTop: "1rem",
                  marginBottom: "0.2rem",
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
                • VideoBee is a video player app that utilizes the ExoPlayer
                library to implement smooth and seamless video playback.{" "}
              </Typography>
              <Typography
                align="center"
                sx={{
                  display: "block",
                  margin: "0.5rem 0",
                  color: "rgb(94, 94, 94)",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  // align: "center",
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                  },
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                • Enhanced user interface with Glide library for optimized image
                loading.{" "}
              </Typography>
              <Typography
                align="center"
                sx={{
                  display: "block",
                  margin: "0.5rem 0",
                  color: "rgb(94, 94, 94)",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  // align: "center",
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                  },
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                • Implemented two intuitive fragments - Video and Folder - for
                easy video browsing and folder navigation.
              </Typography>
              <Typography
                align="center"
                sx={{
                  display: "block",
                  margin: "0.5rem 0",
                  color: "rgb(94, 94, 94)",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  // align: "center",
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                  },
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                • Efficiently managed data retrieval from local storage using a
                cursor and adapter for seamless video organization and
                presentation.
              </Typography>
              <Typography
                align="center"
                sx={{
                  display: "block",
                  margin: "0.5rem 0",
                  color: "rgb(94, 94, 94)",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  // align: "center",
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                  },
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                • Tech Stack - Kotlin | Git | Android Studio{" "}
              </Typography>

              <a
                href="https://github.com/Andro-human/VideoBee"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#000000",
                    fontFamily: "'Josefin Sans', Arial, sans-serif",
                    fontWeight: "600",
                    borderRadius: "0",
                    width: "12rem",
                    height: "3.5rem",
                    marginTop: {
                      xs: "5rem",
                      sm: "6.5rem",
                      md: "9.7rem",
                    },
                    marginBottom: "1rem",
                    fontSize: {
                      sm: "1rem",
                    },
                    "&:hover": {
                      color: "black",
                      backgroundColor: "rgb(200, 200, 200)",
                    },
                  }}
                >
                  View Project
                </Button>
              </a>
            </CardContent>
          </CustomCard>
        </SwiperSlide>

        <SwiperSlide>
          <CustomCard>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                  fontWeight: "400",
                  fontSize: {
                    xs: "22px",
                    sm: "26px",
                    md: "30px",
                  },
                  marginTop: "1rem",
                  color: "rgb(27, 27, 27)",
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                Mi Store Clone
              </Typography>
              <Box
                component="img"
                src={mi}
                alt="Mi-store image"
                sx={{
                  width: {
                    xs: "370px",
                    // lg: "400px",
                  },
                  height: {
                    xs: "200px",
                    // lg: "250px",
                  },
                  margin: "1rem",
                  boxShadow: "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
                }}
              />

              <Typography
                variant="body2"
                align="center"
                sx={{
                  display: "block",
                  marginTop: "1rem",
                  marginBottom: "0.2rem",
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
                • Developed a fully functional clone of the Xiaomi Mi Store from
                2021 using React and its various components, including React
                Router DOM, Links, and Routes.{" "}
              </Typography>
              <Typography
                align="center"
                sx={{
                  display: "block",
                  margin: "0.5rem 0",
                  color: "rgb(94, 94, 94)",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  // align: "center",
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                  },
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                • Achieved code reusability by breaking down complex
                functionalities into modular components.{" "}
              </Typography>
              <Typography
                align="center"
                sx={{
                  display: "block",
                  margin: "0.5rem 0",
                  color: "rgb(94, 94, 94)",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  // align: "center",
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                  },
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                • Integrated Bootstrap to create a visually appealing and
                interactive slider component, enhancing the user experience by
                showcasing featured products in an engaging and user-friendly
                manner.
              </Typography>
              <Typography
                align="center"
                sx={{
                  display: "block",
                  margin: "0.5rem 0",
                  color: "rgb(94, 94, 94)",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  wordWrap: "break-word",
                  // align: "center",
                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                  },
                  fontFamily: "'Josefin Sans', Arial, sans-serif",
                }}
              >
                • Tech Stack - Html | Css | Js | React | Bootstrap
              </Typography>

              <a
                href="https://mi-store.animeshsinha.dev"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#000000",
                    fontFamily: "'Josefin Sans', Arial, sans-serif",
                    fontWeight: "600",
                    borderRadius: "0",
                    width: "12rem",
                    height: "3.5rem",
                    marginTop: {
                      xs: "6rem",
                      sm: "7rem",
                      md: "12.3rem",
                    },
                    marginBottom: "1rem",
                    fontSize: {
                      sm: "1rem",
                    },
                    "&:hover": {
                      color: "black",
                      backgroundColor: "rgb(200, 200, 200)",
                    },
                  }}
                >
                  View Project
                </Button>
              </a>
            </CardContent>
          </CustomCard>
        </SwiperSlide>
        {/* Add more SwiperSlides as needed */}
      </Swiper>
    </Box>
  );
};

export default CardSlider;
