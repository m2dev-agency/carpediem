import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/ui/CustomCursor";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Carpe Diem Pizza",
  description: "Diversamente Pizza - Pizzeria Gourmet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={cn(inter.variable, playfair.variable, "font-sans bg-stone-950 text-stone-50 antialiased")}>
        <Preloader />
        <CustomCursor />
        <Navbar />
        <SmoothScroll>
          <NoiseOverlay />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
