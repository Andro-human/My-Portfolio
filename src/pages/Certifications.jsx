import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaDownload,
} from "react-icons/fa";
import { Typography } from "@mui/material";

const certifications = [
  {
    title: "The Web Developer Bootcamp",
    issuer: "Udemy",
    date: "Sept 2024",
    link: "https://www.udemy.com/certificate/UC-133beb1d-a40f-4ab7-b0e8-d69c35508520/",
  },
  {
    title: "Introduction to Android Mobile Application Development ",
    issuer: "Coursera",
    date: "Nov 2022",
    link: "https://coursera.org/verify/ZPRE7NAR9QDM",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "FreeCodeCamp",
    date: "Aug 2023",
    link: "https://freecodecamp.org/certification/Androhuman/javascript-algorithms-and-data-structures",
  },
  {
    title: "An Introduction to Programming Through C++ ",
    issuer: "NPTEL",
    date: "May 2022",
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS42S3342023802039714",
  },
  {
    title: "Version Control",
    issuer: "Coursera",
    date: "Feb 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/K9KSCF5CGV5G",
  },
  {
    title: "Algorithmic Toolbox",
    issuer: "Coursera",
    date: "Jan 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/S5HNTE4ZX58D",
  },
  {
    title: "Programming Fundamentals in Kotlin ",
    issuer: "Coursera",
    date: "Apr 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/LHHH3G6LPEYN",
  },
];
// fontFamily: "'Righteous', serif, system-ui",
export default function Certifications() {
  return (
    <section className="py-8 bg-[#f6f6f6]" id="certifications">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <Typography
          sx={{
            color: "rgb(89, 75, 89)",
            fontSize: {
              xs: "28px",
              md: "40px",
            },
            fontFamily: "'Righteous', serif, system-ui",
            letterSpacing: "4px",
            margin: "1.5rem 0",
          }}
        >
          Certifications
        </Typography>
        <div className="relative">
          {/* Swiper container */}
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-10"
          >
            {certifications.map((cert, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white flex flex-col items-center justify-center text-center h-52 shadow-lg rounded-xl p-6 border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
                  <h3 className="text-xl font-semibold text-gray-900 ">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {cert.issuer} • {cert.date}
                  </p>
                  <div className="mt-4 flex justify-center gap-4">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                    >
                      <FaExternalLinkAlt /> View
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 z-10">
            <button className="prev-btn bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300 transition">
              <FaArrowLeft className="text-gray-700 " />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 z-10">
            <button className="next-btn bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300 transition">
              <FaArrowRight className="text-gray-700 " />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
