import React from 'react';
import Navbar from '@/components/Navbar';
import ExperienceClient from '@/components/ExperienceClient';
import { Briefcase } from 'lucide-react';

export default function ExperiencePage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#FFF5F8] via-[#FFF0F5] to-[#FFE8F0]">

      {/* --- BACKGROUND DECORATIONS --- */}
      <div className="absolute top-[8%] left-[4%] w-28 h-28 rounded-full bg-gradient-to-br from-pink-300/20 to-pink-200/20 shadow-2xl animate-float"></div>
      <div className="absolute top-[35%] right-[5%] w-20 h-20 rounded-[25%] bg-pink-100/30 rotate-12 animate-floatSlow"></div>
      <div className="absolute bottom-[18%] left-[8%] w-24 h-24 rounded-[30%_70%_70%_30%] bg-pink-50/40 animate-pulseCustom"></div>

      {/* Floating Code Symbols */}
      <div className="absolute top-[20%] right-[12%] text-6xl text-pink-300/30 font-mono font-bold animate-pulseCustom">&lt;/&gt;</div>
      <div className="absolute top-[60%] left-[6%] text-5xl text-pink-200/30 font-mono font-bold animate-float">{"{}"}</div>
      <div className="absolute bottom-[28%] right-[18%] text-5xl text-pink-300/30 font-mono font-bold animate-floatSlow">[ ]</div>

      {/* Sparkles */}
      <div className="absolute top-[22%] left-[15%] text-2xl animate-sparkle">✨</div>
      <div className="absolute top-[48%] right-[22%] text-2xl animate-sparkle delay-700">✨</div>
      <div className="absolute bottom-[25%] left-[20%] text-2xl animate-sparkle delay-1000">✨</div>

      {/* --- NAVBAR --- */}
      <Navbar />

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="max-w-7xl mx-auto relative z-10 py-12 px-6 md:px-8">

        {/* Header Section */}
        <header className="text-center mb-14 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-pink-100/80 text-[#D946A6] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
            <Briefcase size={14} />
            <span>Career Milestones &amp; Track Record</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#D946A6] font-serif tracking-wide">
            Work Experience
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-sans max-w-3xl mx-auto">
            Perjalanan profesional saya dalam evaluasi model AI, pengajaran akademik sebagai asisten praktikum di Universitas Teknologi Yogyakarta, hingga pengembangan web frontend berbasis React.
          </p>
        </header>

        {/* Experience Content Component */}
        <ExperienceClient />

      </div>

    </main>
  );
}
