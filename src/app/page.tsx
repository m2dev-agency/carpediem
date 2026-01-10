import { MenuSection } from "@/components/MenuSection";
import { Footer } from "@/components/Footer";
import { ChefSection } from "@/components/ChefSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { LocationsSection } from "@/components/LocationsSection";
import { HeroStory } from "@/components/HeroStory";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-stone-950 text-stone-50">
      <section id="home">
        <HeroStory />
      </section>
      <section id="philosophy">
        <PhilosophySection />
        <ChefSection />
      </section>
      <section id="locations">
        <LocationsSection />
      </section>
      <section id="menu">
        <MenuSection />
      </section>
      <Footer />
    </main>
  );
}
