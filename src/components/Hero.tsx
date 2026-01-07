"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { Modal } from "@/components/ui/modal";
import { locations } from "@/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const title = "Carpe Diem";

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 bg-stone-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-50 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/30 via-stone-950/60 to-stone-950" />
      </motion.div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <motion.h2 variants={itemVariants} className="mb-6 text-sm font-medium tracking-[0.3em] text-amber-500 uppercase">
            Est. 2012 • Abruzzo
          </motion.h2>
          
          <div className="mb-8 overflow-hidden">
             <motion.h1 className="flex justify-center overflow-hidden font-serif text-6xl font-bold text-white md:text-8xl lg:text-9xl">
              {title.split("").map((char, i) => (
                <motion.span key={i} variants={letterVariants} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          <motion.p variants={itemVariants} className="mb-12 text-xl text-stone-300 md:text-3xl font-light italic tracking-wide">
            &quot;Diversamente Pizza&quot;
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 border border-white/10"
            >
              <span className="relative z-10">Trova il tuo tavolo</span>
              <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-amber-600 transition-transform group-hover:rotate-45">
                 <ArrowRight size={16} />
              </div>
            </button>
          </motion.div>
        </motion.div>
      </div>

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
