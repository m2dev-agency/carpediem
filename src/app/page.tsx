import { Hero } from "@/components/Hero";
import { PizzaScrollStory } from "@/components/PizzaScrollStory";
import { MenuSection } from "@/components/MenuSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-stone-950 text-stone-50">
      <Hero />
      <PizzaScrollStory />
      <MenuSection />
      <Footer />
    </main>
  );
}
