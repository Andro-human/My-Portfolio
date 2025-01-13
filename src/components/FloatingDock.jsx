import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandGmail,
  IconBrandLinkedin,
} from "@tabler/icons-react";

import Leetcode from "../assets/svgFiles/Leetcode.jsx";
import CodeChef from "../assets/svgFiles/CodeChef.jsx";
import Hackerrank from "../assets/svgFiles/Hackerrank.jsx";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Gmail",
      icon: (
        <IconBrandGmail className="h-full w-full text-neutral-500 " />
      ),
      href: "mailto:hey.animeshsinha@gmail.com",
    },

    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 " />
      ),
      href: "https://github.com/Andro-human",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 " />
      ),
      href: "https://www.linkedin.com/in/animeshsinha13/",
    },
    {
      title: "X",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 " />
      ),
      href: "https://x.com/Andro_human",
    },
    {
      title: "Leetcode",
      icon: <Leetcode />,
      href: "https://leetcode.com/u/androhuman/",
    },
    {
      title: "Codechef",
      icon: <CodeChef />,
      href: "https://www.codechef.com/users/andro_human",
    },
    {
      title: "Hackerrank",
      icon: <Hackerrank />,
      href: "https://www.hackerrank.com/profile/Androhuman",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[5rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
