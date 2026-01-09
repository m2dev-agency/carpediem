"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const ChefSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen py-24 overflow-hidden bg-stone-900 text-stone-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-amber-500 font-sans tracking-widest uppercase text-sm mb-4">
                Il Maestro
              </h2>
              <h3 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
                L'arte dell'attesa
              </h3>
              <p className="text-xl text-stone-300 font-light leading-relaxed mb-6">
                "La pizza non mente. È acqua, farina e tempo. Soprattutto tempo. 
                Non forziamo la lievitazione, la accompagniamo. Ogni impasto riposa 
                per almeno 48 ore, sviluppando profumi che ricordano il pane caldo di una volta."
              </p>
              <p className="text-lg text-stone-400 font-light leading-relaxed">
                 Emilio, il nostro maestro pizzaiolo, seleziona personalmente ogni ingrediente dai piccoli produttori locali. 
                 La sua filosofia è semplice: meno, ma meglio.
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2, duration: 0.5 }}
               className="pt-8"
            >
               <div className="h-px w-24 bg-amber-500 mb-4" />
               <span className="font-serif italic text-2xl">Emilio B.</span>
            </motion.div>
          </div>

          {/* Image/Visual */}
          <div className="lg:w-1/2 relative h-[60vh] w-full">
            <motion.div 
              style={{ y }} 
              className="absolute inset-0 overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
            >
               <div className="absolute inset-0 bg-stone-800 animate-pulse" /> {/* Placeholder if image fails */}
               {/* Using a generic high-quality pizza making image from Unsplash */}
               <Image 
                 src="https://images.unsplash.com/photo-1542283733-4fde047cb8be?q=80&w=2070&auto=format&fit=crop"
                 alt="Chef making pizza"
                 fill
                 className="object-cover"
                 sizes="(max-width: 768px) 100vw, 50vw"
               />
               
               {/* Decorative frame */}
               <div className="absolute -inset-4 border border-stone-700/50 rounded-2xl z-20 pointer-events-none translate-x-4 translate-y-4" />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
