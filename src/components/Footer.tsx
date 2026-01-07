import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-stone-950 py-12 text-stone-400 border-t border-stone-900">
      <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 md:flex-row">
        <div className="text-center md:text-left">
          <h3 className="mb-2 font-serif text-2xl font-bold text-white">Carpe Diem</h3>
          <p className="text-sm">© 2024 Carpe Diem Pizza. All rights reserved.</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-amber-500 transition-colors"><Instagram /></a>
          <a href="#" className="hover:text-amber-500 transition-colors"><Facebook /></a>
          <a href="#" className="hover:text-amber-500 transition-colors"><Twitter /></a>
        </div>

        <div className="text-center md:text-right">
          <button className="rounded-full bg-amber-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-amber-500">
            Prenota Ora
          </button>
        </div>
      </div>
    </footer>
  );
};
