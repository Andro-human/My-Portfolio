"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    (<HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl md:text-2xl lg:text-2xl font-bold text-neutral-700  max-w-4xl leading-relaxed lg:leading-snug text-center ">
        <Highlight className="text-black ">
        web development and app development.
        </Highlight>
      </motion.h1>
    </HeroHighlight>)
  );
}
