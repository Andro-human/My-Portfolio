import { Timeline } from "../components/ui/timeline";
import stellar from "../assets/about/stellarCode.png";
import college from "../assets/about/college.jpeg";
export function TimelineDemo() {
  const data = [
    {
      title: "Experience",
      content: (
        <div>
          <div className="flex items-center gap-6 mb-6">
            <img
              src="https://opslyft.com/assets/logos/opslyft.svg"
              alt="Opslyft"
              className="w-16 h-16 rounded-lg object-contain"
            />
            <div>
              <h3 className="text-neutral-800 text-3xl font-semibold">
                Opslyft
              </h3>
              <p className="text-neutral-600 text-lg">
                Software Developer Intern (Full Stack)
              </p>
              <p className="text-neutral-500 text-sm">Feb 2024 - Present</p>
            </div>
          </div>
          <div className="text-neutral-800 space-y-3 mb-12">
            <p>
              • Developed and maintained the frontend with React, TypeScript and
              Redux, fixing bugs and optimizing performance.
            </p>
            <p>
              • Improved the backend built using Node.js and GraphQL, fixing
              issues, optimizing APIs, and enhancing data flow.
            </p>
            <p className="text-neutral-600 pt-2 font-medium">
              Tech Stack - React.js | Node.js | GraphQL | TypeScript | Redux
            </p>
          </div>

          <div className="flex items-center gap-6 mb-6">
            <img
              src={stellar}
              alt="Stellar Code"
              className="w-16 h-16 rounded-lg object-contain"
            />
            <div>
              <h3 className="text-neutral-800 text-3xl font-semibold">
                Stellar Code
              </h3>
              <p className="text-neutral-600 text-lg">
                Mern Stack Developer Intern
              </p>
              <p className="text-neutral-500 text-sm">Sep 2024 - Nov 2024</p>
            </div>
          </div>
          <div className="text-neutral-800 space-y-3">
            <p>
              • Improved full-stack web applications using React, Express,
              Node.js, AWS DynamoDB and ECS, for Web3 projects, including Dapps
              and DAOs.
            </p>
            <p>
              • Enhanced Pepe's Frogbar, a Telegram game with over 1 million
              users, by building APIs, creating database tables, adding
              features, and addressing security vulnerabilities.
            </p>
            <p>
              • Executed a project with Kraftin Tech to integrate the SanityCDN
              architecture, reducing load times by up to 30% and increasing
              overall site performance metrics.
            </p>
            <p className="text-neutral-600 pt-2 font-medium">
              Tech Stack - React.js | Node.js | AWS ECS | DynamoDB | Javascript
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div>
          <div className="flex items-center gap-6 mb-6">
            <img
              src={college}
              alt="GL Bajaj Institute of Technology"
              className="w-16 h-16 rounded-lg object-contain"
            />
            <div>
              <h3 className="text-neutral-800 text-3xl font-semibold">
                B.Tech in Computer Science
              </h3>
              <p className="text-neutral-600 text-lg">
                GL Bajaj Institute of Technology
              </p>
              <p className="text-neutral-500 text-sm">Nov 2021 - Present</p>
            </div>
          </div>
          <div className="text-neutral-800 space-y-3">
            <p>
              • Earned a degree in Computer Science and Engineering, developing
              a strong foundation in core concepts such as data structures,
              algorithms, and software development, along with hands-on
              experience in full-stack web development and front-end app
              development.
            </p>
            <p>
              • Served as a Technical Team Member in Shrink Club, where I led
              the planning and execution of hackathons and gaming events by
              handling technical setups, coordinating logistics, and ensuring
              smooth execution, fostering a dynamic tech community.
            </p>
            <p>
              • Strengthened my problem-solving skills by solving 800+ coding
              problems across various platforms and actively participated in
              hackathons and coding competitions, collaborating with teams to
              build innovative solutions under time constraints.
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full" id="experience">
      <Timeline data={data} />
    </div>
  );
}
