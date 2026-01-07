/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <--- Questo dice a Next di generare HTML statico
  distDir: 'dist', // <--- Cartella di output personalizzata
  images: {
    unoptimized: true, // <--- Necessario per export statico (se usi <Image>)
  },
};

export default nextConfig;