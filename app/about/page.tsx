import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { BookOpen, CheckCircle2, Code2, Database, Terminal, Layout } from 'lucide-react';

export default function About() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#FFF5F7] via-[#FFF0F5] to-[#FFE8F0]">

      {/* --- BACKGROUND DECORATIONS --- */}
      <div className="absolute top-[8%] left-[5%] w-32 h-32 rounded-full bg-gradient-to-br from-pink-300/20 to-pink-200/20 shadow-2xl animate-float"></div>
      <div className="absolute top-[40%] right-[6%] w-24 h-24 rounded-2xl bg-pink-100/30 rotate-45 animate-floatSlow"></div>
      <div className="absolute bottom-[15%] left-[10%] w-24 h-24 rounded-[30%_70%_70%_30%] bg-pink-50/40 animate-pulseCustom"></div>

      {/* Floating Symbols */}
      <div className="absolute top-[20%] right-[15%] text-6xl text-pink-300/30 font-mono font-bold animate-pulseCustom">&lt;/&gt;</div>
      <div className="absolute bottom-[25%] right-[25%] text-5xl text-pink-200/30 font-mono font-bold animate-float">{"{}"}</div>

      {/* --- NAVBAR --- */}
      <Navbar />

      {/* --- MAIN CONTENT (BENTO GRID) --- */}
      <div className="max-w-7xl mx-auto relative z-10 py-10 px-6 md:px-8">

        {/* GRID SYSTEM */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* 1. BIO CARD */}
          <div className="lg:col-span-2 bg-white/70 backdrop-blur-xl border border-white/80 shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="mb-6">
              <h1 className="text-3xl md:text-5xl font-bold mb-2 text-[#D946A6] tracking-wide font-serif">
                KEVINA MAYDIVA HERIANSAPUTRI
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-gray-700">
                Frontend Developer & Database Focus
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                Passionate about building modern, responsive interfaces with clean code and intuitive user experiences.
                Skilled in frontend technologies and database management, I create digital solutions that combine aesthetic appeal with robust functionality.
              </p>

              {/* Teaching Assistant Section */}
              <div className="bg-pink-50 border-l-4 border-[#F9A8D4] rounded-r-xl p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
                  <BookOpen className="text-[#D946A6]" size={24} />
                  Teaching Assistant Experience
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  Currently serving as a Teaching Assistant (Asdos) at <span className="font-semibold text-[#D946A6]">Universitas Teknologi Yogyakarta</span>.
                  In Semester 6, I assisted with MySQL database courses. In Semester 8, I expanded my teaching role to support practicum classes across multiple subjects including
                  <span className="font-semibold"> Java, Python, Web Design,</span> and <span className="font-semibold">Data Structures</span>.
                </p>
              </div>
            </div>
          </div>

          {/* 2. SKILLS CARD */}
          <div className="lg:row-span-2 bg-white/70 backdrop-blur-xl border border-white/80 shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-[#D946A6] border-b border-pink-100 pb-2">Skills & Tech Stack</h2>

            {/* Languages */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Languages</h3>
              <div className="space-y-4">
                {/* HTML & CSS */}
                <div>
                  <div className="flex gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-600 flex items-center gap-1"><Code2 size={12} /> HTML</span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-600 flex items-center gap-1"><Layout size={12} /> CSS</span>
                  </div>
                  <div className="w-full bg-pink-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-pink-400 to-[#D946A6] h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                {/* JS */}
                <div>
                  <div className="flex gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700 flex items-center gap-1"><Terminal size={12} /> JavaScript</span>
                  </div>
                  <div className="w-full bg-pink-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-pink-400 to-[#D946A6] h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                {/* Python & Java */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">Python</span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-600">Java</span>
                </div>
              </div>
            </div>

            {/* Frameworks */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-800 border border-gray-200">Next.js</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-600 border border-indigo-200">Bootstrap</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-100 text-cyan-600 border border-cyan-200">Tailwind</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-600 border border-sky-200">Flutter</span>
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700">Git</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700">Firebase</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 flex items-center gap-1"><Database size={12} /> MySQL</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-700">VS Code</span>
              </div>
            </div>
          </div>

          {/* 3. EDUCATION CARD */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/80 shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-[#D946A6] mb-6">Education</h2>
            <div className="flex gap-4">
              {/* Timeline Line */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 to-[#D946A6] shadow-lg"></div>
                <div className="w-0.5 h-full bg-gradient-to-b from-pink-300 to-transparent mt-1"></div>
              </div>
              {/* Content */}
              <div className="pb-2">
                <h3 className="text-lg font-bold text-gray-800">Informatika</h3>
                <p className="text-gray-600 font-medium">Universitas Teknologi Yogyakarta</p>
                <p className="text-sm text-pink-500 mt-1 font-semibold">2022 – Sekarang</p>
              </div>
            </div>
          </div>

          {/* 4. SOFT SKILLS CARD */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/80 shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-[#D946A6] mb-6">Soft Skills</h2>
            <div className="space-y-4">
              {['Problem Solving', 'Teamwork', 'Fast Learner', 'Time Management'].map((skill) => (
                <div key={skill} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#D946A6] to-pink-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={14} className="text-white" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-[#D946A6] transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}