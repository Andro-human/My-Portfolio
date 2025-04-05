/* eslint-disable react/prop-types */
"use client";
import { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";
import { Button } from "@mui/material";
import { Menu, X } from "lucide-react";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef(null);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      setVisible(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 2000);
    }
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent rounded-full bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] py-2 items-center justify-between",
          className,
          mobileMenuOpen
            ? "flex-col w-[90%] max-w-[300px] rounded-xl"
            : "pr-2 pl-8"
        )}
      >
        <div className="flex w-full items-center justify-between px-4 md:hidden">
          <span className="text-sm font-medium">Menu</span>
          <button
            onClick={toggleMobileMenu}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div className={`hidden md:flex items-center space-x-4`}>
          {navItems.map((navItem, idx) => (
            <Button
              key={`link-${idx}`}
              href={navItem.link}
              style={{ color: "black" }}
            >
              <span className="block text-sm">{navItem.name}</span>
            </Button>
          ))}
          <a
            key={"link-contact"}
            href="#contact"
            className="border text-sm font-medium relative border-neutral-200 text-black px-4 py-2 rounded-full"
          >
            <span>Contact</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </a>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-col w-full space-y-2 px-4 py-2 border-t border-gray-100 md:hidden"
            >
              {navItems.map((navItem, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={navItem.link}
                  className="text-sm py-2 px-3 hover:bg-gray-50 rounded-md text-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {navItem.name}
                </a>
              ))}
              <a
                key={"mobile-link-contact"}
                href="#contact"
                className="flex items-center justify-center border text-sm font-medium relative border-neutral-200 text-black px-4 py-2 rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Contact</span>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
