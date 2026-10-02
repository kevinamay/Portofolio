import React from 'react';
import Navbar from '@/components/Navbar';
import PortfolioClient from '@/components/PortfolioClient';
import { getEnrichedRepos } from '@/lib/projectsData';

// Revalidate data every 60 seconds for live updates
export const revalidate = 60;

export default async function Portfolio() {
  const repos = await getEnrichedRepos();

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#FFF0F5] via-[#FFE4E9] to-[#FFF5F8]">

      {/* --- BACKGROUND DECORATIONS --- */}
      <div className="absolute top-[8%] left-[3%] w-24 h-24 rounded-full bg-gradient-to-br from-pink-300/20 to-pink-200/20 shadow-xl animate-float"></div>
      <div className="absolute top-[45%] right-[5%] w-20 h-20 rounded-[20%] bg-pink-100/30 animate-floatSlow"></div>
      <div className="absolute bottom-[20%] left-[8%] w-24 h-24 rounded-[30%_70%_70%_30%] bg-pink-50/40 animate-pulseCustom"></div>

      {/* Floating Code Symbols */}
      <div className="absolute top-[25%] right-[12%] text-5xl text-pink-300/30 font-mono font-bold animate-pulseCustom">&lt;/&gt;</div>
      <div className="absolute bottom-[30%] right-[20%] text-4xl text-pink-200/30 font-mono font-bold animate-float">{"{}"}</div>
      <div className="absolute top-[70%] left-[5%] text-4xl text-pink-300/30 font-mono font-bold animate-floatSlow">[ ]</div>

      {/* --- NAVBAR --- */}
      <Navbar />

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto relative z-10 py-16 px-6 md:px-8">

        {/* Header Section */}
        <header className="text-center mb-12 max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-bold text-[#D946A6] bg-pink-100/80 px-4 py-1.5 rounded-full inline-block mb-4 shadow-sm">
            Live Projects &amp; Repositories
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#D946A6] font-serif tracking-wide">
            My Portfolio
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed font-sans">
            Koleksi karya rekayasa perangkat lunak saya yang mencakup pengembangan web full-stack, aplikasi mobile Flutter, hingga modul praktikum dan bahan ajar perkuliahan. Data disinkronkan langsung dari repositori GitHub.
          </p>
        </header>

        {/* Interactive Client Grid with Search, Filter & Sort */}
        <PortfolioClient initialRepos={repos} />

      </div>
    </main>
  );
}
