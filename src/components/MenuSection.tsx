"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { locations, menuCategories, menuByLocation } from "@/data";
import { cn } from "@/lib/utils";
import { MapPin, ChevronDown, Sparkles, Leaf, Info } from "lucide-react";

// ==========================================
// NEW DESIGN: ACCORDION MOBILE-FIRST
// ==========================================

export const MenuSection = () => {
  const [activeLocationId, setActiveLocationId] = useState<number>(locations[0]?.id ?? 1);
  const [activeLocation, setActiveLocation] = useState(locations[0]);
  const [isLocationMenuOpen, setIsLocationMenuOpen] = useState(false);
  
  // Accordion state - default open the first relevant category
  const [openCategories, setOpenCategories] = useState<string[]>([menuCategories[0].id]);

  const toggleCategory = (catId: string) => {
    setOpenCategories(prev => 
      prev.includes(catId) 
        ? prev.filter(c => c !== catId) 
        : [...prev, catId]
    );
  };

  const handleLocationSelect = (locId: number) => {
    const loc = locations.find(l => l.id === locId);
    if (loc) {
      setActiveLocationId(locId);
      setActiveLocation(loc);
      setIsLocationMenuOpen(false);
      // Reset expanded state to just the first category when switching location
      setOpenCategories([menuCategories[0].id]); 
    }
  };

  const currentMenu = menuByLocation[activeLocationId] ?? Object.values(menuByLocation)[0];

  // Helper to check if category has items
  const getCategoryItems = (catId: string) => {
    return currentMenu.pizzas.filter(p => p.category === catId);
  };

  return (
    <section className="min-h-screen bg-stone-950 px-4 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        
        {/* ================= HEADER & LOCATION SELECTOR ================= */}
        <div className="mb-20 text-center relative z-20">
            <h2 className="mb-4 font-serif text-4xl text-white md:text-5xl">Il Nostro Menu</h2>
            <div className="flex justify-center">
                <div className="relative">
                    <button 
                    onClick={() => setIsLocationMenuOpen(!isLocationMenuOpen)}
                    className="group flex items-center gap-3 rounded-full bg-stone-900/50 px-6 py-3 text-sm transition-all hover:bg-stone-900 border border-stone-800 hover:border-amber-500/50"
                    >
                        <span className="text-stone-400 uppercase tracking-widest text-xs">Sede di:</span>
                        <span className="font-serif text-xl font-bold text-amber-500">{activeLocation?.name}</span>
                        <ChevronDown size={16} className={cn("text-stone-500 transition-transform duration-300", isLocationMenuOpen ? "rotate-180" : "group-hover:rotate-180")} />
                    </button>

                    <AnimatePresence>
                        {isLocationMenuOpen && (
                            <>
                                <div className="fixed inset-0 z-10" onClick={() => setIsLocationMenuOpen(false)} />
                                <motion.div 
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    className="absolute left-1/2 mt-2 w-80 -translate-x-1/2 overflow-hidden rounded-2xl border border-stone-800 bg-stone-950 p-2 shadow-xl z-20"
                                >
                                    {locations.sort((a,b) => a.id - b.id).map(loc => (
                                        <button
                                            key={loc.id}
                                            onClick={() => handleLocationSelect(loc.id)}
                                            className={cn(
                                                "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-colors",
                                                activeLocationId === loc.id 
                                                    ? "bg-amber-500/10 text-amber-500" 
                                                    : "text-stone-400 hover:bg-stone-900 hover:text-white"
                                            )}
                                        >
                                            <span className={cn("font-serif font-bold", activeLocationId === loc.id ? "text-amber-500" : "text-white")}>
                                                {loc.name}
                                            </span>
                                            {activeLocationId === loc.id && <MapPin size={14} className="text-amber-500" />}
                                        </button>
                                    ))}
                                </motion.div>
                            </>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>

        {/* ================= ACCORDION MENU LIST ================= */}
        <div className="space-y-6">
            {menuCategories.map((cat) => {
                const items = getCategoryItems(cat.id);
                if (items.length === 0) return null;
                const isOpen = openCategories.includes(cat.id);

                return (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        key={cat.id} 
                        className="overflow-hidden rounded-2xl border border-stone-800 bg-stone-900/20"
                    >
                        {/* Accordion Header */}
                        <button 
                            onClick={() => toggleCategory(cat.id)}
                            className={cn(
                                "flex w-full items-center justify-between px-6 py-6 text-left transition-colors md:px-8",
                                isOpen ? "bg-stone-900/50" : "hover:bg-stone-900/30"
                            )}
                        >
                            <div>
                                <h3 className={cn(
                                    "font-serif text-2xl font-bold uppercase tracking-wide transition-colors md:text-3xl",
                                    isOpen ? "text-white" : "text-stone-400"
                                )}>
                                    {cat.label}
                                </h3>
                                <p className="text-xs font-bold uppercase tracking-widest text-amber-500/80 mt-1">
                                    {items.length} Proposte
                                </p>
                            </div>
                            <div className={cn(
                                "flex h-10 w-10 items-center justify-center rounded-full border border-stone-800 transition-all duration-300 bg-stone-900",
                                isOpen ? "rotate-180 border-amber-500/50 text-amber-500" : "text-stone-500"
                            )}>
                                <ChevronDown size={20} />
                            </div>
                        </button>

                        {/* Accordion Content */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="grid gap-4 p-4 md:grid-cols-2 lg:p-8">
                                        {items.map((pizza) => (
                                            <div 
                                                key={pizza.id}
                                                className="group relative flex flex-col gap-3 rounded-xl border border-stone-800 bg-stone-950/50 p-6 transition-all hover:border-stone-700 hover:bg-stone-900"
                                            >
                                                {/* Card Header */}
                                                <div className="flex items-start justify-between gap-4">
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <h4 className="font-serif text-xl font-bold text-stone-200 group-hover:text-amber-500 transition-colors">
                                                                {pizza.name}
                                                            </h4>
                                                            {pizza.isNew && <Sparkles size={12} className="text-amber-500 animate-pulse" />}
                                                            {pizza.isVegan && <Leaf size={12} className="text-green-500" />}
                                                        </div>
                                                        {/* Tags row */}
                                                        { (pizza.isNew || pizza.isVegan) && (
                                                            <div className="flex gap-2 mb-2">
                                                                {pizza.isNew && <span className="text-[10px] uppercase font-bold tracking-wider text-amber-500 border border-amber-500/20 px-2 py-0.5 rounded-full">New</span>}
                                                                {pizza.isVegan && <span className="text-[10px] uppercase font-bold tracking-wider text-green-500 border border-green-500/20 px-2 py-0.5 rounded-full">Vegan</span>}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <span className="font-serif text-xl font-bold text-amber-500 whitespace-nowrap">
                                                        €{pizza.price}
                                                    </span>
                                                </div>

                                                {/* Description */}
                                                <p className="font-serif text-sm italic text-stone-400 leading-relaxed">
                                                    {pizza.description}
                                                </p>
                                                
                                                {/* Footer Info */}
                                                <div className="mt-auto pt-4 flex flex-wrap gap-3 text-xs text-stone-500 border-t border-stone-800/50">
                                                    {pizza.allergens && pizza.allergens.length > 0 && (
                                                        <span className="flex items-center gap-1.5" title="Allergeni">
                                                            <Info size={12} />
                                                            {pizza.allergens.join(", ")}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Category Footer Decor */}
                                    <div className="h-2 w-full bg-gradient-to-r from-transparent via-stone-800/30 to-transparent" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            })}
        </div>
      </div>
    </section>
  );
};
