"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => {
        const next = prev + Math.floor(Math.random() * 10) + 1;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 800); // Wait a bit at 100%
          return 100;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] flex h-screen w-full flex-col items-center justify-center bg-stone-900 text-stone-100"
        >
          {/* Central Counter */}
          <div className="relative flex items-center justify-center overflow-hidden">
            <motion.h1
              className="font-serif text-[15vw] leading-none tracking-tighter opacity-80"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {counter}%
            </motion.h1>
          </div>

          {/* Bottom text */}
          <div className="absolute bottom-10 left-10 overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-sans text-sm uppercase tracking-widest text-stone-400"
            >
              Lievitazione in corso...
            </motion.p>
          </div>

          {/* Right bottom text */}
           <div className="absolute bottom-10 right-10 overflow-hidden">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-sans text-sm uppercase tracking-widest text-stone-400"
            >
              Carpe Diem &copy; 2026
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
