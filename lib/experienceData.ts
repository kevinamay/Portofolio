export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  category: 'AI & Machine Learning' | 'Asisten Praktikum & Akademik' | 'Frontend Engineering';
  isCurrent: boolean;
  skills: string[];
  responsibilities: string[];
  badgeColor: string;
  accentGradient: string;
}

export interface LeadershipExperience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  responsibilities: string[];
  skills: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  period: string;
  type: 'Sertifikasi' | 'Pelatihan';
}

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: 'alignerr-ai',
    role: 'Pelatih & Evaluator AI (Kontrak)',
    company: 'Alignerr',
    location: 'Remote',
    period: 'Mei 2026 – Sekarang',
    type: 'Kontrak (Contract)',
    category: 'AI & Machine Learning',
    isCurrent: true,
    skills: ['Python Logic', 'Code Review', 'AI Reasoning', 'Error Analysis', 'Quality Optimization'],
    responsibilities: [
      'Mengevaluasi proyek pemrograman AI dengan fokus pada logika penalaran Python dan code review komprehensif.',
      'Menganalisis modifikasi kode sistematis untuk memverifikasi akurasi teknis dan mengidentifikasi reasoning flaws pada keluaran model.',
      'Mengelola alur evaluasi untuk membandingkan keluaran model serta memberikan rekomendasi berbasis data guna meningkatkan performa AI.'
    ],
    badgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
    accentGradient: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'uty-asdos-sbd-2026',
    role: 'Asisten Praktikum: Sistem Basis Data',
    company: 'Universitas Teknologi Yogyakarta',
    location: 'Yogyakarta, Indonesia',
    period: 'Feb 2026 – Mei 2026',
    type: 'Academic Teaching Assistant',
    category: 'Asisten Praktikum & Akademik',
    isCurrent: false,
    skills: ['MySQL', 'Database Systems', 'Data Integrity', 'Backend Operations', '100+ Mahasiswa'],
    responsibilities: [
      'Mengelola jadwal teknis dan evaluasi basis data untuk 100+ mahasiswa.',
      'Memastikan akurasi data dan integritas sistem serta mendukung kelancaran operasi backend yang terintegrasi dengan frontend.'
    ],
    badgeColor: 'bg-pink-100 text-pink-700 border-pink-200',
    accentGradient: 'from-pink-500 to-rose-600'
  },
  {
    id: 'outlier-ai-qa',
    role: 'Data Annotator & AI Quality Assurance',
    company: 'Outlier',
    location: 'Remote',
    period: 'Jan 2026 – Apr 2026',
    type: 'Remote Full-Time',
    category: 'AI & Machine Learning',
    isCurrent: false,
    skills: ['AI Logic Systems', 'Quality Assurance', 'Cross-Collaboration', 'Technical Precision', 'English'],
    responsibilities: [
      'Menangani tugas kompleks secara mandiri (remote full-time) dengan tingkat presisi teknis tinggi.',
      'Mengevaluasi dan meningkatkan keluaran sistem logika AI dengan berkoordinasi secara aktif bersama tim global menggunakan bahasa Inggris.',
      'Menerapkan quality assurance yang ketat pada evaluasi model digital untuk memastikan hasil memenuhi standar premium.'
    ],
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
    accentGradient: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'uty-asdos-web-pbo-2025',
    role: 'Asisten Praktikum: Desain Web & Pemrograman Berorientasi Objek',
    company: 'Universitas Teknologi Yogyakarta',
    location: 'Yogyakarta, Indonesia',
    period: 'Sep 2025 – Jan 2026',
    type: 'Academic Teaching Assistant',
    category: 'Asisten Praktikum & Akademik',
    isCurrent: false,
    skills: ['Web Design', 'OOP (Object-Oriented Programming)', 'Clean Code', 'UI Implementation', 'Frontend Debugging'],
    responsibilities: [
      'Membimbing 100+ mahasiswa dalam prinsip desain web, implementasi UI, dan praktik clean code web modern.',
      'Memfasilitasi sesi pemecahan masalah (debugging) arsitektur frontend dan peningkatan performa rendering halaman.',
      'Mengembangkan kemampuan komunikasi andal dengan menyampaikan instruksi teknis secara efektif dan jelas.'
    ],
    badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    accentGradient: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'freelance-react-frontend',
    role: 'Frontend React Developer (Berbasis Proyek)',
    company: 'Pengembang React Frontend (Berbasis Proyek)',
    location: 'Yogyakarta, Indonesia',
    period: 'Aug 2025 – Feb 2026',
    type: 'Project-Based Developer',
    category: 'Frontend Engineering',
    isCurrent: false,
    skills: ['React.js', 'Figma to Code', 'Pixel-Perfect UI', 'Page Speed Optimization', 'Google & Meta Ads'],
    responsibilities: [
      'Mengelola penuh siklus pengembangan frontend secara mandiri, menghasilkan antarmuka React terstruktur dan UX responsif.',
      'Mengeksekusi desain Figma secara pixel-perfect dengan standar kualitas visual dan presisi teknis yang tinggi.',
      'Mengembangkan landing page berkinerja tinggi yang dioptimalkan kecepatannya (page speed) untuk mendukung kampanye iklan pemasaran digital (Google/Meta).'
    ],
    badgeColor: 'bg-sky-100 text-sky-700 border-sky-200',
    accentGradient: 'from-sky-500 to-blue-600'
  },
  {
    id: 'uty-asdos-sbd-2025',
    role: 'Asisten Praktikum: Sistem Basis Data',
    company: 'Universitas Teknologi Yogyakarta',
    location: 'Yogyakarta, Indonesia',
    period: 'Feb 2025 – Mei 2025',
    type: 'Academic Teaching Assistant',
    category: 'Asisten Praktikum & Akademik',
    isCurrent: false,
    skills: ['Sistem Basis Data', 'MySQL DBMS', 'Operasional Data', 'Mentoring Praktikum', '100+ Mahasiswa'],
    responsibilities: [
      'Mengelola jadwal teknis dan evaluasi praktikum basis data untuk 100+ mahasiswa.',
      'Memastikan akurasi operasional basis data serta kelancaran integrasi sistem backend dengan frontend.'
    ],
    badgeColor: 'bg-pink-100 text-pink-700 border-pink-200',
    accentGradient: 'from-pink-500 to-rose-600'
  }
];

