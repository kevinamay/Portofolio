'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DownloadCVButton from './DownloadCVButton';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent background scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Achievement', href: '/achievement' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <nav className="glass-nav sticky top-0 w-full z-[100] px-6 md:px-8 py-4 bg-white/70 backdrop-blur-md border-b border-pink-100/50">
                <div className="max-w-7xl mx-auto flex items-center justify-between">

                    {/* Logo / Name (Optional, but looks good on mobile) */}
                    <div className="md:hidden font-serif font-bold text-xl text-[#D946A6]">
                        KMH.
                    </div>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex items-center gap-8 font-medium">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`transition hover:-translate-y-1 ${isActive
                                            ? 'text-pink-800 font-bold border-b-2 border-pink-500'
                                            : 'text-[#D946A6] hover:text-pink-600'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="hidden md:block">
                        <DownloadCVButton />
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-[#D946A6] hover:bg-pink-50 rounded-lg transition-colors focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU OVERLAY */}
            <div
                className={`fixed inset-0 z-[90] bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden flex flex-col items-center justify-center space-y-8 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
            >
                <div className="flex flex-col items-center gap-6 text-2xl font-serif font-bold">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                    } ${isActive ? 'text-pink-600 border-b-4 border-pink-400 pb-1 scale-110' : 'text-gray-600 hover:text-[#D946A6]'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                <div className={`mt-8 transition-all duration-500 delay-200 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                    <DownloadCVButton />
                </div>
            </div>
        </>
    );
}
