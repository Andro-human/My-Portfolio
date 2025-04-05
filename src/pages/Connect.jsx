import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  SiLeetcode,
  SiCodechef,
  SiHackerrank,
  SiCodeforces,
} from "react-icons/si";
import { motion } from "framer-motion";
import { LinkPreviewDemo } from "../components/LinkPreview";

const Connect = () => {
  const socialLinks = [
    {
      name: "Email",
      icon: <FaEnvelope className="text-red-500" />,
      description: "Get in touch",
      url: "mailto:hey.animeshsinha@gmail.com",
      color: "bg-red-100 hover:bg-red-200",
      textColor: "text-red-700",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-800" />,
      description: "Explore my work",
      url: "https://github.com/Andro-human",
      color: "bg-gray-100 hover:bg-gray-200",
      textColor: "text-gray-800",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-blue-600" />,
      description: "Connect with me",
      url: "https://www.linkedin.com/in/androhuman/",
      color: "bg-blue-100 hover:bg-blue-200",
      textColor: "text-blue-700",
    },
  ];

  const codingLinks = [
    {
      name: "LeetCode",
      icon: <SiLeetcode className="text-amber-600" />,
      url: "https://leetcode.com/u/Androhuman/",
      description: "@Knight (1863 Top 5%), 750+ problems solved",
      color: "bg-amber-100 hover:bg-amber-200",
      textColor: "text-amber-700",
    },
    {
      name: "CodeChef",
      icon: <SiCodechef className="text-brown-600" />,
      url: "https://www.codechef.com/users/andro_human",
      description: "Div 2 (1656 max rating), 200+ problems solved",
      color: "bg-amber-50 hover:bg-amber-100",
      textColor: "text-amber-800",
    },
    {
      name: "HackerRank",
      icon: <SiHackerrank className="text-green-600" />,
      url: "https://www.hackerrank.com/profile/Androhuman",
      description: "Gold level (problem solving), 80+ problems solved",
      color: "bg-green-100 hover:bg-green-200",
      textColor: "text-green-700",
    },
    {
      name: "CodeForces",
      icon: <SiCodeforces className="text-blue-500" />,
      url: "https://codeforces.com/profile/Androhuman",
      description: "Pupil (1200+ rating)",
      color: "bg-blue-50 hover:bg-blue-100",
      textColor: "text-blue-700",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b" id="contact">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          CONNECT WITH ME!
        </h2>

        <div className="grid gap-12 mb-16">
          {/* Professional Profiles */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-px bg-gray-800 flex-grow mr-4"></div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Professional Profiles
              </h3>
              <div className="h-px bg-gray-800 flex-grow ml-4"></div>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  href={link.url}
                  target="_blank"
                  key={index}
                  rel="noopener noreferrer"
                  className={`flex items-center p-6 rounded-lg shadow-md transition-all ${link.color} transform hover:scale-105`}
                  variants={itemVariants}
                >
                  <div className="text-3xl mr-4">{link.icon}</div>
                  <div>
                    <h4 className={`text-lg font-semibold ${link.textColor}`}>
                      {link.name}
                    </h4>
                    <p className="text-gray-600 text-sm font-bold">
                      {link.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Coding Profiles */}
          <div>
            <div className="flex items-center mb-6">
              <div className="h-px bg-gray-800 flex-grow mr-4"></div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Coding Profiles
              </h3>
              <div className="h-px bg-gray-800 flex-grow ml-4"></div>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {codingLinks.map((link, index) => (
                <LinkPreviewDemo url={link.url} key={index}>
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-6 rounded-lg shadow-md transition-all ${link.color} transform hover:scale-105`}
                    variants={itemVariants}
                  >
                    <div className="text-3xl mr-4">{link.icon}</div>
                    <div>
                      <h4 className={`text-lg font-semibold ${link.textColor}`}>
                        {link.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {link.description}
                      </p>
                    </div>
                  </motion.a>
                </LinkPreviewDemo>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
