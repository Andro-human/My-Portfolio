import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDatabase,
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
      color: "text-orange-500",
      proficiency: SKILL_LEVELS.PROFICIENT,
    },
    {
      name: "Vercel",
      icon: <SiVercel />,
      color: "text-black",
      proficiency: SKILL_LEVELS.PROFICIENT,
    },
  ],
};

const getCategoryIcon = (category) => {
  switch (category) {
    case "languages":
      return "💻";
    case "frameworks":
      return "⚙️";
    case "databases":
      return "🗄️";
    case "tools":
      return "🔧";
    default:
      return "✨";
  }
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Skills & Technologies
        </h2>

        <div className="space-y-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="bg-white rounded-lg p-6 shadow-sm">
              {/* <div className="flex items-center gap-4"> */}
              {/* <span className="text-2xl">{getCategoryIcon(category)}</span> */}
              <h3 className="text-xl font-semibold capitalize text-gray-700 mb-4 border-b pb-2">
                {category} {getCategoryIcon(category)}
              </h3>
              {/* </div> */}

              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
                  >
                    <span className={`text-xl ${skill.color}`}>
                      {skill.icon}
                    </span>
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                    <span
                      className={`ml-1 px-2 py-0.5 text-xs text-white rounded-full ${skill.proficiency.color}`}
                    >
                      {skill.proficiency.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
