import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar'; export default function Home() {
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
      <section className="relative z-10 px-8 py-12 lg:py-20 max-w-7xl mx-auto">
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

          {/* Right Side: 3D Illustration (Reconstructed from Canva CSS) */}
          <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center mt-12 lg:mt-0">

            {/* Background Clouds */}
            <div className="cloud animate-float" style={{ top: '10%', left: '5%', width: '80px', height: '50px' }}></div>
            <div className="cloud animate-floatSlow" style={{ top: '20%', right: '10%', width: '100px', height: '60px' }}></div>

            {/* The Monitor */}
            <div className="monitor animate-floatSlow z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl">💻</div>
            </div>

            {/* The Character (Programmer Girl) */}
            <div className="character animate-float z-20">
              {/* Rambut/Badan */}
              <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[60px] h-[60px] bg-white rounded-full shadow-sm"></div>
              <div className="absolute top-[35%] left-[35%] w-3 h-3 bg-gray-800 rounded-full"></div>
              <div className="absolute top-[35%] right-[35%] w-3 h-3 bg-gray-800 rounded-full"></div>
              {/* Senyum */}
              <div className="absolute top-[48%] left-[50%] -translate-x-1/2 w-5 h-2.5 bg-pink-300 rounded-b-full"></div>
              {/* Baju */}
              <div className="absolute top-[20%] left-[20%] right-[20%] h-10 bg-[#8B4F6F] rounded-t-[50px]"></div>
            </div>

            {/* Laptop */}
            <div className="laptop animate-float z-30">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg">💖</div>
            </div>

            {/* Floating Code Elements */}
            <div className="absolute top-[15%] left-[15%] text-3xl text-pink-400 font-mono font-bold animate-float">
              &lt;div&gt;
            </div>
            <div className="absolute bottom-[20%] right-[20%] text-2xl text-pink-500 font-mono font-bold animate-floatSlow">
              function()
            </div>
            <div className="absolute bottom-[20%] left-[10%] text-xl text-pink-300 font-mono font-bold animate-pulseCustom">
              const
            </div>

            {/* Extra Decorations */}
            <div className="absolute top-[60%] left-[5%] text-3xl animate-pulseCustom">💖</div>

          </div>

        </div>
      </section>
    </main>
  );
}