export const LEADERSHIP_EXPERIENCES: LeadershipExperience[] = [
  {
    id: 'uty-dev-comm',
    role: 'Sekretaris',
    organization: 'UTY Developer Community',
    location: 'Yogyakarta, Indonesia',
    period: 'Feb 2024 – Feb 2025',
    skills: ['Manajemen Administrasi', 'Dokumentasi Resmi', 'Koordinasi Panitia', 'Penyusunan Proposal & LPJ'],
    responsibilities: [
      'Mengelola administrasi, menyusun dokumentasi resmi, serta mencatat notulensi rapat untuk berbagai acara dan proyek teknologi komunitas.',
      'Mengoordinasikan komunikasi dan logistik internal panitia guna memastikan kelancaran pelaksanaan lokakarya (workshop) dan program kerja.',
      'Menyusun proposal dan laporan pertanggungjawaban (LPJ) resmi untuk kegiatan komunitas di tingkat universitas.'
    ]
  }
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    name: 'Google Analytics Certification',
    issuer: 'Google',
    period: 'Jul 2026 – Jul 2027',
    type: 'Sertifikasi'
  },
  {
    name: 'English Proficiency Test',
    issuer: 'UTY Education, Certification, and Training Center',
    period: 'Mar 2025 – Mar 2027',
    type: 'Sertifikasi'
  },
  {
    name: 'Pemrograman Dart Dasar',
    issuer: 'Id-networkers (idn.id)',
    period: 'Jul 2026 – Jul 2029',
    type: 'Pelatihan'
  },
  {
    name: 'Cisco Dasar',
    issuer: 'Id-networkers (idn.id)',
    period: 'Jul 2026 – Jul 2029',
    type: 'Pelatihan'
  },
  {
    name: 'Visualizing Filters of a CNN using TensorFlow',
    issuer: 'Coursera',
    period: 'Jul 2026 – Jul 2029',
    type: 'Pelatihan'
  },
  {
    name: 'Intro to AI & Machine Learning',
    issuer: 'Purwadhika Digital Technology School',
    period: 'Jul 2026 – Jul 2029',
    type: 'Pelatihan'
  },
  {
    name: 'Intro to Data Science',
    issuer: 'Purwadhika Digital Technology School',
    period: 'Jul 2026 – Jul 2029',
    type: 'Pelatihan'
  },
  {
    name: 'Intro to Full Stack Software Development',
    issuer: 'Purwadhika Digital Technology School',
    period: 'Jul 2026 – Jul 2029',
    type: 'Pelatihan'
  },
  {
    name: 'Belajar Dasar Structured Query Language (SQL)',
    issuer: 'Dicoding Indonesia',
    period: 'Okt 2023 – Okt 2026',
    type: 'Pelatihan'
  }
];
