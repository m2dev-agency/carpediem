"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { storyIngredients, locations } from "@/data";
import { MapPin, ArrowRight } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import Magnetic from "@/components/ui/Magnetic";

export const HeroStory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Extended height for more scroll time
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Cinematic Zoom Effect throughout
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  
  // === PHASE 0: INTRO REVEAL ===
  // Intro content fades out as you scroll
  const introOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.1], [0, -100]);
  // Image clip reveal (circle expanding from center)
  const clipProgress = useTransform(scrollYProgress, [0, 0.15], [0, 100]);
  
  // Opacity for Scroll Indicator (fades out as you start)
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  // --- Story Ingredients Logic (10% - 80% scroll) ---

  // 1. Dough (Base layer) - starts visible
  // 2. Sauce - starts after intro
  const sauceOpacity = useTransform(scrollYProgress, [0.18, 0.28], [0, 1]);
  // 3. Cheese
  const cheeseOpacity = useTransform(scrollYProgress, [0.32, 0.42], [0, 1]);
  // 4. Toppings
  const toppingsOpacity = useTransform(scrollYProgress, [0.46, 0.56], [0, 1]);
  // 5. Basil
  const basilOpacity = useTransform(scrollYProgress, [0.60, 0.70], [0, 1]);

  // Texts for Ingredients
  // They appear and disappear before the final Hero reveal
  // Start AFTER intro (after 10%)
  const text1Opacity = useTransform(scrollYProgress, [0.10, 0.15, 0.20], [0, 1, 0]);
  const text2Opacity = useTransform(scrollYProgress, [0.22, 0.27, 0.32], [0, 1, 0]);
  const text3Opacity = useTransform(scrollYProgress, [0.34, 0.39, 0.44], [0, 1, 0]);
  const text4Opacity = useTransform(scrollYProgress, [0.46, 0.51, 0.56], [0, 1, 0]);
  const text5Opacity = useTransform(scrollYProgress, [0.58, 0.63, 0.68], [0, 1, 0]);

  const textTransforms = [
    { opacity: text1Opacity },
    { opacity: text2Opacity },
    { opacity: text3Opacity },
    { opacity: text4Opacity },
    { opacity: text5Opacity },
  ];

  // --- Hero Final Reveal Logic (80% - 100% scroll) ---
  
  // Hero Content fades IN at the end
  const heroContentOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);
  const heroContentY = useTransform(scrollYProgress, [0.8, 1], [50, 0]);
  // Ensure it's not clickable until fully visible
  const heroPointerEvents = useTransform(scrollYProgress, (v) => v > 0.85 ? "auto" : "none");

  // Final Pizza darkening to make text pop
  const overlayOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 0.7]);


  const title = "Carpe Diem";
  const letterVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };


  return (
    <section ref={containerRef} className="relative h-[500vh] bg-stone-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* === VISUAL LAYERS === */}
        <motion.div style={{ scale }} className="absolute inset-0 h-full w-full brightness-[0.65]">
           {/* Placeholder geometry for Dough if image is missing or full pizza */}
           <div className="absolute inset-0 z-0 flex items-center justify-center">
              <div className="rounded-full bg-[#E3C096] w-[60vh] h-[60vh] opacity-20 blur-3xl animate-pulse" />
           </div>

          {/* Base Layer: Dough / Empty Board or just Pizza 1 */}
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          >
             <Image
               src="/assets/pizza-story/pizza_1.png"
               alt="Impasto"
               fill
               className="object-cover"
               priority
             />
          </motion.div>

          <motion.div style={{ opacity: sauceOpacity }} className="absolute inset-0 z-10">
             <Image src="/assets/pizza-story/pizza_2.png" alt="Salsa" fill className="object-cover" />
          </motion.div>

          <motion.div style={{ opacity: cheeseOpacity }} className="absolute inset-0 z-20">
            <Image src="/assets/pizza-story/pizza_3.png" alt="Mozzarella" fill className="object-cover" />
          </motion.div>

          <motion.div style={{ opacity: toppingsOpacity }} className="absolute inset-0 z-30">
             <Image src="/assets/pizza-story/pizza_4.png" alt="Toppings" fill className="object-cover" />
          </motion.div>

          <motion.div style={{ opacity: basilOpacity }} className="absolute inset-0 z-40">
             <Image src="/assets/pizza-story/pizza_5.png" alt="Basilico" fill className="object-cover" />
          </motion.div>
        </motion.div>

        {/* Cinematic Overlay - Darken/Gradient */}
        <motion.div 
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 z-50 bg-black/80 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/40 pointer-events-none opacity-0" 
        />


        {/* === PHASE 0: CINEMATIC INTRO === */}
        <motion.div 
            style={{ opacity: introOpacity, y: introY }}
            className="absolute inset-0 z-[60] flex flex-col items-center justify-center text-white pointer-events-none"
        >
            {/* Decorative Line */}
            <motion.div 
              initial={{ scaleX: 0 }} 
              animate={{ scaleX: 1 }} 
              transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-px w-24 bg-amber-500 mb-8 origin-center"
            />
            
            {/* Main Intro Title */}
            <div className="overflow-hidden mb-4">
              <motion.h2 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-center text-white"
              >
                Tutto inizia qui
              </motion.h2>
            </div>
            
            {/* Poetic Subtitle */}
            <div className="overflow-hidden mb-12">
              <motion.p 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-xl md:text-2xl text-stone-300 font-light italic text-center max-w-xl px-4"
              >
                Acqua, farina e 48 ore di pazienza.
              </motion.p>
            </div>

            {/* Scroll Indicator at bottom */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-10 flex flex-col items-center"
            >
                <p className="mb-3 text-xs uppercase tracking-[0.3em] font-light text-stone-400">Scorri</p>
                <motion.div 
                  animate={{ y: [0, 8, 0] }} 
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="w-6 h-10 rounded-full border-2 border-stone-500 flex items-start justify-center p-2"
                >
                    <motion.div 
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      className="w-1 h-2 bg-amber-500 rounded-full"
                    />
                </motion.div>
            </motion.div>
        </motion.div>


        {/* === STORY TEXT LAYERS (Middle) === */}
        <div className="absolute inset-0 z-[60] flex items-center justify-center pointer-events-none">
          {storyIngredients.map((item, index) => (
            <motion.div
              key={index}
              style={{ opacity: textTransforms[index].opacity }}
              className="absolute max-w-4xl px-6 text-center"
            >
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-500 font-medium">
                Capitolo {index + 1}
              </p>
              <h3 className="mb-6 font-serif text-5xl font-bold text-white md:text-7xl drop-shadow-lg">
                {item.title}
              </h3>
              <p className="font-serif text-xl text-stone-300 md:text-2xl font-light italic leading-relaxed drop-shadow-md">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* === HERO CONTENT (End) === */}
        <motion.div 
            style={{ opacity: heroContentOpacity, y: heroContentY, pointerEvents: heroPointerEvents }}
            className="absolute inset-0 z-[70] flex flex-col items-center justify-center text-center px-4 opacity-0" // Added opacity-0 default
        >
            <p className="mb-6 text-sm font-medium tracking-[0.3em] text-amber-500 uppercase">
                 Est. 2012 • Abruzzo
            </p>
          
            <div className="mb-6 overflow-hidden">
                <h1 className="flex justify-center flex-wrap overflow-hidden font-serif text-6xl font-bold text-white md:text-8xl lg:text-9xl">
                {title.split("").map((char, i) => (
                    <span key={i} className="inline-block">
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
                </h1>
            </div>

            <p className="mb-12 font-serif text-xl text-stone-300 md:text-2xl font-light italic tracking-wide">
                &quot;Diversamente Pizza&quot;
            </p>
          
            <Magnetic>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 border border-white/10"
              >
                <span className="relative z-10">Trova il tuo tavolo</span>
                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-amber-600 transition-transform group-hover:rotate-45">
                   <ArrowRight size={16} />
                </div>
              </button>
            </Magnetic>
        </motion.div>

        {/* Progress Bar */}
        <motion.div 
            className="absolute bottom-0 left-0 right-0 h-1 bg-stone-800/30 z-[80]"
        >
            <motion.div 
                className="h-full bg-amber-500 origin-left"
                style={{ scaleX: scrollYProgress }}
            />
        </motion.div>

      </div>

      {/* MODAL (Outside Sticky, but needs state) */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Le Nostre Sedi"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="group cursor-pointer rounded-xl border border-stone-700 bg-stone-800/50 p-4 transition-all hover:border-amber-500/50 hover:bg-stone-800"
            >
              <div className="mb-2 flex items-center gap-2 text-amber-500">
                <MapPin size={18} />
                <h3 className="font-serif text-lg font-bold text-white">{loc.name}</h3>
              </div>
              <p className="text-sm text-stone-400 group-hover:text-stone-300">{loc.address}</p>
            </div>
          ))}
        </div>
      </Modal>

    </section>
  );
};
