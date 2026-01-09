"use client";

import { useState, MouseEvent, useRef } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";
import { locations, menuCategories, menuByLocation } from "@/data";
import { X, Wine, Wheat, MapPin, Sparkles, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// ==========================================
// SPOTLIGHT CARD (Pizza Card with hover glow)
// ==========================================
function SpotlightCard({ children, className, onClick, layoutId }: any) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      layoutId={layoutId}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative border border-stone-800 bg-stone-950/50 overflow-hidden rounded-2xl cursor-pointer",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(245, 158, 11, 0.2),
              transparent 70%
            )
          `,
        }}
      />
      {/* Top glow line on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative h-full p-6">{children}</div>
    </motion.div>
  );
}

// ==========================================
// LOCATION CARD (Immersive Location Picker)
// ==========================================
function LocationCard({ 
  location, 
  isActive, 
  onClick 
}: { 
  location: typeof locations[0]; 
  isActive: boolean; 
  onClick: () => void;
}) {
  return (
    <motion.div
      onClick={onClick}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-500",
        isActive 
          ? "border-amber-500/50 ring-2 ring-amber-500/20" 
          : "border-stone-800 hover:border-stone-700"
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Background Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={location.image || "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"}
          alt={location.name}
          fill
          className={cn(
            "object-cover transition-all duration-700",
            isActive ? "scale-100 grayscale-0" : "scale-110 grayscale group-hover:scale-105 group-hover:grayscale-0"
          )}
        />
        {/* Overlay Gradient */}
        <div className={cn(
          "absolute inset-0 transition-opacity duration-500",
          isActive 
            ? "bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" 
            : "bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/40"
        )} />
        
        {/* Active Indicator */}
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500"
          >
            <ChevronRight size={16} className="text-stone-950" />
          </motion.div>
        )}

        {/* Promo Badge */}
        {location.promo && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/20 px-3 py-1 text-xs font-bold tracking-wider text-amber-400 backdrop-blur-sm">
              <Sparkles size={12} />
              {location.promo.badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative bg-stone-950/80 p-5 backdrop-blur-sm">
        <div className="flex items-start justify-between">
          <div>
            <h3 className={cn(
              "font-serif text-2xl font-bold transition-colors",
              isActive ? "text-amber-500" : "text-white"
            )}>
              {location.name}
            </h3>
            <div className="mt-1 flex items-center gap-2 text-stone-400">
              <MapPin size={14} />
              <p className="text-sm">{location.address}</p>
            </div>
          </div>
        </div>

        {/* Promo Preview */}
        {location.promo && (
          <motion.div 
            className={cn(
              "mt-4 overflow-hidden transition-all duration-500",
              isActive ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <p className="text-sm font-medium text-amber-400">{location.promo.title}</p>
            <p className="mt-1 text-xs text-stone-400">{location.promo.description}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// ==========================================
// MAIN MENU SECTION
// ==========================================
export const MenuSection = () => {
  const containerRef = useRef(null);
  const [activeLocationId, setActiveLocationId] = useState<number>(locations[0]?.id ?? 1);
  const activeLocation = locations.find((l) => l.id === activeLocationId) ?? locations[0];
  const locationMenu = menuByLocation[activeLocationId] ?? Object.values(menuByLocation)[0];

  const availableCategoryIds = menuCategories
    .map((c) => c.id)
    .filter((categoryId) => locationMenu.pizzas.some((p) => p.category === categoryId));

  const [activeCategory, setActiveCategory] = useState<string>(availableCategoryIds[0] ?? "classiche");
  const [selectedPizzaId, setSelectedPizzaId] = useState<number | null>(null);

  const filteredPizzas = locationMenu.pizzas.filter((p) => p.category === activeCategory);

  // Parallax for section title
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-stone-950 py-24 px-4">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-[600px] w-[600px] rounded-full bg-amber-500/5 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-amber-600/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <motion.div style={{ y: titleY }} className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-500"
          >
            Esplora i sapori
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl font-bold text-white md:text-7xl"
          >
            Il Menu
          </motion.h2>
        </motion.div>

        {/* ========== STEP 1: Location Selector ========== */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex items-center justify-center gap-3"
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-stone-800" />
            <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Seleziona la tua sede</p>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-stone-800" />
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((loc, index) => (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <LocationCard
                  location={loc}
                  isActive={activeLocationId === loc.id}
                  onClick={() => {
                    setActiveLocationId(loc.id);
                    setSelectedPizzaId(null);
                    const nextMenu = menuByLocation[loc.id] ?? Object.values(menuByLocation)[0];
                    const nextCats = menuCategories
                      .map((c) => c.id)
                      .filter((categoryId) => nextMenu.pizzas.some((p) => p.category === categoryId));
                    setActiveCategory(nextCats[0] ?? "classiche");
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========== ACTIVE LOCATION PROMO BANNER ========== */}
        <AnimatePresence mode="wait">
          {activeLocation?.promo && (
            <motion.div
              key={`promo-${activeLocationId}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16 overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-stone-950 to-stone-950">
                {/* Decorative Elements */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
                <div className="pointer-events-none absolute -left-10 -bottom-10 h-48 w-48 rounded-full bg-amber-600/10 blur-2xl" />
                
                <div className="relative p-8 md:p-12">
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="max-w-2xl">
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-1.5 text-sm font-bold text-stone-950"
                      >
                        <Sparkles size={14} />
                        {activeLocation.promo.badge}
                      </motion.div>
                      <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="font-serif text-4xl font-bold text-white md:text-5xl"
                      >
                        {activeLocation.promo.title}
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-4 font-serif text-lg italic text-stone-300"
                      >
                        {activeLocation.promo.description}
                      </motion.p>
                    </div>

                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex-shrink-0"
                    >
                      <div className="rounded-2xl border border-stone-800 bg-stone-900/80 p-6 backdrop-blur-sm">
                        <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Disponibile a</p>
                        <p className="mt-2 font-serif text-2xl font-bold text-amber-500">{activeLocation.name}</p>
                        <p className="mt-1 text-sm text-stone-400">{activeLocation.address}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========== CATEGORY TABS ========== */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {menuCategories
              .filter((cat) => availableCategoryIds.includes(cat.id))
              .map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSelectedPizzaId(null);
                  }}
                  className={cn(
                    "relative overflow-hidden rounded-full px-8 py-3 text-base font-medium transition-all duration-300",
                    activeCategory === cat.id
                      ? "text-stone-950"
                      : "border border-stone-800 text-stone-400 hover:border-stone-700 hover:text-white"
                  )}
                >
                  {activeCategory === cat.id && (
                    <motion.div
                      layoutId={`activeTab-${activeLocationId}`}
                      className="absolute inset-0 rounded-full bg-amber-500"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              ))}
          </div>
        </div>

        {/* ========== SPECIALS (If Available) ========== */}
        <AnimatePresence>
          {locationMenu.specials?.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-12"
            >
              <div className="mb-6 flex items-center gap-3">
                <Sparkles size={16} className="text-amber-500" />
                <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Specialità della casa</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {locationMenu.specials.map((special, index) => (
                  <motion.div
                    key={special.name}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-2xl border border-stone-800 bg-stone-900/50 p-6 transition-colors hover:border-amber-500/30"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="relative">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-serif text-xl font-bold text-white">{special.name}</h4>
                          <p className="mt-2 font-serif text-sm italic text-stone-400">{special.description}</p>
                        </div>
                        <p className="text-2xl font-bold text-amber-500">€{special.price}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========== PIZZA GRID ========== */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredPizzas.map((pizza) => (
              <SpotlightCard
                layoutId={`card-${activeLocationId}-${pizza.id}`}
                key={`${activeLocationId}-${pizza.id}`}
                onClick={() => setSelectedPizzaId(pizza.id)}
                className="hover:border-amber-500/30"
              >
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <motion.h3 
                      layoutId={`title-${activeLocationId}-${pizza.id}`} 
                      className="mb-2 font-serif text-2xl font-bold text-white"
                    >
                      {pizza.name}
                    </motion.h3>
                    <p className="line-clamp-2 font-serif text-sm italic text-stone-400">
                      {pizza.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <motion.p 
                      layoutId={`price-${activeLocationId}-${pizza.id}`} 
                      className="text-2xl font-bold text-amber-500"
                    >
                      €{pizza.price}
                      {pizza.priceNote && <span className="ml-1 text-sm font-normal text-stone-400">/{pizza.priceNote}</span>}
                    </motion.p>
                    <div className="flex items-center gap-2">
                      {pizza.isNew && (
                        <span className="rounded-full bg-amber-500 px-2 py-0.5 text-xs font-bold text-stone-950">NEW</span>
                      )}
                      {pizza.isVegan && (
                        <span className="rounded-full bg-green-600 px-2 py-0.5 text-xs font-bold text-white">VEGAN</span>
                      )}
                      <span className="rounded-full bg-stone-800 px-3 py-1 text-xs text-stone-400">
                        {menuCategories.find(c => c.id === pizza.category)?.label}
                      </span>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ========== EXPANDED PIZZA MODAL ========== */}
        <AnimatePresence>
          {selectedPizzaId && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPizzaId(null)}
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
              />
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                {locationMenu.pizzas
                  .filter((p) => p.id === selectedPizzaId)
                  .map((pizza) => (
                    <motion.div
                      layoutId={`card-${activeLocationId}-${pizza.id}`}
                      key={pizza.id}
                      className="pointer-events-auto relative w-full max-w-2xl overflow-hidden rounded-3xl border border-stone-700 bg-stone-900 shadow-2xl"
                    >
                      {/* Close Button */}
                      <button
                        onClick={() => setSelectedPizzaId(null)}
                        className="absolute right-4 top-4 z-10 rounded-full bg-stone-800 p-2.5 text-stone-400 transition-colors hover:bg-stone-700 hover:text-white"
                      >
                        <X size={20} />
                      </button>
                      
                      {/* Modal Content */}
                      <div className="p-8 md:p-10">
                        {/* Location Badge */}
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-stone-800 px-3 py-1 text-xs text-stone-400">
                          <MapPin size={12} />
                          {activeLocation.name}
                        </div>

                        <motion.h3 
                          layoutId={`title-${activeLocationId}-${pizza.id}`} 
                          className="mb-2 font-serif text-4xl font-bold text-white md:text-5xl"
                        >
                          {pizza.name}
                          {pizza.isNew && (
                            <span className="ml-3 inline-flex items-center rounded-full bg-amber-500 px-3 py-1 text-sm font-bold text-stone-950">NEW</span>
                          )}
                          {pizza.isVegan && (
                            <span className="ml-2 inline-flex items-center rounded-full bg-green-600 px-3 py-1 text-sm font-bold text-white">VEGAN</span>
                          )}
                        </motion.h3>
                        <motion.p 
                          layoutId={`price-${activeLocationId}-${pizza.id}`} 
                          className="mb-8 text-3xl font-bold text-amber-500"
                        >
                          €{pizza.price}
                          {pizza.priceNote && <span className="ml-2 text-lg font-normal text-stone-400">/ {pizza.priceNote}</span>}
                        </motion.p>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <p className="mb-8 font-serif text-lg italic text-stone-300 leading-relaxed">
                            {pizza.description}
                          </p>

                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="rounded-2xl bg-stone-800/50 p-5">
                              <div className="mb-3 flex items-center gap-2 text-amber-500">
                                <Wheat size={18} />
                                <h4 className="text-sm font-bold uppercase tracking-wider">Allergeni</h4>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {pizza.allergens.map((a) => (
                                  <span key={a} className="rounded-full bg-stone-800 px-3 py-1.5 text-sm text-stone-300">
                                    {a}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {pizza.pairing && (
                              <div className="rounded-2xl bg-stone-800/50 p-5">
                                <div className="mb-3 flex items-center gap-2 text-amber-500">
                                  <Wine size={18} />
                                  <h4 className="text-sm font-bold uppercase tracking-wider">Abbinamento</h4>
                                </div>
                                <p className="font-serif text-stone-300 italic">{pizza.pairing}</p>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
