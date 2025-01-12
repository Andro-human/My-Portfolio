import { AnimatedTestimonials } from "./ui/animated-testimonials";
import blood from "../assets/blood-bank.jpeg";
import chat from "../assets/chat-app.png";
import image from "../assets/image-analyzer.png";
import mi from "../assets/mi-store.png";
import videoBee from "../assets/videoBee.png";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Boond is a web app built with Node.js and React to simplify blood donation and inventory management, featuring AI-driven predictive analytics for demand forecasting.",
      name: "Boond",
      designation: "Blood Bank System with Predictive Analytics",
      src: blood,
    },
    {
      quote:
        "Chit Chat is a chat application built using the MERN stack, with real-time communication via Socket.io and emotion detection using NLP for mood insights.",
      name: "Chit Chat",
      designation: "Chat App with Sentiment Analysis",
      src: chat,
    },
    {
      quote:
        "ImageVue is built upon Next.js and MUI for efficient image analysis, integrating Google’s Gemini API for improved content recognition and added related keywords to enhance user engagement.",
      name: "ImageVue",
      designation: "Image Visualizer",
      src: image,
    },
    {
      quote:
        "Built VideoBee, a video player app with ExoPlayer for smooth playback, Glide for image loading, and efficient local storage management for video browsing and navigation.",
      name: "VideoBee",
      designation: "Video Player Application",
      src: videoBee,
    },
    {
      quote:
        "Built a Xiaomi Mi Store clone with React, React Router DOM, and Bootstrap, featuring modular components and an interactive product slider.",
      name: "Mi Store Clone",
      designation: "",
      src: mi,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
