'use client';

import React, { useState, useMemo } from 'react';
import {
  Github,
  ExternalLink,
  Search,
  Laptop,
  Smartphone,
  Terminal,
  Star,
  GitFork,
  Calendar,
  Sparkles,
  BookOpen,
  Globe,
  Layers,
  Code2,
  RefreshCw,
  X
} from 'lucide-react';
import { EnrichedRepo } from '@/lib/projectsData';

interface Props {
  initialRepos: EnrichedRepo[];
}

type CategoryType = 'All' | 'Web & Full-Stack' | 'Mobile App' | 'Academic & Teaching';
type SortType = 'recent' | 'name' | 'stars';

export default function PortfolioClient({ initialRepos }: Props) {
  const [repos, setRepos] = useState<EnrichedRepo[]>(initialRepos);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortType>('recent');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [refreshMessage, setRefreshMessage] = useState<string | null>(null);

  // Manual refresh from client to ensure immediate update after user pushes code
  const handleClientRefresh = async () => {
    setIsRefreshing(true);
    setRefreshMessage('Memeriksa pembaruan repository dari GitHub...');
    try {
      const res = await fetch('https://api.github.com/users/kevinamay/repos?per_page=100&sort=pushed&direction=desc', {
        headers: { 'Accept': 'application/vnd.github.v3+json' },
        cache: 'no-store'
      });
      if (res.ok) {
        const freshData = await res.json();
        if (Array.isArray(freshData) && freshData.length > 0) {
          // Dynamic import or mapping
          const { enrichRepo } = await import('@/lib/projectsData');
          const sorted = freshData
            .sort((a: any, b: any) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
            .map(enrichRepo);
          setRepos(sorted);
          setRefreshMessage('Berhasil memperbarui data langsung dari GitHub!');
        }
      } else {
        setRefreshMessage('Rate limit GitHub tercapai. Menggunakan data tersimpan terbaru.');
      }
    } catch (e) {
      setRefreshMessage('Gagal mengambil data live GitHub, menampilkan data cache.');
    } finally {
      setIsRefreshing(false);
      setTimeout(() => setRefreshMessage(null), 3500);
    }
  };

  // Counts for tabs
  const categoryCounts = useMemo(() => {
    const counts: Record<CategoryType, number> = {
      'All': repos.length,
      'Web & Full-Stack': 0,
      'Mobile App': 0,
      'Academic & Teaching': 0,
    };
    repos.forEach((r) => {
      if (counts[r.category] !== undefined) {
        counts[r.category]++;
      }
    });
    return counts;
  }, [repos]);

  // Filtered & Sorted repositories
  const filteredRepos = useMemo(() => {
    return repos
      .filter((repo) => {
        // Category filter
        if (selectedCategory !== 'All' && repo.category !== selectedCategory) {
          return false;
        }
        // Search query
        if (searchQuery.trim() !== '') {
          const query = searchQuery.toLowerCase();
          const matchTitle = repo.title.toLowerCase().includes(query);
          const matchName = repo.name.toLowerCase().includes(query);
          const matchDesc = repo.description.toLowerCase().includes(query);
          const matchTech = repo.techStack.some((t) => t.toLowerCase().includes(query));
          return matchTitle || matchName || matchDesc || matchTech;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'recent') {
          return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
        }
        if (sortBy === 'name') {
          return a.title.localeCompare(b.title);
        }
        if (sortBy === 'stars') {
          return b.stargazers_count - a.stargazers_count;
        }
        return 0;
      });
  }, [repos, selectedCategory, searchQuery, sortBy]);

  // Format date helper
  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch {
      return dateStr;
    }
  };

  // Render Mockup Icon and Frame
  const renderMockup = (repo: EnrichedRepo) => {
    if (repo.mockupType === 'phone') {
      return (
        <div className="flex justify-center mb-6">
          <div className="w-28 sm:w-32 aspect-[9/16] bg-slate-900 rounded-[2rem] p-2 shadow-xl border-4 border-pink-200/80 relative overflow-hidden group-hover:border-[#D946A6]/60 transition-colors">
            {/* Speaker & notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-700 rounded-full z-10"></div>
            <div className="w-full h-full rounded-[1.4rem] bg-gradient-to-br from-cyan-500/20 via-sky-400/20 to-blue-600/30 flex flex-col items-center justify-center p-3 text-center">
              <Smartphone size={32} className="text-cyan-500 mb-2 animate-bounce-slow" />
              <span className="text-[10px] font-bold text-gray-800 line-clamp-2 px-1">
                {repo.title}
              </span>
              <span className="mt-2 text-[9px] px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-700 font-semibold">
                Flutter / Dart
              </span>
            </div>
          </div>
        </div>
      );
    }

    if (repo.mockupType === 'code') {
      return (
        <div className="flex justify-center mb-6">
          <div className="w-full aspect-[16/9] bg-slate-900 rounded-xl p-2.5 shadow-lg border-2 border-slate-700 relative overflow-hidden flex flex-col group-hover:border-purple-400 transition-colors">
            {/* Terminal header */}
            <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
              <span className="text-[10px] text-slate-400 font-mono ml-2 truncate">
                {repo.name}
              </span>
            </div>
            {/* Terminal body */}
            <div className="flex-1 flex flex-col items-center justify-center p-2 text-center bg-slate-950/60 rounded mt-1.5">
              <Terminal size={30} className="text-emerald-400 mb-1" />
              <span className="text-[11px] font-mono text-emerald-300 font-semibold truncate max-w-full">
                {repo.techStack.join(' • ')}
              </span>
              <span className="text-[10px] text-slate-400 font-mono mt-1">
                Modul Ajar & Praktikum
              </span>
            </div>
          </div>
        </div>
      );
    }

    // Default: Laptop frame
    return (
      <div className="flex justify-center mb-6">
        <div className="w-full aspect-[16/9] bg-white rounded-xl p-2 shadow-lg border-2 border-pink-200/90 relative overflow-hidden flex flex-col group-hover:border-[#D946A6]/60 transition-colors">
          {/* Browser header */}
          <div className="flex items-center gap-1.5 pb-1.5 border-b border-pink-100 mb-1">
            <div className="w-2 h-2 rounded-full bg-pink-300"></div>
            <div className="w-2 h-2 rounded-full bg-pink-200"></div>
            <div className="w-2 h-2 rounded-full bg-pink-100"></div>
            <div className="flex-1 bg-pink-50 rounded px-2 py-0.5 text-[9px] text-pink-700 truncate font-mono ml-1">
              {repo.homepage || `https://${repo.name.toLowerCase()}.vercel.app`}
            </div>
          </div>
          {/* Browser body */}
          <div className="flex-1 rounded-lg bg-gradient-to-br from-pink-100/60 via-purple-50/50 to-pink-50/80 flex flex-col items-center justify-center p-3 text-center">
            <Laptop size={32} className="text-[#D946A6] mb-1.5" />
            <span className="text-xs font-bold text-gray-800 line-clamp-1">
              {repo.title}
            </span>
            <span className="text-[10px] text-pink-600 font-medium mt-0.5">
              {repo.category}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-10">

      {/* REFRESH NOTIFICATION BANNER */}
      {refreshMessage && (
        <div className="max-w-xl mx-auto bg-white/90 border border-pink-300 text-pink-700 px-4 py-2.5 rounded-2xl shadow-md text-sm text-center flex items-center justify-center gap-2 animate-fadeIn">
          <Sparkles size={16} className="text-[#D946A6]" />
          <span>{refreshMessage}</span>
        </div>
      )}

      {/* STATS OVERVIEW CARDS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
        <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl p-4 text-center shadow-md hover:shadow-lg transition">
          <p className="text-3xl font-extrabold text-[#D946A6]">{repos.length}</p>
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mt-1">Total Proyek</p>
        </div>
        <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl p-4 text-center shadow-md hover:shadow-lg transition">
          <p className="text-3xl font-extrabold text-blue-600">{categoryCounts['Web & Full-Stack']}</p>
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mt-1">Web & Full-Stack</p>
        </div>
        <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl p-4 text-center shadow-md hover:shadow-lg transition">
          <p className="text-3xl font-extrabold text-cyan-600">{categoryCounts['Mobile App']}</p>
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mt-1">Mobile Apps</p>
        </div>
        <div className="bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl p-4 text-center shadow-md hover:shadow-lg transition">
          <p className="text-3xl font-extrabold text-purple-600">{categoryCounts['Academic & Teaching']}</p>
          <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mt-1">Asdos & Modul</p>
        </div>
      </div>

      {/* FILTER, SEARCH, & SORT TOOLBAR */}
      <div className="bg-white/80 backdrop-blur-xl border border-white/90 shadow-xl rounded-3xl p-6 max-w-5xl mx-auto space-y-6">

        {/* Top Controls: Search + Sort + Live Refresh */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">

          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400" />
            <input
              type="text"
              placeholder="Cari proyek (e.g. Laravel, Flutter, MySQL, Java)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-2.5 rounded-full bg-pink-50/60 border border-pink-200 text-sm text-gray-700 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-[#D946A6]/40 focus:border-[#D946A6] transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Right Tools: Sort & Live Sync Button */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">Urutkan:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortType)}
                aria-label="Urutkan Proyek"
                className="bg-pink-50/60 border border-pink-200 text-xs font-semibold text-[#D946A6] rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300 cursor-pointer"
              >
                <option value="recent">Terbaru (Paling Baru Dikerjakan)</option>
                <option value="name">Nama Proyek (A - Z)</option>
                <option value="stars">Paling Banyak Bintang</option>
              </select>
            </div>

            <button
              onClick={handleClientRefresh}
              disabled={isRefreshing}
              title="Sinkronisasi data langsung dengan GitHub"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-pink-100 hover:bg-pink-200 text-[#D946A6] text-xs font-bold transition disabled:opacity-50"
            >
              <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} />
              <span className="hidden sm:inline">Sync GitHub</span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-pink-100/70">
          {(['All', 'Web & Full-Stack', 'Mobile App', 'Academic & Teaching'] as CategoryType[]).map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#F9A8D4] to-[#D946A6] text-white shadow-md scale-105'
                    : 'bg-pink-50/80 text-gray-600 hover:bg-pink-100/80 hover:text-[#D946A6]'
                }`}
              >
                <span>{cat === 'All' ? 'Semua Proyek' : cat === 'Academic & Teaching' ? 'Asisten Dosen & Modul' : cat}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                  isActive ? 'bg-white/30 text-white' : 'bg-pink-200/60 text-[#D946A6]'
                }`}>
                  {categoryCounts[cat]}
                </span>
              </button>
            );
          })}
        </div>

      </div>

      {/* RESULTS COUNT */}
      <div className="flex justify-between items-center text-xs font-semibold text-gray-500 max-w-7xl mx-auto px-2">
        <span>Menampilkan {filteredRepos.length} dari {repos.length} proyek</span>
        {searchQuery && (
          <span>Filter: &quot;{searchQuery}&quot;</span>
        )}
      </div>

      {/* PROJECT GRID */}
      {filteredRepos.length === 0 ? (
        <div className="text-center py-16 bg-white/50 backdrop-blur-md rounded-3xl border border-pink-200/60 max-w-xl mx-auto p-8 space-y-4">
          <div className="text-5xl">🔍</div>
          <h3 className="text-xl font-bold text-gray-800">Tidak ada proyek yang sesuai</h3>
          <p className="text-sm text-gray-600">
            Tidak ditemukan proyek yang cocok dengan kata kunci &quot;{searchQuery}&quot; atau kategori yang dipilih.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#F9A8D4] to-[#D946A6] text-white text-xs font-bold shadow-md hover:shadow-lg transition"
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRepos.map((repo) => {
            const isFeatured = repo.featured;

            return (
              <article
                key={repo.id}
                className={`group bg-white/75 backdrop-blur-xl border ${
                  isFeatured ? 'border-pink-300 ring-2 ring-pink-200/50 shadow-pink-100/60' : 'border-white/80'
                } shadow-xl rounded-3xl p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col relative`}
              >

                {/* Top Badges (Category & Featured) */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                    repo.category === 'Mobile App'
                      ? 'bg-cyan-100 text-cyan-700'
                      : repo.category === 'Academic & Teaching'
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-pink-100 text-pink-700'
                  }`}>
                    {repo.category}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {isFeatured && (
                      <span className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                        <Sparkles size={11} /> Featured
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="flex items-center gap-1 bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                        <Star size={12} className="text-yellow-500 fill-yellow-500" />
                        {repo.stargazers_count}
                      </span>
                    )}
                  </div>
                </div>

                {/* DEVICE PREVIEW AREA */}
                {renderMockup(repo)}

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-[#D946A6] transition-colors leading-snug">
                  {repo.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed line-clamp-3">
                  {repo.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {repo.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-pink-50/80 text-pink-800 border border-pink-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Footer: Date & Action Buttons */}
                <div className="pt-4 border-t border-pink-100/70 mt-auto">
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-pink-400" />
                      <span>{formatDate(repo.pushed_at)}</span>
                    </span>
                    <span className="text-[11px] text-gray-400 font-mono">
                      {repo.name}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2.5">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border-2 border-pink-300 text-[#D946A6] font-bold text-xs hover:bg-pink-50 transition-colors"
                    >
                      <Github size={15} /> GitHub
                    </a>
                    {repo.demoUrl && (
                      <a
                        href={repo.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-[#F9A8D4] to-[#D946A6] text-white font-bold text-xs shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                      >
                        <ExternalLink size={15} /> Demo
                      </a>
                    )}
                  </div>
                </div>

              </article>
            );
          })}
        </div>
      )}

    </div>
  );
}
