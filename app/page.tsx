import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#FFF5F8] via-[#FFF0F5] to-[#FFE8F0]">

      {/* --- BACKGROUND DECORATIONS (Floating Shapes) --- */}
      <div className="absolute top-[10%] left-[8%] w-24 h-24 rounded-full bg-gradient-to-br from-pink-300/30 to-pink-200/30 shadow-2xl animate-float"></div>
      <div className="absolute bottom-[20%] left-[12%] w-20 h-20 rounded-[30%_70%_70%_30%] bg-pink-100/40 animate-pulseCustom"></div>

      {/* Code Symbols Background */}
      <div className="absolute top-[15%] right-[20%] text-6xl text-pink-300/40 font-mono font-bold animate-pulseCustom">&lt;/&gt;</div>
      <div className="absolute top-[50%] left-[10%] text-5xl text-pink-200/40 font-mono font-bold animate-float">{"{}"}</div>
      <div className="absolute bottom-[25%] right-[15%] text-5xl text-pink-300/40 font-mono font-bold animate-floatSlow">[ ]</div>

      {/* Sparkles */}
      <div className="absolute top-[20%] left-[20%] text-2xl animate-sparkle">✨</div>
      <div className="absolute top-[40%] right-[25%] text-2xl animate-sparkle delay-700">✨</div>
      <div className="absolute bottom-[30%] left-[15%] text-2xl animate-sparkle delay-1000">✨</div>

      {/* --- NAVBAR --- */}
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 px-6 sm:px-8 py-10 lg:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side: Typography */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="font-serif font-black text-[clamp(1.5rem,7vw,4rem)] md:text-6xl lg:text-7xl leading-[1.1] tracking-tight md:tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#D946A6] via-[#EC4899] to-[#F9A8D4] whitespace-nowrap">
              KEVINA<br />MAYDIVA<br />HERIANSAPUTRI
            </h1>
            <h2 className="font-sans text-2xl md:text-3xl font-bold text-[#DB2777]">
              I am a Programmer
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-sans">
              Passionate frontend developer with a strong focus on database management and modern web technologies.
              I create beautiful, functional, and user-centered digital experiences that bring ideas to life.
              Currently teaching MySQL and web development as a Teaching Assistant at Universitas Teknologi Yogyakarta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Link href="/about" className="bg-gradient-to-r from-[#F9A8D4] to-[#F687B3] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition">
                Get In Touch
              </Link>
              <Link href="/portfolio" className="border-2 border-[#F9A8D4] text-[#D946A6] font-semibold px-8 py-3 rounded-full hover:bg-pink-50 transition">
                View Portfolio
              </Link>
            </div>
          </div>

          {/* Right Side: High-End Aesthetic Portrait Card & Ornaments */}
          <div className="relative h-[430px] sm:h-[480px] md:h-[510px] w-full flex items-center justify-center mt-8 lg:mt-0">

            {/* Background Clouds */}
            <div className="cloud animate-float" style={{ top: '4%', left: '8%', width: '90px', height: '55px' }}></div>
            <div className="cloud animate-floatSlow" style={{ top: '8%', right: '10%', width: '110px', height: '65px' }}></div>

            {/* Soft Ambient Light Glow behind Card */}
            <div className="absolute w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-pink-300/20 via-pink-200/20 to-purple-200/20 blur-3xl -z-10 pointer-events-none"></div>

            {/* The Monitor (Floating Top-Right) */}
            <div className="monitor animate-floatSlow z-30" style={{ top: '20px', right: '25px' }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl">💻</div>
            </div>

            {/* Main Aesthetic Portrait Card (Modern Glassmorphism) */}
            <div className="relative z-20 animate-float">
              <div className="w-[260px] sm:w-[290px] md:w-[310px] aspect-[3/4] rounded-[2.5rem] p-3 bg-white/70 backdrop-blur-xl border-2 border-white/90 shadow-[0_20px_50px_-10px_rgba(217,70,166,0.18)] transition-all duration-500 hover:shadow-[0_25px_60px_-10px_rgba(217,70,166,0.25)] hover:-translate-y-1">
                <div className="w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-b from-pink-50/60 via-white to-pink-50/40 relative shadow-inner">
                  <img
                    src="/kevina.webp"
                    alt="Kevina Maydiva Heriansaputri"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105 select-none"
                  />
                  {/* Gentle gradient overlay at bottom edge for seamless blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/10 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* The Laptop (Floating Bottom-Left) */}
            <div className="laptop animate-float z-30" style={{ bottom: '15px', left: '25px' }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg">💖</div>
            </div>

            {/* Floating Code Elements with Clean Margins */}
            <div className="absolute top-[6%] left-[10%] text-3xl text-pink-400/80 font-mono font-bold animate-float drop-shadow-sm select-none">
              &lt;div&gt;
            </div>
            <div className="absolute bottom-[20%] right-[6%] text-2xl text-pink-500/80 font-mono font-bold animate-floatSlow drop-shadow-sm select-none">
              function()
            </div>
            <div className="absolute bottom-[16%] left-[8%] text-xl text-pink-300/80 font-mono font-bold animate-pulseCustom select-none">
              const
            </div>

            {/* Extra Delicate Decorations */}
            <div className="absolute top-[52%] left-[4%] text-2xl animate-pulseCustom select-none">💖</div>
            <div className="absolute top-[24%] right-[8%] text-2xl animate-sparkle select-none">✨</div>

          </div>

        </div>
      </section>
    </main>
  );
}