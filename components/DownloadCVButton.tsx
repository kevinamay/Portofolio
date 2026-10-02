'use client';

import React, { useState, useEffect } from 'react';
import { database } from '@/lib/firebase';
import { ref, onValue } from 'firebase/database';
import { Download, ExternalLink, X, FileText, CheckCircle2 } from 'lucide-react';

const DEFAULT_CV_PATH = '/CV_Kevina_Maydiva_Heriansaputri.pdf';
const DEFAULT_CV_FILENAME = 'CV_Kevina_Maydiva_Heriansaputri.pdf';

interface DownloadCVButtonProps {
    onBeforeOpen?: () => void;
    className?: string;
}

export default function DownloadCVButton({ onBeforeOpen, className = '' }: DownloadCVButtonProps) {
    const [cvUrl, setCvUrl] = useState<string>(DEFAULT_CV_PATH);
    const [cvName, setCvName] = useState<string>(DEFAULT_CV_FILENAME);
    const [isOpen, setIsOpen] = useState(false);

    // Sync with Firebase if a custom CV was uploaded via admin, otherwise use local bundled PDF
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

    // Handle Escape key to close modal
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

            {/* MODAL CV VIEWER & DOWNLOAD DIALOG */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-black/75 backdrop-blur-md p-3 sm:p-6 transition-all duration-300 animate-fadeIn"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="bg-white rounded-3xl w-full max-w-5xl h-[90vh] flex flex-col relative shadow-2xl border border-pink-200 overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* MODAL HEADER */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:px-6 border-b border-pink-100 bg-gradient-to-r from-[#FFF0F5] to-white gap-3">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#F9A8D4] to-[#D946A6] flex items-center justify-center text-white shadow-md flex-shrink-0">
                                    <FileText size={20} />
                                </div>
                                <div>
                                    <h2 className="text-base sm:text-lg font-bold text-gray-900 font-serif leading-tight">
                                        Curriculum Vitae — Kevina Maydiva Heriansaputri
                                    </h2>
                                    <p className="text-xs text-pink-600 font-medium">
                                        Sarjana Komputer (S.Kom) • Universitas Teknologi Yogyakarta (IPK 3.75)
                                    </p>
                                </div>
                            </div>

                            {/* Header Action Buttons */}
                            <div className="flex items-center gap-2 self-end sm:self-center">
                                {/* Direct Download Button */}
                                <a
                                    href={cvUrl}
                                    download={cvName}
                                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#F9A8D4] to-[#D946A6] text-white font-bold text-xs shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
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
                                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-pink-200 text-[#D946A6] font-semibold text-xs hover:bg-pink-50 transition-colors"
                                    title="Buka CV di tab browser baru"
                                >
                                    <ExternalLink size={14} />
                                    <span className="hidden md:inline">Buka Tab Baru</span>
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

                        {/* MODAL BODY: PDF VIEWER IFRAME */}
                        <div className="flex-1 bg-slate-100 relative overflow-hidden flex flex-col">
                            <iframe
                                src={`${cvUrl}#toolbar=1&navpanes=0`}
                                className="w-full h-full border-0"
                                title="Pratinjau CV Kevina Maydiva Heriansaputri"
                            />

                            {/* Mobile Fallback Overlay Banner in case embedded PDF is hidden on small mobile viewports */}
                            <div className="sm:hidden bg-pink-50 p-2.5 text-center border-t border-pink-200 flex items-center justify-between text-xs text-pink-800">
                                <span>Perlu mengunduh file dokumen?</span>
                                <a
                                    href={cvUrl}
                                    download={cvName}
                                    className="font-bold underline text-[#D946A6]"
                                >
                                    Download PDF
                                </a>
                            </div>
                        </div>

                        {/* MODAL FOOTER */}
                        <div className="p-4 sm:px-6 border-t border-pink-100 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
                            <div className="flex items-center gap-2 text-xs text-gray-600">
                                <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                                <span>
                                    Format dokumen: <strong className="text-gray-800">PDF</strong> • Siap diunduh langsung untuk keperluan rekrutmen HRD
                                </span>
                            </div>

                            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
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
                                    <span>Download CV Lengkap</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}
