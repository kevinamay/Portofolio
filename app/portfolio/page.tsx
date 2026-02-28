import React from 'react';
import Link from 'next/link';
import DownloadCVButton from '@/components/DownloadCVButton';
import {
  Github,
  ExternalLink,
  ShoppingBag,
  ClipboardList,
  CloudSun,
  Utensils,
  Activity,
  Code2,
  Smartphone,
  Laptop
} from 'lucide-react';

// --- ARTI HELPER ---
interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
  homepage: string | null;
  topics: string[];
}

async function getRepos(): Promise<Repo[]> {
  const res = await fetch('https://api.github.com/users/kevinamay/repos', {
    next: { revalidate: 3600 } // Cache for 1 hour
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const getLanguageStyle = (lang: string) => {
  switch (lang?.toLowerCase()) {
    case 'typescript':
    case 'javascript':
      return {
        icon: <Code2 size={32} className="text-blue-500" />,
        gradient: "from-blue-100 to-indigo-100",
        techColor: "bg-blue-100 text-blue-700",
        type: 'laptop'
      };
    case 'dart':
    case 'flutter':
      return {
        icon: <Smartphone size={32} className="text-cyan-500" />,
        gradient: "from-cyan-100 to-blue-100",
        techColor: "bg-cyan-100 text-cyan-700",
        type: 'phone'
      };
    case 'html':
    case 'css':
      return {
        icon: <Laptop size={32} className="text-orange-500" />,
        gradient: "from-orange-100 to-red-100",
        techColor: "bg-orange-100 text-orange-700",
        type: 'laptop'
      };
    default:
      return {
        icon: <ShoppingBag size={32} className="text-pink-400" />, // Default icon
        gradient: "from-pink-100 to-purple-100",
        techColor: "bg-pink-100 text-pink-700",
        type: 'laptop'
      };
  }
};

export default async function Portfolio() {
  const repos = await getRepos();

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
      <nav className="glass-nav sticky top-0 w-full z-50 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center gap-8 font-medium">
            <Link href="/" className="text-[#D946A6] hover:text-pink-600 transition hover:-translate-y-1">Home</Link>
            <Link href="/about" className="text-[#D946A6] hover:text-pink-600 transition hover:-translate-y-1">About</Link>
            <Link href="/portfolio" className="text-pink-800 font-bold hover:text-pink-600 transition hover:-translate-y-1">Portfolio</Link>
            <Link href="/achievement" className="text-[#D946A6] hover:text-pink-600 transition hover:-translate-y-1">Achievement</Link>
            <Link href="/contact" className="text-[#D946A6] hover:text-pink-600 transition hover:-translate-y-1">Contact</Link>
          </div>
          <DownloadCVButton />
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto relative z-10 py-16 px-6 md:px-8">

        {/* Header Section */}
        <header className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#D946A6] font-serif tracking-wide">
            My Portfolio
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed font-sans">
            Explore my collection of projects spanning web development, mobile applications, and academic work.
            Each project represents my dedication to creating beautiful, functional, and user-centered digital experiences.
          </p>
        </header>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {repos.map((repo) => {
            const style = getLanguageStyle(repo.language);

            return (
              <article
                key={repo.id}
                className="group bg-white/70 backdrop-blur-xl border border-white/80 shadow-xl rounded-3xl p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 flex flex-col"
              >

                {/* DEVICE PREVIEW AREA */}
                <div className="flex justify-center mb-6">
                  {style.type === 'laptop' ? (
                    // Laptop Style Frame
                    <div className="w-full aspect-video bg-gray-200 rounded-lg p-2 shadow-inner border-2 border-gray-300 relative">
                      <div className={`w-full h-full rounded bg-gradient-to-br ${style.gradient} flex items-center justify-center`}>
                        {style.icon}
                      </div>
                    </div>
                  ) : (
                    // Phone Style Frame
                    <div className="w-32 aspect-[9/16] bg-gray-200 rounded-[2rem] p-2 shadow-inner border-4 border-gray-300 relative">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-gray-300 rounded-full"></div>
                      <div className={`w-full h-full rounded-[1.5rem] bg-gradient-to-br ${style.gradient} flex items-center justify-center`}>
                        {style.icon}
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-[#D946A6] transition-colors break-words">
                  {repo.name.replace(/-/g, ' ').replace(/_/g, ' ')}
                </h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow leading-relaxed line-clamp-3">
                  {repo.description || "No description available for this project."}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {repo.language && (
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${style.techColor}`}>
                      {repo.language}
                    </span>
                  )}
                  {/* Additional dummy tags if topics are empty, or use topics if available */}
                  {repo.topics && repo.topics.map(topic => (
                    <span key={topic} className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600">
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl border-2 border-[#F9A8D4] text-[#D946A6] font-semibold text-sm hover:bg-[#F9A8D4] hover:text-white transition-colors"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#F9A8D4] to-[#F687B3] text-white font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>

              </article>
            );
          })}

        </div>
      </div>
    </main>
  );
}
