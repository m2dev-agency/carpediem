"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight, MapPin, ChefHat, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#home", icon: <ArrowUpRight size={14} /> },
  { name: "Sedi", href: "#locations", icon: <MapPin size={14} /> },
  { name: "Filosofia", href: "#philosophy", icon: <ChefHat size={14} /> },
  { name: "Menu", href: "#menu", icon: <BookOpen size={14} /> },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <>
      {/* 
        ========================================
        FLOATING CAPSULE (DESKTOP & MOBILE CLOSED)
        ========================================
      */}
      <div className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "pointer-events-auto relative flex items-center justify-between rounded-full border border-white/10 bg-stone-900/60 p-2 shadow-2xl backdrop-blur-xl transition-all duration-500",
            isOpen ? "w-full max-w-[95%] sm:max-w-md bg-stone-900" : "w-full max-w-[95%] sm:w-auto sm:min-w-[400px]"
          )}
        >
          {/* LOGO */}
          <Link 
            href="/" 
            className="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(false)}
          >
             <Image 
               src="/assets/img/logo_small_bg_trasparente.png" 
               alt="Carpe Diem Logo" 
               width={40} 
               height={40}
               className="h-10 w-auto object-contain"
             />
          </Link>

          {/* DESKTOP LINKS (Only visible when closed on Desktop) */}
          <div className={cn(
            "hidden items-center gap-1 sm:flex",
            isOpen && "hidden" // Hide when menu is open
          )}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative px-4 py-2 text-xs font-medium uppercase tracking-widest text-stone-400 transition-colors hover:text-white"
              >
                {link.name}
                <span className="absolute inset-x-2 -bottom-1 h-px scale-x-0 bg-amber-500 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="flex items-center gap-2">
            {/* CTA Book (Desktop only when closed) */}
            <Link
              href="#locations"
              className={cn(
                  "hidden rounded-full bg-amber-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-stone-950 transition-all hover:bg-amber-400 sm:block",
                  isOpen && "hidden"
              )}
            >
              Prenota
            </Link>

            {/* HAMBURGER (Mobile always, Desktop when open) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-white/5 text-stone-200 transition-colors hover:bg-white/10",
                "sm:hidden"
              )}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -45, opacity: 0 }}
                  >
                    <X size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -45, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 45, opacity: 0 }}
                  >
                    <Menu size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.div>
      </div>

       {/* 
        ========================================
        MOBILE MENU OVERLAY (Connected to the pill conceptually)
        ========================================
      */}
      <AnimatePresence>
        {isOpen && (
          <>
             {/* Backdrop */}
             <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 z-40 bg-stone-950/80 backdrop-blur-sm"
             />

             {/* Menu Card */}
             <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                className="fixed top-24 left-4 right-4 z-50 overflow-hidden rounded-3xl border border-white/10 bg-stone-900 shadow-2xl md:hidden"
             >
                <div className="p-2">
                   {/* Full Logo Header in Menu */}
                   <div className="flex justify-center py-6 border-b border-white/5 mb-2">
                      <Image 
                        src="/assets/img/logo_bg_trasparente.png" 
                        alt="Carpe Diem Full Logo" 
                        width={180} 
                        height={60}
                        className="h-16 w-auto object-contain"
                      />
                   </div>

                   {navLinks.map((link, i) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                         <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-between rounded-2xl p-4 transition-colors hover:bg-white/5"
                         >
                            <span className="flex items-center gap-3 text-lg font-medium text-stone-200">
                               <span className="text-amber-500/50">{link.icon}</span>
                               {link.name}
                            </span>
                            <ArrowUpRight size={16} className="text-stone-600" />
                         </Link>
                      </motion.div>
                   ))}
                   
                   <div className="mt-2 border-t border-white/5 pt-2">
                      <Link 
                        href="#locations"
                        onClick={() => setIsOpen(false)}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 py-4 text-sm font-bold uppercase tracking-wider text-stone-950 active:scale-95 transition-transform"
                      >
                         Prenota un Tavolo
                      </Link>
                   </div>
                </div>
             </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
