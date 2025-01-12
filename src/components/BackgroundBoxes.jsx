"use client";
import { Boxes } from "./ui/background-boxes";
import { FloatingDockDemo } from "./FloatingDock";

export function BackgroundBoxesDemo() {
  return (
    (<div
      className="h-60 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div
        className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <FloatingDockDemo />
    </div>)
  );
}
