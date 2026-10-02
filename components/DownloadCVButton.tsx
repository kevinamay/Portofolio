'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { database } from '@/lib/firebase';
import { ref, onValue } from 'firebase/database';
import { Download, ExternalLink, X, FileText, CheckCircle2, ChevronRight } from 'lucide-react';

const DEFAULT_CV_PATH = '/CV_Kevina_Maydiva_Heriansaputri.pdf';
const DEFAULT_CV_FILENAME = 'CV_Kevina_Maydiva_Heriansaputri.pdf';

const CV_PAGES = [
    { page: 1, src: '/cv-pages/cv-page-1.webp', title: 'Halaman 1: Profil, Pendidikan, Pengalaman Kerja' },
    { page: 2, src: '/cv-pages/cv-page-2.webp', title: 'Halaman 2: Pengalaman Proyek, Organisasi, Sertifikasi & Pelatihan' },
    { page: 3, src: '/cv-pages/cv-page-3.webp', title: 'Halaman 3: Pelatihan Lanjutan, Keahlian Teknis & Minat' }
];

interface DownloadCVButtonProps {
    onBeforeOpen?: () => void;
    className?: string;
}

export default function DownloadCVButton({ onBeforeOpen, className = '' }: DownloadCVButtonProps) {
    const [cvUrl, setCvUrl] = useState<string>(DEFAULT_CV_PATH);
    const [cvName, setCvName] = useState<string>(DEFAULT_CV_FILENAME);
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Sync with Firebase if an updated CV was provided, otherwise default to local bundled PDF
    useEffect(() => {
        try {
            const cvRef = ref(database, 'cvLink');
            const unsubscribe = onValue(cvRef, (snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    if (data?.url) {
                        setCvUrl(data.url);
                        if (data.name) setCvName(data.name);
                    }
                }
            }, (error) => {
                console.warn('Firebase CV sync error (using local bundled CV):', error);
            });

            return () => unsubscribe();
        } catch (e) {
            // Keep default bundled PDF path
        }
    }, []);

    // Handle Escape key and body scroll lock
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const handleOpen = () => {
        if (onBeforeOpen) {
            onBeforeOpen();
        }
        setIsOpen(true);
    };

    const modalContent = isOpen ? (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-5 transition-all duration-200"
            onClick={() => setIsOpen(false)}
        >
            <div
                className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] flex flex-col shadow-2xl border border-pink-200 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* MODAL HEADER (STAYS FIXED AT TOP) */}
                <div className="shrink-0 flex items-center justify-between p-4 sm:px-6 border-b border-pink-100 bg-gradient-to-r from-[#FFF0F5] to-white gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#F9A8D4] to-[#D946A6] flex items-center justify-center text-white shadow-md shrink-0">
                            <FileText size={20} />
                        </div>
                        <div className="min-w-0">
                            <h2 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 font-serif truncate">
                                Curriculum Vitae — Kevina Maydiva Heriansaputri
                            </h2>
                            <p className="text-xs text-pink-600 font-medium truncate">
                                Sarjana Komputer (S.Kom) • UTY (IPK 3.75) • Full-Stack &amp; Mobile
                            </p>
                        </div>
                    </div>

                    {/* Header Action Buttons */}
                    <div className="flex items-center gap-2 shrink-0">
                        {/* Direct Download Button */}
                        <a
                            href={cvUrl}
                            download={cvName}
                            className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-[#F9A8D4] to-[#D946A6] text-white font-bold text-xs shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                            title="Download file CV PDF sekarang"
                        >
                            <Download size={14} />
                            <span>Download CV</span>
                        </a>

                        {/* Open in New Tab Button */}
                        <a
                            href={cvUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl border border-pink-200 text-[#D946A6] font-semibold text-xs hover:bg-pink-50 transition-colors"
                            title="Buka file PDF asli di tab baru"
                        >
                            <ExternalLink size={14} />
                            <span>Buka PDF Asli</span>
                        </a>

                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-full hover:bg-pink-100/70 text-gray-500 hover:text-gray-800 transition-colors"
                            aria-label="Tutup Pratinjau CV"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* MODAL BODY: SCROLLABLE CRISP CV PAGES (ALWAYS VISIBLE, NEVER BLANK) */}
                <div className="flex-1 overflow-y-auto p-3 sm:p-6 bg-slate-100 space-y-6">
                    {CV_PAGES.map((pageInfo) => (
                        <div
                            key={pageInfo.page}
                            className="bg-white rounded-2xl shadow-md border border-slate-200/80 overflow-hidden max-w-3xl mx-auto transition-transform hover:shadow-lg"
                        >
                            {/* Page header tag */}
                            <div className="bg-slate-50 px-4 py-2 border-b border-slate-100 flex items-center justify-between text-xs text-gray-500">
                                <span className="font-semibold text-gray-700">
                                    {pageInfo.title}
                                </span>
                                <span className="px-2.5 py-0.5 rounded-full bg-pink-100 text-[#D946A6] font-bold text-[11px]">
                                    Halaman {pageInfo.page} / 3
                                </span>
                            </div>

                            {/* Page Document Image */}
                            <div className="relative w-full bg-white flex justify-center">
                                <img
                                    src={pageInfo.src}
                                    alt={`Curriculum Vitae Kevina Maydiva Heriansaputri - Halaman ${pageInfo.page}`}
                                    className="w-full h-auto block select-none"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* MODAL FOOTER (STAYS FIXED AT BOTTOM) */}
                <div className="shrink-0 p-3 sm:px-6 border-t border-pink-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                        <span>
                            Dokumen resmi: <strong className="text-gray-800">CV_Kevina_Maydiva_Heriansaputri.pdf</strong> (3 Halaman)
                        </span>
                    </div>

                    <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-600 hover:bg-gray-100 transition-colors"
                        >
                            Tutup
                        </button>
                        <a
                            href={cvUrl}
                            download={cvName}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#F9A8D4] to-[#D946A6] text-white font-bold text-xs shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all"
                        >
                            <Download size={15} />
                            <span>Download CV (PDF)</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    ) : null;

    return (
        <>
            {/* TRIGGER BUTTON (NAVBAR) */}
            <button
                onClick={handleOpen}
                className={`bg-gradient-to-r from-[#F9A8D4] to-[#F687B3] hover:from-[#f48cb9] hover:to-[#ec4899] text-white font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 text-sm cursor-pointer ${className}`}
                title="Lihat & Unduh Curriculum Vitae Kevina Maydiva"
            >
                <FileText size={16} />
                <span>Download CV</span>
            </button>

            {/* PORTAL TO DOCUMENT.BODY TO ESCAPE NAVBAR BACKDROP-FILTER/CONTAINING BLOCK */}
            {mounted && modalContent && createPortal(modalContent, document.body)}
        </>
    );
}
