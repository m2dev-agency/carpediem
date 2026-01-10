"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { locations } from "@/data";
import { MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const LocationsSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative bg-stone-950 py-32 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 font-serif text-5xl font-bold text-amber-500 md:text-7xl"
        >
          Le Nostre Sedi
        </motion.h2>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          
          {/* List of Locations */}
          <div className="flex flex-col gap-4 z-10">
            {locations.map((loc) => (
              <motion.div
                key={loc.id}
                onMouseEnter={() => setHoveredId(loc.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative flex cursor-pointer flex-col gap-4 border-b border-stone-800 py-8 transition-colors hover:border-amber-500/50"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-3xl md:text-5xl transition-colors group-hover:text-amber-500">
                    {loc.name}
                  </h3>
                  <ArrowUpRight 
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 text-amber-500" 
                    size={32}
                  />
                </div>
                
                <div className="flex items-center gap-2 text-stone-400 font-light text-lg">
                    <MapPin size={18} />
                    <p>{loc.address}</p>
                </div>

                <div className="h-0 overflow-hidden text-stone-300 transition-all duration-500 group-hover:h-12">
                   <p className="pt-2 text-sm italic opacity-60">Aperti tutti i giorni 19:00 - 23:30</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Image Display - Desktop Only */}
          <div className="relative hidden h-[600px] w-full overflow-hidden rounded-2xl lg:block">
             {locations.map((loc) => (
               <motion.div
                  key={loc.id}
                  className="absolute inset-0 h-full w-full"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ 
                    opacity: hoveredId === loc.id ? 1 : 0,
                    scale: hoveredId === loc.id ? 1 : 1.1,
                    zIndex: hoveredId === loc.id ? 10 : 0
                  }}
                  transition={{ duration: 0.6 }}
               >
                  <Image
                    src={loc.image} 
                    alt={loc.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
               </motion.div>
             ))}
             
             {/* Default Image when none hovered */}
             <motion.div
                className="absolute inset-0 h-full w-full"
                animate={{ opacity: hoveredId ? 0 : 1 }}
                transition={{ duration: 0.4 }}
             >
                <div className="flex h-full w-full items-center justify-center bg-stone-900 border border-stone-800 rounded-2xl">
                    <p className="font-serif text-3xl text-stone-700 italic">Scegli la tua destinazione</p>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
