'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
// --- 1. IMPORT DARI LIBRARY NEXT-CLOUDINARY (API) ---
import { getCldImageUrl } from 'next-cloudinary';
import {
  Trophy,
  Award,
  Star,
  Medal,
  X,
  Sparkles,
  ExternalLink,
  FileText
} from 'lucide-react';
// --- FIREBASE IMPORTS ---
import { database } from '@/lib/firebase';
import { ref, onValue } from 'firebase/database';

interface PdfFile {
  name: string;
  publicId: string;
  url?: string;
}

interface AchievementData {
  id: string; // Firebase Key
  title: string;
  award: string;
  year: string;
  type: string;
  color: string;
  desc: string;
  isSpecial: boolean;
  pdfFiles?: PdfFile[];
}

export default function Achievement() {
  const [achievements, setAchievements] = useState<AchievementData[]>([]);
  const [selectedAchievement, setSelectedAchievement] = useState<AchievementData | null>(null);
  const [activePdf, setActivePdf] = useState<PdfFile | null>(null);
  const [loading, setLoading] = useState(true);

  // --- 2. FETCH DATA FROM FIREBASE ---
  useEffect(() => {
    const dbRef = ref(database, 'achievements');
    const unsubscribe = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        // Convert Object to Array & Reverse to show latest first
        const parsedData = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        })).reverse();
        setAchievements(parsedData);
      } else {
        setAchievements([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // --- 3. FUNGSI GENERATE URL PAKAI API (FALLBACK) ---
  const getPdfUrl = (file: PdfFile) => {
    if (file.url) return file.url; // Use direct URL if available
    if (!file.publicId) return '';
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    return `https://res.cloudinary.com/${cloudName}/image/upload/${file.publicId}.pdf`;
  };

  // --- 4. FUNGSI GENERATE PREVIEW (THUMBNAIL) ---
  const getPreviewUrl = (file: PdfFile) => {
    if (!file.publicId) return null;
    // Construct Cloudinary image URL directly for PDF thumbnail (convert to jpg)
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    return `https://res.cloudinary.com/${cloudName}/image/upload/f_jpg,q_auto,w_800/${file.publicId}.jpg`;
  };

  const handleOpenModal = (item: AchievementData) => {
    setSelectedAchievement(item);
    if (item.pdfFiles && item.pdfFiles.length > 0) {
      setActivePdf(item.pdfFiles[0]);
    }
  };

  const handleCloseModal = () => {
    setSelectedAchievement(null);
    setActivePdf(null);
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#FFF5F7] via-[#FFE8F0] to-[#FFF0F5]">

      {/* Background Decorations */}
      <div className="absolute top-[10%] left-[5%] text-yellow-400 opacity-60 animate-float">
        <Star size={48} fill="currentColor" />
      </div>
      <div className="absolute top-[55%] right-[8%] text-yellow-400 opacity-50 animate-pulseCustom">
        <Star size={32} fill="currentColor" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10 py-16 px-6 md:px-8">
        <header className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#D946A6] font-serif tracking-wide">
            Academic Achievements
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            Commitment, consistency, and dedication in intellectual development through national competitions.
          </p>
        </header>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
          </div>
        ) : (
          /* Grid System */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {achievements.length === 0 ? (
              <div className="col-span-full text-center text-gray-500 py-12">
                No achievements found.
              </div>
            ) : achievements.map((item) => (
              <div
                key={item.id}
                className={`h-full flex flex-col bg-white/70 backdrop-blur-xl border-2 ${item.isSpecial ? 'border-pink-300 shadow-pink-200' : 'border-white/80'} shadow-xl rounded-3xl p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group relative`}
              >

                {/* Preview Box */}
                <div
                  className="w-full aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-4 relative overflow-hidden cursor-pointer border-2 border-dashed border-pink-200 group-hover:border-pink-400 transition-colors"
                  onClick={() => handleOpenModal(item)}
                >
                  {item.pdfFiles && item.pdfFiles.length > 0 && item.pdfFiles[0].publicId ? (
                    <div className="w-full h-full relative group">
                      {/* THUMBNAIL IMAGE */}
                      <img
                        src={getPreviewUrl(item.pdfFiles[0]) || ''}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <span className="bg-white/90 text-pink-600 px-4 py-2 rounded-full text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                          View Certificate
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-pink-300 group-hover:scale-105 transition-transform duration-500">
                      <FileText size={64} strokeWidth={1} />
                      <span className="text-xs font-medium mt-2 bg-white/80 px-3 py-1 rounded-full text-pink-600 shadow-sm">
                        View Certificate
                      </span>
                    </div>
                  )}
                </div>

                {/* Badges */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1 flex-wrap">
                    {item.isSpecial ? (
                      <>
                        {[1, 2, 3].map(i => (
                          <span key={i} className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center shadow-sm">
                            🥇
                          </span>
                        ))}
                      </>
                    ) : (
                      <span className={`
                            px-4 py-1 rounded-full text-sm font-bold text-white flex items-center gap-2 shadow-sm
                            ${item.color === 'gold' ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                          'bg-gradient-to-r from-pink-400 to-rose-500'}
                            `}>
                        <Medal size={14} /> {item.type}
                      </span>
                    )}
                  </div>
                  <span className="bg-gradient-to-r from-[#F9A8D4] to-[#EC4899] text-white px-4 py-1 rounded-full text-sm font-bold shadow-sm">
                    {item.year}
                  </span>
                </div>

                {/* Text */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 font-serif leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-medium text-sm leading-relaxed">
                    {item.award}
                  </p>
                  {item.isSpecial && (
                    <div className="bg-pink-50 border-l-4 border-pink-400 p-3 rounded-r-lg mb-4">
                      <p className="text-xs text-gray-700 flex gap-2">
                        <Sparkles size={14} className="text-pink-500 flex-shrink-0 mt-0.5" />
                        {item.desc}
                      </p>
                    </div>
                  )}
                </div>

                {/* Button */}
                <button
                  onClick={() => handleOpenModal(item)}
                  className="mt-4 flex items-center gap-2 text-pink-600 font-semibold text-sm hover:text-pink-800 transition-colors group/btn"
                >
                  View Certificate <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>

              </div>
            ))}

          </div>
        )}
      </div>

      {/* --- MODAL PDF VIEWER --- */}
      {selectedAchievement && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-5xl h-[85vh] flex flex-col relative shadow-2xl animate-scaleUp overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-gray-50">
              <div>
                <h2 className="text-xl font-bold text-[#D946A6]">{selectedAchievement.title}</h2>
                <p className="text-sm text-gray-500">{selectedAchievement.award}</p>
              </div>
              <button onClick={handleCloseModal} className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Tabs */}
            {selectedAchievement.pdfFiles && selectedAchievement.pdfFiles.length > 1 && (
              <div className="flex gap-2 p-3 bg-pink-50 overflow-x-auto">
                {selectedAchievement.pdfFiles.map((file, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePdf(file)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${activePdf === file
                      ? 'bg-[#D946A6] text-white shadow-md'
                      : 'bg-white text-pink-600 border border-pink-200 hover:bg-pink-100'
                      }`}
                  >
                    {file.name}
                  </button>
                ))}
              </div>
            )}

            {/* PDF Viewer */}
            <div className="flex-grow bg-gray-200 relative">
              {activePdf ? (
                <iframe
                  src={getPdfUrl(activePdf)}
                  className="w-full h-full"
                  title="Certificate PDF"
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-500">
                  Loading PDF...
                </div>
              )}
            </div>

            {/* Footer Link */}
            <div className="p-3 border-t border-gray-100 bg-white flex justify-end">
              {activePdf && (
                <a
                  href={getPdfUrl(activePdf)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-[#D946A6] hover:underline"
                >
                  <ExternalLink size={16} /> Open in New Tab
                </a>
              )}
            </div>
          </div>
        </div>
      )}

    </main>
  );
}