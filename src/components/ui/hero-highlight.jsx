/* eslint-disable react/prop-types */
"use client";
import { cn } from "../../lib/utils";
import { useMotionValue, motion, useMotionTemplate, useInView } from "framer-motion";
import { useRef } from "react";

export const HeroHighlight = ({ children, className, containerClassName }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (!currentTarget) return;
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div className={cn(containerClassName)} onMouseMove={handleMouseMove}>
      <div className="\" />
      <motion.div
        className="pointer-events-none bg-dot-thick-indigo-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({ children, className }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div
        ref={ref}
        onMouseMove={isInView} // Enable effect only if in view
      >
        {isInView && (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block pb-1   px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300`,
        className
      )}
    >
      {children}
    </motion.span> )}
    </div>
  );
};
