"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { storyIngredients } from "@/data";

export const PizzaScrollStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Cinematic Zoom Effect
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  
  // Parallax Y for text (moves slightly faster/slower than scroll for depth)
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Transforms for layers - PURE OPACITY STACKING
  // 1. Dough (Base layer)
  const doughOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // 2. Sauce
  const sauceOpacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);

  // 3. Cheese
  const cheeseOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);

  // 4. Toppings
  const toppingsOpacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);

  // 5. Basil
  const basilOpacity = useTransform(scrollYProgress, [0.75, 0.85], [0, 1]);

  // Text Opacities & Transforms
  // We want the text to appear, stay for a bit, then fade out
  const text1Opacity = useTransform(scrollYProgress, [0.05, 0.15, 0.20], [0, 1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.40], [0, 1, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.45, 0.55, 0.60], [0, 1, 0]);
  const text4Opacity = useTransform(scrollYProgress, [0.65, 0.75, 0.80], [0, 1, 0]);
  const text5Opacity = useTransform(scrollYProgress, [0.85, 0.95, 1.0], [0, 1, 1]); // Last one stays

  const textTransforms = [
    { opacity: text1Opacity },
    { opacity: text2Opacity },
    { opacity: text3Opacity },
    { opacity: text4Opacity },
    { opacity: text5Opacity },
  ];

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-stone-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Background Images Container - Full Screen */}
        <motion.div 
          style={{ scale }}
          className="absolute inset-0 h-full w-full"
        >
          {/* 1. Dough */}
          <motion.div style={{ opacity: doughOpacity }} className="absolute inset-0 z-0">
             <Image
               src="/assets/pizza-story/pizza_1.png"
               alt="Impasto"
               fill
               className="object-cover"
               priority
             />
          </motion.div>

          {/* 2. Sauce */}
          <motion.div style={{ opacity: sauceOpacity }} className="absolute inset-0 z-10">
             <Image
               src="/assets/pizza-story/pizza_2.png"
               alt="Salsa"
               fill
               className="object-cover"
             />
          </motion.div>

          {/* 3. Cheese */}
          <motion.div style={{ opacity: cheeseOpacity }} className="absolute inset-0 z-20">
            <Image
               src="/assets/pizza-story/pizza_3.png"
               alt="Mozzarella"
               fill
               className="object-cover"
             />
          </motion.div>

          {/* 4. Toppings */}
          <motion.div style={{ opacity: toppingsOpacity }} className="absolute inset-0 z-30">
             <Image
               src="/assets/pizza-story/pizza_4.png"
               alt="Toppings"
               fill
               className="object-cover"
             />
          </motion.div>

          {/* 5. Basil */}
          <motion.div style={{ opacity: basilOpacity }} className="absolute inset-0 z-40">
             <Image
               src="/assets/pizza-story/pizza_5.png"
               alt="Basilico"
               fill
               className="object-cover"
             />
          </motion.div>
        </motion.div>

        {/* Cinematic Overlay - Darken for text readability */}
        <div className="absolute inset-0 z-50 bg-black/40 bg-gradient-to-t from-stone-950/90 via-transparent to-stone-950/40 pointer-events-none" />

        {/* Text Container - Centered and Floating */}
        <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
          {storyIngredients.map((item, index) => (
            <motion.div
              key={index}
              style={{ 
                opacity: textTransforms[index].opacity,
                y: textY 
              }}
              className="absolute max-w-4xl px-6 text-center"
            >
              <h3 className="mb-6 font-serif text-5xl font-bold text-amber-500 md:text-7xl drop-shadow-lg">
                {item.title}
              </h3>
              <p className="text-2xl text-white md:text-3xl font-light leading-relaxed drop-shadow-md text-shadow-lg">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Progress Indicator */}
        <motion.div 
            className="absolute bottom-0 left-0 right-0 h-2 bg-stone-800/50 z-50"
        >
            <motion.div 
                className="h-full bg-amber-500 origin-left"
                style={{ scaleX: scrollYProgress }}
            />
        </motion.div>

      </div>
    </section>
  );
};
