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

          {/* Right Side: Aesthetic Portrait Frame & 3D Ornaments */}
          <div className="relative h-[390px] sm:h-[440px] md:h-[470px] w-full flex items-center justify-center mt-6 lg:mt-0">

            {/* Background Clouds */}
            <div className="cloud animate-float" style={{ top: '6%', left: '4%', width: '85px', height: '52px' }}></div>
            <div className="cloud animate-floatSlow" style={{ top: '12%', right: '6%', width: '105px', height: '62px' }}></div>

            {/* Ambient Radiant Glow behind Photo */}
            <div className="absolute w-[270px] h-[270px] sm:w-[320px] sm:h-[320px] rounded-full bg-gradient-to-tr from-[#F9A8D4] via-[#F472B6] to-[#D946A6] opacity-35 blur-3xl animate-pulseCustom"></div>

            {/* The Monitor (Existing Ornament) */}
            <div className="monitor animate-floatSlow z-10" style={{ top: '25px', right: '40px' }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl">💻</div>
            </div>

            {/* Main Portrait Frame with Kevina's Photo */}
            <div className="relative z-20 animate-float flex flex-col items-center">
              <div className="w-[215px] h-[215px] sm:w-[255px] sm:h-[255px] md:w-[285px] md:h-[285px] rounded-full p-2 bg-gradient-to-tr from-[#F9A8D4] via-[#EC4899] to-[#D946A6] shadow-[0_20px_60px_rgba(217,70,166,0.35)] ring-4 ring-white/80">
                <div className="w-full h-full rounded-full overflow-hidden bg-white/95 border-4 border-white shadow-inner relative group">
                  <img
                    src="/kevina.webp"
                    alt="Kevina Maydiva Heriansaputri"
                    className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Soft Gradient Overlay for harmonious aesthetic blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/10 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Floating Verified Artisan Badge */}
              <div className="absolute -bottom-3 sm:-bottom-4 bg-white/95 backdrop-blur-md border border-pink-200 shadow-xl px-4 py-1.5 rounded-full flex items-center gap-2 z-30 animate-floatSlow">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D946A6]"></span>
                </span>
                <span className="text-xs font-bold text-gray-800 tracking-wide font-sans">
                  Kevina Maydiva
                </span>
                <span className="text-[11px] text-[#D946A6] font-semibold bg-pink-50 px-2 py-0.5 rounded-full border border-pink-100">
                  S.Kom
                </span>
              </div>
            </div>

            {/* The Laptop (Existing Ornament) */}
            <div className="laptop animate-float z-30" style={{ bottom: '25px', left: '35px' }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg">💖</div>
            </div>

            {/* Floating Code Elements (Existing Ornaments) */}
            <div className="absolute top-[10%] left-[8%] text-3xl text-pink-400 font-mono font-bold animate-float drop-shadow-sm">
              &lt;div&gt;
            </div>
            <div className="absolute bottom-[14%] right-[10%] text-2xl text-pink-500 font-mono font-bold animate-floatSlow drop-shadow-sm">
              function()
            </div>
            <div className="absolute bottom-[20%] left-[6%] text-xl text-pink-300 font-mono font-bold animate-pulseCustom">
              const
            </div>

            {/* Extra Decorations (Existing Ornaments) */}
            <div className="absolute top-[58%] left-[2%] text-3xl animate-pulseCustom">💖</div>
            <div className="absolute top-[28%] right-[6%] text-2xl animate-sparkle">✨</div>

          </div>

        </div>
      </section>
    </main>
  );
}