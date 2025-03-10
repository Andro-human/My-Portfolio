"use client";
import { FloatingNav } from "./ui/floating-navbar";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Experience",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Certifications",
      link: "#certifications",
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
