import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

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
    <html lang="it">
      <body className={cn(inter.variable, playfair.variable, "font-sans bg-stone-950 text-stone-50 antialiased")}>
        <SmoothScroll>
          <NoiseOverlay />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
