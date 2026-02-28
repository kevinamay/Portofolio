'use client';

import React, { useState, useEffect } from 'react';
import { database } from '@/lib/firebase';
import { ref, push, set, onValue, remove, update } from 'firebase/database';
import { CldUploadWidget } from 'next-cloudinary';
import { Plus, Trash2, Upload, Check, AlertCircle, XCircle, Edit2, X, FileText } from 'lucide-react';

interface PdfFile {
    name: string;
    publicId: string;
    url?: string;
}

interface CVData {
    name: string;
    url: string;
    publicId: string;
    updatedAt: string;
}

interface AchievementData {
    id: string;
    title: string;
    award: string;
    year: string;
    type: string;
    color: string;
    desc: string;
    isSpecial: boolean;
    pdfFiles?: PdfFile[];
}

export default function AdminPage() {
    const [formData, setFormData] = useState({
        title: '',
        award: '',
        year: new Date().getFullYear().toString(),
        type: '',
        color: 'pink',
        desc: '',
        isSpecial: false,
    });

    const [pdfFiles, setPdfFiles] = useState<PdfFile[]>([]);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    // List state
    const [achievements, setAchievements] = useState<AchievementData[]>([]);

    // Edit state
    const [editingId, setEditingId] = useState<string | null>(null);

    const handleEdit = (item: AchievementData) => {
        setEditingId(item.id);
        setFormData({
            title: item.title || '',
            award: item.award || '',
            year: item.year || new Date().getFullYear().toString(),
            type: item.type || '',
            color: item.color || 'pink',
            desc: item.desc || '',
            isSpecial: item.isSpecial || false,
        });
        setPdfFiles(item.pdfFiles || []);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const resetForm = () => {
        setEditingId(null);
        setFormData({
            title: '',
            award: '',
            year: new Date().getFullYear().toString(),
            type: '',
            color: 'pink',
            desc: '',
            isSpecial: false,
        });
        setPdfFiles([]);
    };

    // CV state
    const [cvData, setCvData] = useState<CVData | null>(null);

    // Fetch Data (Achievements & CV)
    useEffect(() => {
        // Fetch Achievements
        const dbRef = ref(database, 'achievements');
        const unsubscribeAchievements = onValue(dbRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const parsedData = Object.keys(data).map(key => ({
                    id: key,
                    ...data[key]
                })).reverse();
                setAchievements(parsedData);
            } else {
                setAchievements([]);
            }
        });

        // Fetch CV
        const cvRef = ref(database, 'cvLink');
        const unsubscribeCV = onValue(cvRef, (snapshot) => {
            if (snapshot.exists()) {
                setCvData(snapshot.val());
            } else {
                setCvData(null);
            }
        });

        return () => {
            unsubscribeAchievements();
            unsubscribeCV();
        };
    }, []);

    // Handle text input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle checkbox
    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, isSpecial: e.target.checked }));
    };

    // Handle PDF file add
    const addPdfFile = (result: any) => {
        if (result.event === 'success') {
            const publicId = result.info.public_id;
            const originalFilename = result.info.original_filename;
            const secureUrl = result.info.secure_url;
            setPdfFiles(prev => [...prev, { name: originalFilename, publicId, url: secureUrl }]);
            setMessage(`Uploaded: ${originalFilename}`);
        }
    };

    const removePdfFile = (index: number) => {
        setPdfFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            if (editingId) {
                const itemRef = ref(database, `achievements/${editingId}`);
                await update(itemRef, {
                    ...formData,
                    pdfFiles,
                    updatedAt: new Date().toISOString()
                });
                setMessage('Achievement updated successfully!');
            } else {
                const dbRef = ref(database, 'achievements');
                const newRef = push(dbRef);
                await set(newRef, {
                    ...formData,
                    pdfFiles,
                    createdAt: new Date().toISOString()
                });
                setMessage('Achievement added successfully!');
            }

            setStatus('success');
            resetForm();
            setTimeout(() => setStatus('idle'), 3000);

        } catch (error) {
            console.error(error);
            setStatus('error');
            setMessage(editingId ? 'Failed to update data.' : 'Failed to save data.');
        }
    };

    const handleDelete = async (id: string, title: string) => {
        if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

        try {
            const itemRef = ref(database, `achievements/${id}`);
            await remove(itemRef);
            setMessage(`Deleted: ${title}`);
            setStatus('success');
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error(error);
            setMessage('Failed to delete item');
            setStatus('error');
        }
    };

    // --- CV HANDLERS ---
    const handleAddCV = async (result: any) => {
        if (result.event === 'success') {
            const publicId = result.info.public_id;
            const originalFilename = result.info.original_filename;
            const secureUrl = result.info.secure_url;

            setStatus('loading');
            try {
                const cvRef = ref(database, 'cvLink');
                await set(cvRef, {
                    name: originalFilename,
                    publicId: publicId,
                    url: secureUrl,
                    updatedAt: new Date().toISOString()
                });
                setMessage(`CV Updated successfully!`);
                setStatus('success');
                setTimeout(() => setStatus('idle'), 3000);
            } catch (error) {
                console.error("Failed to save CV data:", error);
                setMessage('Failed to save CV data.');
                setStatus('error');
            }
        }
    };

    const handleDeleteCV = async () => {
        if (!confirm(`Are you sure you want to delete the current CV?`)) return;

        setStatus('loading');
        try {
            const cvRef = ref(database, 'cvLink');
            await remove(cvRef);
            setMessage(`CV Deleted successfully!`);
            setStatus('success');
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error("Failed to delete CV:", error);
            setMessage('Failed to delete CV.');
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* CREATE FORM */}
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                    <div className="bg-[#D946A6] py-6 px-8 flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-white">
                                {editingId ? 'Edit Achievement' : 'Add New Achievement'}
                            </h1>
                            <p className="text-pink-100 mt-1">Secret Admin Console</p>
                        </div>
                        {editingId && (
                            <button
                                type="button"
                                onClick={resetForm}
                                className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full transition-colors flex items-center gap-2"
                            >
                                <X size={20} /> <span className="text-sm font-medium">Cancel Edit</span>
                            </button>
                        )}
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-6">

                        {/* Status Message */}
                        {status !== 'idle' && (
                            <div className={`p-4 rounded-lg flex items-center gap-3 ${status === 'success' ? 'bg-green-50 text-green-700' :
                                status === 'error' ? 'bg-red-50 text-red-700' : 'bg-blue-50 text-blue-700'
                                }`}>
                                {status === 'success' ? <Check size={20} /> :
                                    status === 'error' ? <AlertCircle size={20} /> :
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>}
                                {message}
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Competition / Title</label>
                                <input
                                    required
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                    placeholder="e.g. KSGM Euler Competition"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Year</label>
                                <input
                                    required
                                    type="text"
                                    name="year"
                                    value={formData.year}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>

                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-medium text-gray-700">Award Detail</label>
                                <input
                                    required
                                    type="text"
                                    name="award"
                                    value={formData.award}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                    placeholder="e.g. Gold Medal Bahasa Indonesia"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Type (Badge Text)</label>
                                <input
                                    required
                                    type="text"
                                    name="type"
                                    value={formData.type}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
                                    placeholder="e.g. Gold Medal"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Color Theme</label>
                                <select
                                    name="color"
                                    value={formData.color}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
                                >
                                    <option value="pink">Pink (Default)</option>
                                    <option value="gold">Gold</option>
                                </select>
                            </div>

                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    name="desc"
                                    value={formData.desc}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all min-h-[100px]"
                                    placeholder="Short description..."
                                />
                            </div>

                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    id="isSpecial"
                                    name="isSpecial"
                                    checked={formData.isSpecial}
                                    onChange={handleCheckbox}
                                    className="w-5 h-5 text-pink-600 rounded focus:ring-pink-500 border-gray-300"
                                />
                                <label htmlFor="isSpecial" className="text-sm font-medium text-gray-700">
                                    Is Special Achievement? (Highlights)
                                </label>
                            </div>
                        </div>

                        <div className="border-t border-gray-100 pt-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Certificates (PDF)</h3>

                            <div className="space-y-3 mb-4">
                                {pdfFiles.map((file, idx) => (
                                    <div key={idx} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg border border-gray-200">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-red-100 p-2 rounded text-red-600">PDF</div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-800">{file.name}</p>
                                                <p className="text-xs text-gray-500 font-mono">{file.publicId}</p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => removePdfFile(idx)}
                                            className="text-red-500 hover:text-red-700 p-2"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                ))}

                                {pdfFiles.length === 0 && (
                                    <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-lg text-gray-400">
                                        No certificates uploaded yet
                                    </div>
                                )}
                            </div>

                            <CldUploadWidget
                                uploadPreset="aaaaaaaaaaaaaa"
                                onSuccess={addPdfFile}
                                options={{
                                    sources: ['local', 'url'],
                                    resourceType: 'auto',
                                    clientAllowedFormats: ['pdf'],
                                    maxFiles: 1
                                }}
                            >
                                {({ open }) => (
                                    <button
                                        type="button"
                                        onClick={() => open()}
                                        className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors text-sm"
                                    >
                                        <Upload size={16} /> Upload PDF to Cloudinary
                                    </button>
                                )}
                            </CldUploadWidget>
                        </div>

                        <div className="pt-6 border-t border-gray-100 flex justify-end gap-3">
                            {editingId && (
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="px-6 py-3 rounded-full font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all"
                                >
                                    Cancel
                                </button>
                            )}
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className={`
                    flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white shadow-lg transition-all
                    ${status === 'loading' ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-xl hover:-translate-y-1'}
                `}
                            >
                                {status === 'loading' ? 'Saving...' : editingId ? 'Update Achievement' : 'Save Achievement'}
                                {editingId ? <Check size={20} /> : <Plus size={20} />}
                            </button>
                        </div>

                    </form>
                </div>

                {/* LIST EXISTING ACHIEVEMENTS */}
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden mb-12">
                    <div className="bg-gray-800 py-6 px-8 flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-white">Existing Achievements</h2>
                        <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">{achievements.length} Items</span>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {achievements.length === 0 ? (
                            <div className="p-8 text-center text-gray-500">No achievements found in database.</div>
                        ) : (
                            achievements.map((item) => (
                                <div key={item.id} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                                            {item.isSpecial && <span className="bg-yellow-100 text-orange-600 text-xs px-2 py-0.5 rounded-full font-bold">Special</span>}
                                            <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">{item.year}</span>
                                        </div>
                                        <p className="text-sm text-gray-600">{item.award}</p>
                                        <div className="flex gap-2 mt-2">
                                            {item.pdfFiles && item.pdfFiles.length > 0 ? (
                                                item.pdfFiles.map((pdf, idx) => (
                                                    <span key={idx} className="text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded border border-pink-100 flex items-center gap-1">
                                                        PDF: {pdf.name}
                                                    </span>
                                                ))
                                            ) : (
                                                <span className="text-xs text-gray-400 italic">No PDF attached</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleEdit(item)}
                                            className="flex items-center gap-2 text-blue-500 hover:text-blue-700 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors font-medium border border-transparent hover:border-blue-200"
                                        >
                                            <Edit2 size={18} /> Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id, item.title)}
                                            className="flex items-center gap-2 text-red-500 hover:text-red-700 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors font-medium border border-transparent hover:border-red-200"
                                        >
                                            <Trash2 size={18} /> Delete
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                {/* CV MANAGEMENT SECTION */}
                <div className="bg-white shadow-xl rounded-2xl overflow-hidden mb-12">
                    <div className="bg-gray-800 py-6 px-8">
                        <h2 className="text-2xl font-bold text-white">CV Management</h2>
                        <p className="text-gray-300 mt-1 text-sm">Manage the primary CV linked across the portfolio</p>
                    </div>
                    <div className="p-8">
                        {cvData ? (
                            <div className="flex flex-col md:flex-row items-center justify-between bg-pink-50 border border-pink-100 p-6 rounded-xl gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-pink-600 shadow-sm">
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 text-lg">Current Active CV</h3>
                                        <p className="text-sm font-medium text-pink-600">{cvData.name}</p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Last updated: {new Date(cvData.updatedAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3 w-full md:w-auto">
                                    <a
                                        href={cvData.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2 bg-white text-gray-700 font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                                    >
                                        View
                                    </a>
                                    <button
                                        onClick={handleDeleteCV}
                                        className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2 bg-red-100 text-red-600 font-semibold rounded-lg hover:bg-red-200 transition-colors"
                                    >
                                        <Trash2 size={18} /> Delete
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-10 border-2 border-dashed border-gray-200 rounded-xl">
                                <FileText size={48} className="mx-auto text-gray-300 mb-4" />
                                <h3 className="text-lg font-bold text-gray-600 mb-2">No CV Uploaded</h3>
                                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                                    Upload your primary CV in PDF format. This will be linked to all "Download CV" buttons across your portfolio.
                                </p>
                            </div>
                        )}

                        <div className="mt-8 flex justify-center">
                            <CldUploadWidget
                                uploadPreset="aaaaaaaaaaaaaa"
                                onSuccess={handleAddCV}
                                options={{
                                    sources: ['local', 'url'],
                                    resourceType: 'auto',
                                    clientAllowedFormats: ['pdf'],
                                    maxFiles: 1
                                }}
                            >
                                {({ open }) => (
                                    <button
                                        type="button"
                                        onClick={() => open()}
                                        className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                                    >
                                        <Upload size={20} /> {cvData ? 'Upload New CV (Replace)' : 'Upload Initial CV'}
                                    </button>
                                )}
                            </CldUploadWidget>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
