'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import DownloadCVButton from '@/components/DownloadCVButton';
import {
   Mail,
   Phone,
   Linkedin,
   Github,
   Instagram,
   Send,
   CheckCircle2,
   AlertCircle
} from 'lucide-react';

export default function Contact() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
   });
   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

   // --- BAGIAN PENTING: Ganti Link ini dengan Link dari Formspree ---
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvzoqrrj';
   // Contoh: 'https://formspree.io/f/mdoqpplz'

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      // Cek apakah user sudah memasukkan link formspree
      if (FORMSPREE_ENDPOINT.includes('PASTE_LINK')) {
         alert('Mohon masukkan Link Formspree di codingan dulu ya!');
         return;
      }

      setStatus('loading');

      try {
         const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
         });

         if (response.ok) {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' }); // Reset form
            setTimeout(() => setStatus('idle'), 5000);
         } else {
            setStatus('error');
            alert("Maaf, terjadi kesalahan saat mengirim pesan.");
         }
      } catch (error) {
         console.error(error);
         setStatus('error');
         alert("Gagal terhubung ke server.");
      }
   };

   return (
      <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#FFF5F8] via-[#FFE8F0] to-[#FFF0F5]">

         {/* --- BACKGROUND DECORATIONS --- */}
         <div className="absolute top-[20%] right-[8%] w-20 h-20 rounded-[20%] bg-pink-100/40 rotate-45 animate-floatSlow"></div>
         <div className="absolute bottom-[15%] left-[10%] w-24 h-24 rounded-[30%_70%_70%_30%] bg-pink-50/40 animate-pulseCustom"></div>
         <div className="absolute top-[15%] right-[15%] w-20 h-14 bg-gradient-to-br from-[#FFE8F0] to-[#FFC0CB] rounded-lg shadow-xl animate-float z-0">
            <div className="absolute top-0 left-0 border-l-[40px] border-r-[40px] border-t-[30px] border-l-transparent border-r-transparent border-t-[#F9A8D4]"></div>
         </div>
         <div className="absolute bottom-[20%] right-[12%] animate-pulseCustom">
            <div className="relative">
               <span className="text-3xl">💬</span>
            </div>
         </div>

         {/* --- NAVBAR --- */}
         <nav className="glass-nav sticky top-0 w-full z-50 px-8 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
               <div className="hidden md:flex items-center gap-8 font-medium">
                  <Link href="/" className="text-[#D946A6] hover:text-pink-600 transition hover:-translate-y-1">Home</Link>
                  <Link href="/about" className="text-[#D946A6] hover:text-pink-600 transition hover:-translate-y-1">About</Link>
                  <Link href="/portfolio" className="text-[#D946A6] hover:text-pink-600 transition hover:-translate-y-1">Portfolio</Link>
                  <Link href="/achievement" className="text-[#D946A6] hover:text-pink-600 transition hover:-translate-y-1">Achievement</Link>
                  <Link href="/contact" className="text-pink-800 font-bold hover:text-pink-600 transition hover:-translate-y-1">Contact</Link>
               </div>
               <DownloadCVButton />
            </div>
         </nav>

         {/* --- MAIN CONTENT --- */}
         <div className="max-w-6xl mx-auto relative z-10 py-12 px-6 md:px-8">
            <div className="bg-white/70 backdrop-blur-xl border border-white/90 rounded-[2rem] shadow-[0_20px_80px_rgba(251,207,232,0.3)] overflow-hidden grid grid-cols-1 lg:grid-cols-2">

               {/* LEFT COLUMN: Contact Info */}
               <div className="p-8 md:p-12 space-y-8 relative bg-white/40">
                  <div>
                     <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#D946A6] font-serif">Get in Touch</h1>
                     <p className="text-gray-700 leading-relaxed">
                        I'd love to hear from you! Whether you have a project in mind, a question about my work,
                        or just want to connect, feel free to reach out.
                     </p>
                  </div>

                  <div className="space-y-6">
                     <a href="mailto:kevinamay23@gmail.com" className="flex items-center gap-4 group cursor-pointer hover:bg-white/50 p-3 rounded-2xl transition-all">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFE8F0] to-[#FFC0CB] flex items-center justify-center shadow-md group-hover:-translate-y-1 transition-transform duration-300">
                           <Mail className="text-pink-600" size={24} />
                        </div>
                        <div>
                           <p className="text-sm text-gray-600 font-medium">Email</p>
                           <p className="text-base font-semibold text-gray-800 group-hover:text-[#D946A6] transition-colors">kevinamay23@gmail.com</p>
                        </div>
                     </a>

                     <a href="https://wa.me/6282244109503" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer hover:bg-white/50 p-3 rounded-2xl transition-all">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFE8F0] to-[#FFC0CB] flex items-center justify-center shadow-md group-hover:-translate-y-1 transition-transform duration-300">
                           <Phone className="text-pink-600" size={24} />
                        </div>
                        <div>
                           <p className="text-sm text-gray-600 font-medium">Phone / WhatsApp</p>
                           <p className="text-base font-semibold text-gray-800 group-hover:text-[#D946A6] transition-colors">0822 4410 9503</p>
                        </div>
                     </a>
                  </div>

                  <div>
                     <p className="text-sm text-gray-600 font-medium mb-4">Connect with me</p>
                     <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/kevinamay23/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0077B5] to-[#005582] flex items-center justify-center text-white shadow-md hover:-translate-y-1 hover:scale-110 transition-all">
                           <Linkedin size={20} />
                        </a>
                        <a href="https://github.com/kevinamay" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-br from-[#333] to-[#000] flex items-center justify-center text-white shadow-md hover:-translate-y-1 hover:scale-110 transition-all">
                           <Github size={20} />
                        </a>
                        <a href="https://www.instagram.com/kevinamaydiva_/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E4405F] to-[#C13584] flex items-center justify-center text-white shadow-md hover:-translate-y-1 hover:scale-110 transition-all">
                           <Instagram size={20} />
                        </a>
                     </div>
                  </div>

                  <div className="bg-pink-50 border-l-4 border-pink-400 rounded-lg p-5">
                     <p className="text-gray-800 font-medium">Interested in working together? Let's connect!</p>
                  </div>
               </div>

               {/* RIGHT COLUMN: Contact Form */}
               <div className="bg-white p-8 md:p-12 relative">
                  {status === 'success' && (
                     <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-3 animate-pulseCustom">
                        <CheckCircle2 size={20} />
                        <span>Thank you! Your message has been sent successfully.</span>
                     </div>
                  )}

                  {status === 'error' && (
                     <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center gap-3 animate-pulseCustom">
                        <AlertCircle size={20} />
                        <span>Something went wrong. Please try again or email me directly.</span>
                     </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                        <input
                           type="text" id="name" name="name"
                           value={formData.name}
                           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                           className="w-full px-5 py-4 rounded-xl border-2 border-[#FFE8F0] bg-white text-gray-800 focus:outline-none focus:border-[#F9A8D4] focus:ring-4 focus:ring-pink-100 transition-all placeholder:text-gray-300"
                           placeholder="Your full name"
                           required
                        />
                     </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                        <input
                           type="email" id="email" name="email"
                           value={formData.email}
                           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                           className="w-full px-5 py-4 rounded-xl border-2 border-[#FFE8F0] bg-white text-gray-800 focus:outline-none focus:border-[#F9A8D4] focus:ring-4 focus:ring-pink-100 transition-all placeholder:text-gray-300"
                           placeholder="your.email@example.com"
                           required
                        />
                     </div>
                     <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                        <textarea
                           id="message" name="message" rows={5}
                           value={formData.message}
                           onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                           className="w-full px-5 py-4 rounded-xl border-2 border-[#FFE8F0] bg-white text-gray-800 focus:outline-none focus:border-[#F9A8D4] focus:ring-4 focus:ring-pink-100 transition-all placeholder:text-gray-300 resize-none"
                           placeholder="Tell me about your project..."
                           required
                        ></textarea>
                     </div>
                     <button
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        className={`w-full py-4 rounded-full font-bold text-white shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 hover:shadow-xl
                      ${status === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-[#F9A8D4] to-[#EC4899] hover:from-[#EC4899] hover:to-[#DB2777]'}
                   `}
                     >
                        {status === 'loading' ? 'Sending...' : (<>Send Message <Send size={18} /></>)}
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </main>
   );
}