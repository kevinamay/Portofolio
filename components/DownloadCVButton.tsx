'use client';

import React, { useState, useEffect } from 'react';
import { database } from '@/lib/firebase';
import { ref, onValue } from 'firebase/database';

export default function DownloadCVButton() {
    const [cvUrl, setCvUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const cvRef = ref(database, 'cvLink');
        const unsubscribe = onValue(cvRef, (snapshot) => {
            if (snapshot.exists()) {
                setCvUrl(snapshot.val().url);
            } else {
                setCvUrl(null);
            }
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleClick = () => {
        if (cvUrl) {
            window.open(cvUrl, '_blank');
        } else {
            alert('CV belum tersedia untuk diunduh saat ini.');
        }
    };

    return (
        <button
            onClick={handleClick}
            disabled={isLoading}
            className={`
                bg-gradient-to-r from-[#F9A8D4] to-[#F687B3] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300
                ${isLoading ? 'opacity-70 cursor-wait' : 'hover:shadow-xl hover:-translate-y-1'}
            `}
        >
            {isLoading ? 'Loading...' : 'Download CV'}
        </button>
    );
}
