"use client";

import { useState, MouseEvent } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";
import { menuCategories, pizzas } from "@/data";
import { X, Info, Wine, Wheat } from "lucide-react";
import { cn } from "@/lib/utils";

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
        "group relative border border-stone-800 bg-stone-950/50 overflow-hidden rounded-xl cursor-pointer",
        className
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(245, 158, 11, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full p-6">{children}</div>
    </motion.div>
  );
}

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("classiche");
  const [selectedPizzaId, setSelectedPizzaId] = useState<number | null>(null);

  const filteredPizzas = pizzas.filter((p) => p.category === activeCategory);

  return (
    <section className="min-h-screen bg-stone-900 py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center font-serif text-4xl font-bold text-amber-500 md:text-6xl"
        >
          Il Nostro Menu
        </motion.h2>

        {/* Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedPizzaId(null);
              }}
              className={cn(
                "relative rounded-full px-6 py-2 text-lg font-medium transition-colors",
                activeCategory === cat.id
                  ? "text-stone-950"
                  : "text-stone-400 hover:text-white"
              )}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-amber-500"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredPizzas.map((pizza) => (
              <SpotlightCard
                layoutId={`card-${pizza.id}`}
                key={pizza.id}
                onClick={() => setSelectedPizzaId(pizza.id)}
                className="hover:border-amber-500/50"
              >
                <motion.h3 layoutId={`title-${pizza.id}`} className="mb-2 font-serif text-2xl font-bold text-white">
                  {pizza.name}
                </motion.h3>
                <motion.p layoutId={`price-${pizza.id}`} className="text-xl font-semibold text-amber-500">
                  €{pizza.price}
                </motion.p>
              </SpotlightCard>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Expanded Card Modal */}
        <AnimatePresence>
          {selectedPizzaId && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPizzaId(null)}
                className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              />
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                {pizzas
                  .filter((p) => p.id === selectedPizzaId)
                  .map((pizza) => (
                    <motion.div
                      layoutId={`card-${pizza.id}`}
                      key={pizza.id}
                      className="pointer-events-auto relative w-full max-w-2xl overflow-hidden rounded-3xl border border-stone-700 bg-stone-900 shadow-2xl"
                    >
                      <button
                        onClick={() => setSelectedPizzaId(null)}
                        className="absolute right-4 top-4 z-10 rounded-full bg-stone-800 p-2 text-stone-400 hover:text-white"
                      >
                        <X size={24} />
                      </button>
                      
                      <div className="p-8">
                        <motion.h3 layoutId={`title-${pizza.id}`} className="mb-2 font-serif text-4xl font-bold text-amber-500">
                          {pizza.name}
                        </motion.h3>
                        <motion.p layoutId={`price-${pizza.id}`} className="mb-6 text-2xl font-semibold text-white">
                          €{pizza.price}
                        </motion.p>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <p className="mb-8 text-lg text-stone-300 leading-relaxed">
                            {pizza.description}
                          </p>

                          <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-xl bg-stone-800/50 p-4">
                              <div className="mb-2 flex items-center gap-2 text-amber-500">
                                <Wheat size={20} />
                                <h4 className="font-bold">Allergeni</h4>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {pizza.allergens.map((a) => (
                                  <span key={a} className="rounded-full bg-stone-800 px-3 py-1 text-sm text-stone-300">
                                    {a}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="rounded-xl bg-stone-800/50 p-4">
                              <div className="mb-2 flex items-center gap-2 text-amber-500">
                                <Wine size={20} />
                                <h4 className="font-bold">Abbinamento</h4>
                              </div>
                              <p className="text-stone-300">{pizza.pairing}</p>
                            </div>
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
