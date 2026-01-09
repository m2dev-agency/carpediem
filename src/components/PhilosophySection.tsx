"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const phrases = [
  "Farine Macinate a Pietra",
  "Lievito Madre Vivo",
  "Ingredienti DOC & IGP",
  "Cottura a Legna",
  "Passione Abruzzese"
];

export const PhilosophySection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <section ref={containerRef} className="py-32 bg-amber-500 overflow-hidden text-stone-950">
       <div className="flex flex-col gap-8">
         <motion.div style={{ x: x1 }} className="flex gap-12 whitespace-nowrap">
            {[...phrases, ...phrases, ...phrases].map((phrase, i) => (
                <span key={i} className="text-6xl md:text-9xl font-serif font-black uppercase tracking-tighter opacity-80">
                    {phrase} —
                </span>
            ))}
         </motion.div>
         
         <motion.div style={{ x: x2 }} className="flex gap-12 whitespace-nowrap">
            {[...phrases, ...phrases].reverse().map((phrase, i) => (
                <span key={i} className="text-6xl md:text-9xl font-serif font-black uppercase tracking-tighter text-outline opacity-40">
                    {phrase} —
                </span>
            ))}
         </motion.div>
       </div>
    </section>
  );
};
