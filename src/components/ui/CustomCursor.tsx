"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const cursorSize = isHovered ? 60 : 20;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const manageMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - cursorSize / 2);
      mouseY.set(e.clientY - cursorSize / 2);
    };

    const manageMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("mouseover", manageMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("mouseover", manageMouseOver);
    };
  }, [cursorSize, mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-5 w-5 rounded-full bg-white mix-blend-difference md:block" // Hidden on touch
      style={{
        left: smoothX,
        top: smoothY,
        width: cursorSize,
        height: cursorSize,
      }}
      animate={{
        width: cursorSize,
        height: cursorSize,
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
    />
  );
};
