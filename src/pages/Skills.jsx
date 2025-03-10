import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaTypo3,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiRedux,
  SiTypescript,
  SiPostman,
  SiVercel,
  SiMysql,
} from "react-icons/si";
import { motion } from "framer-motion";
import { FaC, FaReacteurope } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";

const SKILL_LEVELS = {
  PROFICIENT: { label: "Proficient", color: "bg-red-500" },
  Intermediate: { label: "Intermediate", color: "bg-blue-500" },
  BASIC: { label: "Basic", color: "bg-green-500" },
};

const skillCategories = {
  languages: [
    {
      name: "C/C++",
      icon: <FaC />,
      color: "text-orange-500",
      proficiency: SKILL_LEVELS.PROFICIENT,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      color: "text-yellow-400",
      proficiency: SKILL_LEVELS.PROFICIENT,
    },
    {
      name: "Python",
      icon: <FaPython />,
      color: "text-blue-600",
      proficiency: SKILL_LEVELS.Intermediate,
    },
    {
      name: "SQL",
      icon: <SiMysql />,
      color: "text-blue-500",
      proficiency: SKILL_LEVELS.PROFICIENT,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      color: "text-blue-500",
      proficiency: SKILL_LEVELS.Intermediate,
    },
  ],
  frameworks: [
    {
      name: "React.js",
      icon: <FaReact />,
      color: "text-blue-500",
      proficiency: SKILL_LEVELS.PROFICIENT,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      color: "text-green-600",
      proficiency: SKILL_LEVELS.PROFICIENT,
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      color: "text-gray-700",
      proficiency: SKILL_LEVELS.Intermediate,
    },
    {
      name: "NEXT.js",
      icon: <FaReacteurope />,
      color: "text-blue-500",
      proficiency: SKILL_LEVELS.Intermediate,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "text-blue-400",
      proficiency: SKILL_LEVELS.Intermediate,
    },
    {
      name: "Redux",
      icon: <SiRedux />,
      color: "text-blue-400",
      proficiency: SKILL_LEVELS.Intermediate,
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: <FaDatabase />,
      color: "text-blue-500",
      proficiency: SKILL_LEVELS.PROFICIENT,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      color: "text-green-500",
      proficiency: SKILL_LEVELS.Intermediate,
    },
  ],
  tools: [
    {
      name: "Git/Github",
      icon: <FaGitAlt />,
      color: "text-red-500",
      proficiency: SKILL_LEVELS.PROFICIENT,
    },
    {
      name: "Postman",
      icon: <SiPostman />,
      color: "text-red-500",
      proficiency: SKILL_LEVELS.PROFICIENT,
    },
    {
      name: "Vercel",
      icon: <SiVercel />,
      color: "text-red-500",
      proficiency: SKILL_LEVELS.PROFICIENT,
    },
  ],
};

const SkillsSection = () => {
  return (
    <section className="py-16 bg-[#f6f6f6]" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-600  max-w-2xl mx-auto">
            A showcase of my technical skills and proficiency levels
          </p>
        </motion.div>

        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 capitalize">
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`text-3xl ${skill.color}`}>
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {skill.name}
                        </h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium text-white ${skill.proficiency.color}`}
                        >
                          {skill.proficiency.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
