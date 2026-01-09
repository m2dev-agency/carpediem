"use client";

import { Facebook, Instagram, Twitter, ArrowUp } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

export const Footer = () => {
  const socialLinks = [
    { icon: <Instagram />, href: "#" },
    { icon: <Facebook />, href: "#" },
    { icon: <Twitter />, href: "#" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-stone-900 py-20 text-stone-400 overflow-hidden">
        {/* Large Brand Text Background */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none select-none pointer-events-none opacity-[0.03]">
             <h1 className="text-[25vw] font-bold text-center uppercase whitespace-nowrap text-white font-serif tracking-tighter transform translate-y-[30%]">
                Carpe Diem
             </h1>
        </div>

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-between gap-12 px-4 md:flex-row md:items-end">
        
        {/* Brand & Copyright */}
        <div className="text-center md:text-left">
          <h3 className="mb-4 font-serif text-5xl font-bold text-white tracking-tight">Carpe Diem</h3>
          <p className="max-w-xs text-lg font-light text-stone-500">
             L'arte della pizza, elevata ad esperienza sensoriale.
          </p>
          <p className="mt-8 text-sm opacity-50">© 2026 Carpe Diem Pizza.</p>
        </div>

        {/* Socials & Actions */}
        <div className="flex flex-col items-center gap-8 md:items-end">
          <div className="flex gap-4">
            {socialLinks.map((link, i) => (
                <Magnetic key={i}>
                  <a 
                    href={link.href} 
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-700 bg-stone-800 text-stone-300 transition-colors hover:border-amber-500 hover:text-amber-500"
                  >
                    {link.icon}
                  </a>
                </Magnetic>
            ))}
          </div>

          <div className="flex items-center gap-4">
             <Magnetic>
                <button 
                  onClick={scrollToTop}
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-600 text-stone-950 transition-all hover:bg-amber-500 hover:scale-110"
                >
                    <ArrowUp size={24} />
                </button>
             </Magnetic>
          </div>
        </div>
      </div>
    </footer>
  );
};
