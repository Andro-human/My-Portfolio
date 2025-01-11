"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Animesh ‎ ",
    },
    {
      text: "Sinha",
    }
  ];
  return (
      <TypewriterEffectSmooth words={words} />
  );
}
