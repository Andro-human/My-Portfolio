import { AnimatedTestimonials } from "./ui/animated-testimonials";
import blood from "../assets/bloodbank/dp.jpeg";
import chat from "../assets/ChatApp/dp.png";
import image from "../assets/imageVue/dp.png";
import mi from "../assets/miStore/dp.png";
import videoBee from "../assets/videoBee/dp.png";
import peakly from "../assets/peakly/dp.png";
export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Peakly is a decentralized platform where users can create and participate in predictions on real-world events, leveraging blockchain technology for transparency and security.",
      name: "Peakly",
      designation: "Decentralized Wagering Platform",
      src: peakly,
      data: [
        "• Developed a decentralized block-chain based platform that allows users to participate in, create, and wager on any real-world topic.",
        "• Built a responsive and interative frontend with Next.js, Tailwind CSS, Accentinity UI, ensuring a modern and accessible user interface.",
        "• Tested blockchain functionalities with Remix IDE and successfully deployed it on Vercel and ThirdWeb.",
      ],
      live: "https://peakly.animeshsinha.dev/",
      github: "https://github.com/Andro-human/Peakly",
    },
    {
      quote:
        "Boond is a web app built with Node.js and React to simplify blood donation and inventory management, featuring AI-driven predictive analytics for demand forecasting.",
      name: "Boond",
      designation: "Blood Bank System with Predictive Analytics",
      src: blood,
      data: [
        "• Engineered a comprehensive blood donation and inventory management application using the MERN stack.",
        "• Implemented 4 distinct user roles (Donor, Organization, Hospital, Admin) to accommodate user needs.",
        "• Integrated AI-driven predictive analysis to forecast blood demand, potentially reducing inventory wastage.",
        "• Designed and implemented RESTful APIs, reducing server response time by 15% and enhancing user experience.",
        "Tech Stack - MongoDb | Express.js | React.js | Node.js | Redux | Postman",
      ],
      live: "https://blood-bank.animeshsinha.dev/",
      github: "https://github.com/Andro-human/Blood-Bank-Application",
    },
    {
      quote:
        "Chit Chat is a chat application built using the MERN stack, with real-time communication via Socket.io and emotion detection using NLP for mood insights.",
      name: "Chit Chat",
      designation: "Chat App with Sentiment Analysis",
      src: chat,
      data: [
        "• Built a responsive and interactive chat app using the MERN stack and MUI library, serving 50+ users.",
        "• Engineered real-time communication features using Socket.io that facilitated instant message delivery among users.",
        "• Integrated Cloudinary for user profile storage, enabling faster loads and improved app performance.",
        "• Implemented Redux for state management, including Redux RTK Query for efficient data fetching and caching.",
        "Tech Stack - React.js | MUI | Node.js | Express.js | MongoDb | Cloudinary | Redux | Postman",
      ],
      live: "https://chat-app.animeshsinha.dev/",
      github: "https://github.com/Andro-human/Mern-Chat-Application",
    },
    {
      quote:
        "ImageVue is built upon Next.js and MUI for efficient image analysis, integrating Google’s Gemini API for improved content recognition and added related keywords to enhance user engagement.",
      name: "ImageVue",
      designation: "Image Visualizer",
      src: image,
      data: [
        "• Designed an Image Visualizer with Next.js and MUI, providing a fast and responsive interface for efficient image analysis, while reducing UI development time by 60%.",
        "• Leveraged Google’s Gemini API to fetch accurate image descriptions, improving content recognition.",
        "• Incorporated related keywords and questions for images to enhance context and boost user engagement.",
        "Tech Stack - Next.js | MUI | Js | Google’s Gemini API",
      ],
      live: "https://imagevue.animeshsinha.dev/",
      github: "https://github.com/Andro-human/ImageVue",
    },
    {
      quote:
        "Built VideoBee, a video player app with ExoPlayer for smooth playback, Glide for image loading, and efficient local storage management for video browsing and navigation.",
      name: "VideoBee",
      designation: "Video Player Application",
      src: videoBee,
      data: [
        "• VideoBee is a video player app that utilizes the ExoPlayer library to implement smooth and seamless video playback.",
        "• Enhanced user interface with Glide library for optimized image loading.",
        "• Implemented two intuitive fragments - Video and Folder - for easy video browsing and folder navigation.",
        "• Efficiently managed data retrieval from local storage using a cursor and adapter for seamless video organization and presentation.",
        "Tech Stack - Kotlin | Git | Android Studio",
      ],
      github: "https://github.com/Andro-human/VideoBee",
    },
    {
      quote:
        "Built a Xiaomi Mi Store clone with React, React Router DOM, and Bootstrap, featuring modular components and an interactive product slider.",
      name: "Mi Store Clone",
      designation: "",
      src: mi,
      data: [
        "• Developed a fully functional clone of the Xiaomi Mi Store from 2021 using React and its various components, including React Router DOM, Links, and Routes.",
        "• Achieved code reusability by breaking down complex functionalities into modular components.",
        "• Integrated Bootstrap to create a visually appealing and interactive slider component, enhancing the user experience by showcasing featured products in an engaging and user-friendly manner.",
        "Tech Stack - Html | Css | Js | React | Bootstrap",
      ],
      live: "https://mi-store.animeshsinha.dev/",
      github: "https://github.com/Andro-human/mi-store-clone",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
