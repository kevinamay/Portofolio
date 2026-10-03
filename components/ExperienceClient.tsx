'use client';

import React, { useState, useMemo } from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  Users,
  Award,
  BookOpen,
  Code2,
  BrainCircuit,
  Bot,
  Layers,
  ArrowUpRight,
  GraduationCap
} from 'lucide-react';
import {
  WORK_EXPERIENCES,
  LEADERSHIP_EXPERIENCES,
  CERTIFICATIONS_LIST,
  WorkExperience
} from '@/lib/experienceData';

type CategoryFilter = 'All' | 'AI & Machine Learning' | 'Asisten Praktikum & Akademik' | 'Frontend Engineering';

export default function ExperienceClient() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');

  // Count by category
  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryFilter, number> = {
      'All': WORK_EXPERIENCES.length,
      'AI & Machine Learning': 0,
      'Asisten Praktikum & Akademik': 0,
      'Frontend Engineering': 0,
    };
    WORK_EXPERIENCES.forEach((item) => {
      counts[item.category]++;
    });
    return counts;
  }, []);

  // Filtered work experiences
  const filteredExperiences = useMemo(() => {
    if (selectedCategory === 'All') return WORK_EXPERIENCES;
    return WORK_EXPERIENCES.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-16">

      {/* STATS OVERVIEW CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl p-5 text-center shadow-md hover:shadow-lg transition">
          <p className="text-3xl font-extrabold text-[#D946A6]">6</p>
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mt-1">Peran Kerja &amp; Asdos</p>
        </div>
        <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl p-5 text-center shadow-md hover:shadow-lg transition">
          <p className="text-3xl font-extrabold text-purple-600">100+</p>
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mt-1">Mahasiswa Dibimbing</p>
        </div>
        <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl p-5 text-center shadow-md hover:shadow-lg transition">
          <p className="text-3xl font-extrabold text-blue-600">2</p>
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mt-1">Peran Evaluasi AI</p>
        </div>
        <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl p-5 text-center shadow-md hover:shadow-lg transition">
          <p className="text-3xl font-extrabold text-emerald-600">9</p>
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mt-1">Sertifikasi &amp; Kursus</p>
        </div>
      </div>

      {/* CATEGORY FILTER TABS */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
        {(['All', 'AI & Machine Learning', 'Asisten Praktikum & Akademik', 'Frontend Engineering'] as CategoryFilter[]).map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-[#F9A8D4] to-[#D946A6] text-white shadow-md scale-105'
                  : 'bg-white/80 text-gray-700 hover:bg-pink-100 hover:text-[#D946A6] border border-pink-100 shadow-sm'
              }`}
            >
              <span>{cat === 'All' ? 'Semua Pengalaman' : cat}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                isActive ? 'bg-white/30 text-white' : 'bg-pink-100 text-[#D946A6]'
              }`}>
                {categoryCounts[cat]}
              </span>
            </button>
          );
        })}
      </div>

      {/* WORK EXPERIENCE TIMELINE / CARDS */}
      <section className="space-y-8 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 border-b border-pink-200/80 pb-3">
          <Briefcase className="text-[#D946A6]" size={26} />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-serif">
            Riwayat Pengalaman Kerja Profesional
          </h2>
        </div>

        <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 md:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-pink-300 before:via-pink-200 before:to-transparent">
          {filteredExperiences.map((exp, index) => (
            <article
              key={exp.id}
              className="relative pl-10 md:pl-16 group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute left-2.5 md:left-6.5 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#D946A6] shadow-md group-hover:scale-125 transition-transform duration-300 z-10"></div>

              {/* Main Card */}
              <div className={`bg-white/80 backdrop-blur-xl border ${
                exp.isCurrent ? 'border-pink-300 ring-2 ring-pink-200/60 shadow-pink-100/80' : 'border-white/90'
              } shadow-xl rounded-3xl p-6 md:p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}>

                {/* Top Row: Role, Status, and Period */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${exp.badgeColor}`}>
                        {exp.category}
                      </span>
                      {exp.isCurrent && (
                        <span className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                          Aktif Sekarang
                        </span>
                      )}
                      <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-md">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-[#D946A6] transition-colors font-serif">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-pink-700">
                      {exp.company}
                    </p>
                  </div>

                  {/* Metadata: Location & Period */}
                  <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-1.5 text-xs text-gray-500 bg-pink-50/50 lg:bg-transparent p-2.5 lg:p-0 rounded-xl">
                    <span className="flex items-center gap-1 font-semibold text-gray-700">
                      <Calendar size={14} className="text-[#D946A6]" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1 text-gray-600">
                      <MapPin size={14} className="text-pink-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Responsibilities Bullets */}
                <div className="space-y-2.5 my-5">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center text-[#D946A6] shrink-0 mt-0.5">
                        <CheckCircle2 size={13} strokeWidth={2.5} />
                      </div>
                      <p>{resp}</p>
                    </div>
                  ))}
                </div>

                {/* Skills Tags */}
                <div className="pt-4 border-t border-pink-100/70 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1">
                    Keahlian:
                  </span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-pink-50/80 text-pink-800 border border-pink-200/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LEADERSHIP & COMMUNITY INITIATIVES */}
      <section className="space-y-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 border-b border-pink-200/80 pb-3">
          <Users className="text-[#D946A6]" size={26} />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-serif">
            Kepemimpinan &amp; Organisasi
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {LEADERSHIP_EXPERIENCES.map((org) => (
            <div
              key={org.id}
              className="bg-white/80 backdrop-blur-xl border border-white/90 shadow-xl rounded-3xl p-6 md:p-8 hover:shadow-2xl transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 font-serif">
                    {org.role} — <span className="text-[#D946A6]">{org.organization}</span>
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                    <MapPin size={13} className="text-pink-400" />
                    <span>{org.location}</span>
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-pink-700 bg-pink-100 px-3 py-1.5 rounded-full self-start sm:self-auto">
                  <Calendar size={13} />
                  <span>{org.period}</span>
                </span>
              </div>

              <div className="space-y-2 mb-5">
                {org.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center text-[#D946A6] shrink-0 mt-0.5">
                      <CheckCircle2 size={13} strokeWidth={2.5} />
                    </div>
                    <p>{resp}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-pink-100">
                {org.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-gray-100 text-gray-700 border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS & CREDENTIALS FROM CV */}
      <section className="space-y-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3 border-b border-pink-200/80 pb-3">
          <Award className="text-[#D946A6]" size={26} />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-serif">
            Sertifikasi &amp; Pelatihan Profesional
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS_LIST.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white/75 backdrop-blur-xl border border-white/90 rounded-2xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    cert.type === 'Sertifikasi'
                      ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-white shadow-sm'
                      : 'bg-pink-100 text-[#D946A6]'
                  }`}>
                    {cert.type}
                  </span>
                  <span className="text-[11px] text-gray-500 font-medium">
                    {cert.period}
                  </span>
                </div>
                <h4 className="text-base font-bold text-gray-800 mb-1 leading-snug">
                  {cert.name}
                </h4>
                <p className="text-xs text-pink-600 font-medium">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-pink-50 flex items-center gap-1.5 text-xs text-gray-500">
                <CheckCircle2 size={13} className="text-emerald-500" />
                <span>Terverifikasi di CV Resmi</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
