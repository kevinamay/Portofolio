export interface ProjectMetadata {
  title: string;
  description: string;
  category: 'Web & Full-Stack' | 'Mobile App' | 'Academic & Teaching';
  techStack: string[];
  demoUrl?: string;
  featured?: boolean;
  mockupType: 'laptop' | 'phone' | 'code';
}

export interface EnrichedRepo {
  id: number | string;
  name: string;
  title: string;
  description: string;
  category: 'Web & Full-Stack' | 'Mobile App' | 'Academic & Teaching';
  language: string;
  techStack: string[];
  html_url: string;
  homepage: string | null;
  demoUrl: string | null;
  pushed_at: string;
  stargazers_count: number;
  forks_count: number;
  featured: boolean;
  mockupType: 'laptop' | 'phone' | 'code';
}

// Curated metadata dictionary keyed by GitHub repository name
export const REPO_METADATA: Record<string, ProjectMetadata> = {
  'Corporate-Ticketing-Communication-System': {
    title: 'Corporate Ticketing & Communication System',
    description: 'Portal tiket korporat dan koordinasi komunikasi lintas divisi perusahaan untuk mempercepat alur kerja penanganan kendala teknis dan administrasi dengan manajemen status real-time.',
    category: 'Web & Full-Stack',
    techStack: ['Laravel', 'Blade', 'PHP', 'MySQL', 'Vercel'],
    demoUrl: 'https://ticketing-kappa-jet.vercel.app/register',
    featured: true,
    mockupType: 'laptop'
  },
  'kevinamay': {
    title: 'GitHub Profile & Artisan Portfolio',
    description: 'Repositori konfigurasi profil GitHub bertema Japanese Cyberpunk & Shokunin Artisan dengan metrik real-time, lencana teknologi, dan integrasi dinamis.',
    category: 'Web & Full-Stack',
    techStack: ['Markdown', 'SVG', 'GitHub Actions', 'TokyoNight'],
    featured: false,
    mockupType: 'laptop'
  },
  'Soto-Ayam-Pringgondani': {
    title: 'Soto Ayam Pringgondani POS & Catalog',
    description: 'Sistem aplikasi web katalog kuliner dan manajemen pemesanan kasir Soto Ayam Pringgondani dengan antarmuka responsif dan rekap transaksi terstruktur.',
    category: 'Web & Full-Stack',
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Next.js'],
    featured: false,
    mockupType: 'laptop'
  },
  'alpin_ads_test_2': {
    title: 'Alpin Ads Campaign Suite V2',
    description: 'Dashboard manajemen periklanan digital modern dengan visualisasi metrik performa analitik, sistem filter kampanye dinamis, dan kartu statistik interaktif.',
    category: 'Web & Full-Stack',
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    demoUrl: 'https://alpinadstest2.vercel.app',
    featured: true,
    mockupType: 'laptop'
  },
  'Alpin-Ads-Frontend-Test': {
    title: 'Alpin Ads Frontend Showcase V1',
    description: 'Implementasi antarmuka periklanan dengan komponen kartu kampanye modular, validasi formulir interaktif, dan optimasi performa frontend tingkat tinggi.',
    category: 'Web & Full-Stack',
    techStack: ['TypeScript', 'React', 'Tailwind CSS'],
    demoUrl: 'https://alpin-ads-frontend-test.vercel.app',
    featured: false,
    mockupType: 'laptop'
  },
  'Portofolio': {
    title: 'Personal Developer Portfolio',
    description: 'Website portofolio interaktif dengan desain visual Glassmorphism bernuansa sakura, integrasi real-time GitHub API, verifikasi sertifikat, dan Firebase.',
    category: 'Web & Full-Stack',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    demoUrl: 'https://portofoliokevina.vercel.app',
    featured: true,
    mockupType: 'laptop'
  },
  'materi_SI_pert_8_9_10_11_12_13_14': {
    title: 'Materi & Kunci Jawaban Java SI (Pertemuan 8-14)',
    description: 'Kompilasi kode materi ajar, studi kasus praktikum, tugas mingguan, dan pembahasan kunci jawaban pemrograman Java untuk mahasiswa Sistem Informasi UTY.',
    category: 'Academic & Teaching',
    techStack: ['Java', 'OOP', 'Data Structures', 'Algorithms'],
    featured: false,
    mockupType: 'code'
  },
  'Materi_Query_SBD_TK': {
    title: 'Modul Query Relasional Sistem Basis Data',
    description: 'Koleksi query SQL tingkat lanjut: operasi JOIN multi-tabel, subquery kompleks, grouping, agregasi data, dan teknik indexing untuk mahasiswa Teknik Komputer.',
    category: 'Academic & Teaching',
    techStack: ['SQL', 'MySQL', 'Relational Database'],
    featured: false,
    mockupType: 'code'
  },
  'materi_java_pert_8_9_10_11_12_13_14': {
    title: 'Modul Praktikum Java Teknik Komputer & SI',
    description: 'Materi praktikum Pemrograman Berorientasi Objek Java pertemuan 8 hingga 14 meliputi class inheritance, polimorfisme, dan exception handling.',
    category: 'Academic & Teaching',
    techStack: ['Java', 'OOP', 'Inheritance', 'Polymorphism'],
    featured: false,
    mockupType: 'code'
  },
  'assignment-submission-app': {
    title: 'Assignment Submission Platform',
    description: 'Platform web pengumpulan tugas praktikum mahasiswa SI dan Teknik Komputer UTY dengan fitur upload berkas, monitoring deadline, dan verifikasi status evaluasi asdos.',
    category: 'Web & Full-Stack',
    techStack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel'],
    demoUrl: 'https://assignment-submission-app.vercel.app',
    featured: true,
    mockupType: 'laptop'
  },
  'Materi_PBOP_IF_Pert10_11': {
    title: 'Modul PBOP Konektivitas Database Python',
    description: 'Materi perkuliahan Pemrograman Berorientasi Objek Python pertemuan 10-11: koneksi SQLite/MySQL, implementasi DAO pattern, dan manipulasi data CRUD.',
    category: 'Academic & Teaching',
    techStack: ['Python', 'SQLite', 'OOP', 'Database'],
    featured: false,
    mockupType: 'code'
  },
  'SBD_Firebase_2': {
    title: 'Praktikum SBD Firebase Realtime DB (Part 2)',
    description: 'Modul praktikum Sistem Basis Data pertemuan 10 Teknik Komputer: integrasi NoSQL Firebase Realtime Database lanjutan, real-time listener, dan sinkronisasi data cloud.',
    category: 'Academic & Teaching',
    techStack: ['Firebase', 'NoSQL', 'JavaScript', 'HTML5'],
    featured: false,
    mockupType: 'laptop'
  },
  'SBD_Firebase': {
    title: 'Praktikum SBD Dasar Firebase Realtime',
    description: 'Materi pengantar arsitektur basis data NoSQL dan integrasi Firebase Realtime Database untuk praktikum mahasiswa Teknik Komputer.',
    category: 'Academic & Teaching',
    techStack: ['Firebase', 'JavaScript', 'HTML5', 'Web'],
    featured: false,
    mockupType: 'laptop'
  },
  'dicoba': {
    title: 'Web Component & Layout Experiment',
    description: 'Proyek eksperimen dan eksplorasi styling antarmuka web modern, animasi mikro, dan pengujian komponen responsif berbasis HTML dan CSS.',
    category: 'Web & Full-Stack',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    featured: false,
    mockupType: 'laptop'
  },
  'copypaste_query': {
    title: 'Query Bank & SQL Snippets Portal',
    description: 'Aplikasi utilitas perbankan query SQL praktikum untuk mempermudah mahasiswa mencari, menyalin sintaks query penting, dan memahami struktur query database.',
    category: 'Web & Full-Stack',
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    demoUrl: 'https://query-bank-eight.vercel.app',
    featured: true,
    mockupType: 'laptop'
  },
  'kunci_jawaban': {
    title: 'Kunci Jawaban Responsi UTS TK & SI',
    description: 'Pedoman penilaian dan solusi implementasi kode untuk ujian tengah semester (UTS) praktikum pemrograman mahasiswa Teknik Komputer dan Sistem Informasi.',
    category: 'Academic & Teaching',
    techStack: ['Java', 'Algorithms', 'Testing'],
    featured: false,
    mockupType: 'code'
  },
  'Bahan_ResponsiTK': {
    title: 'Bahan Responsi TK Web Hub',
    description: 'Portal web repositori materi dan referensi kode praktikum untuk memfasilitasi mahasiswa Teknik Komputer menyalin dan mempraktikkan kode saat sesi ujian responsi.',
    category: 'Web & Full-Stack',
    techStack: ['TypeScript', 'React', 'Tailwind CSS'],
    demoUrl: 'https://bahan-responsi-tk.vercel.app',
    featured: false,
    mockupType: 'laptop'
  },
  'materi-PBO-TK': {
    title: 'Materi Perkuliahan PBO TK Semester Ganjil',
    description: 'Modul pembelajaran Pemrograman Berorientasi Objek semester ganjil: konsep enkapsulasi, hierarki pewarisan class, interface, dan implementasi OOP.',
    category: 'Academic & Teaching',
    techStack: ['Java', 'OOP', 'Data Abstraction'],
    featured: false,
    mockupType: 'code'
  },
  'apk_reza': {
    title: 'Sampah Go Mobile Application',
    description: 'Aplikasi mobile pemantauan pengumpulan sampah dan daur ulang pintar berbasis Flutter & Dart untuk mendorong pengelolaan sampah ramah lingkungan.',
    category: 'Mobile App',
    techStack: ['Flutter', 'Dart', 'Mobile UI', 'Firebase'],
    featured: true,
    mockupType: 'phone'
  },
  'healthy2': {
    title: 'Healthy Life Companion App V2',
    description: 'Aplikasi mobile pelacak pola hidup sehat yang memantau rutinitas harian, hidrasi tubuh, kebiasaan positif, dan catatan kebugaran pengguna.',
    category: 'Mobile App',
    techStack: ['Flutter', 'Dart', 'State Management'],
    featured: true,
    mockupType: 'phone'
  },
  'mental_health': {
    title: 'Mental Health & Self-Care Companion',
    description: 'Aplikasi mobile pendamping kesehatan mental yang menyediakan panduan meditasi, pelacakan emosi/mood harian, serta tips relaksasi interaktif.',
    category: 'Mobile App',
    techStack: ['Flutter', 'Dart', 'UX Design'],
    featured: false,
    mockupType: 'phone'
  },
  'kesehatan_mental': {
    title: 'Mental Health Diagnostic Logic Engine',
    description: 'Rancangan arsitektur awal dan algoritma perhitungan skor evaluasi kesehatan mental berbasis C++ dengan logika komputasi terstruktur.',
    category: 'Web & Full-Stack',
    techStack: ['C++', 'Algorithms', 'Logic Engine'],
    featured: false,
    mockupType: 'code'
  },
  'belajarJS': {
    title: 'Modern JavaScript ES6+ Exploration',
    description: 'Eksplorasi konsep modern JavaScript ES6+, asynchronous programming, manipulasi DOM dinamis, dan manipulasi data array terstruktur.',
    category: 'Web & Full-Stack',
    techStack: ['JavaScript', 'HTML5', 'CSS3'],
    featured: false,
    mockupType: 'laptop'
  },
  'belajar_reaact': {
    title: 'React Fundamentals & Component Architecture',
    description: 'Latihan pembuatan komponen reaktif, custom hooks, passing props, state management, dan struktur aplikasi berbasis React modern.',
    category: 'Web & Full-Stack',
    techStack: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    featured: false,
    mockupType: 'laptop'
  },
  'belajar_js': {
    title: 'JavaScript Algorithmic Playground',
    description: 'Latihan logika dasar pemrograman JavaScript: percabangan kondisional, perulangan bertingkat, penanganan event listener, dan manipulasi form.',
    category: 'Web & Full-Stack',
    techStack: ['JavaScript', 'HTML5'],
    featured: false,
    mockupType: 'laptop'
  },
  'pbop_smt3': {
    title: 'Tugas Terstruktur PBOP Python Smt 3',
    description: 'Koleksi tugas dan proyek praktikum Pemrograman Berorientasi Objek semester 3 menggunakan Python dengan implementasi modular.',
    category: 'Academic & Teaching',
    techStack: ['Python', 'OOP', 'Coursework'],
    featured: false,
    mockupType: 'code'
  },
  'rumah_makan': {
    title: 'Web Rumah Makan Nusantara',
    description: 'Landing page promosi restoran tradisional dengan katalog menu makanan, daftar paket hidangan, dan informasi kontak reservasi meja.',
    category: 'Web & Full-Stack',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    featured: false,
    mockupType: 'laptop'
  },
  'project-kafe-kucing': {
    title: 'Project Kafe Kucing Interactive',
    description: 'Website interaktif bertema kafe kucing yang menggabungkan antarmuka frontend ramah pengguna (HTML, CSS, JS) dengan logika pemesanan Python.',
    category: 'Web & Full-Stack',
    techStack: ['Python', 'JavaScript', 'HTML5', 'CSS3'],
    featured: false,
    mockupType: 'laptop'
  },
  'ethopia_web': {
    title: 'Ethopia Fashion Web Store',
    description: 'Desain website etalase toko pakaian Ethopia dengan tata letak grid produk responsif, detail varian pakaian, dan navigasi ramah pengguna seluler.',
    category: 'Web & Full-Stack',
    techStack: ['HTML5', 'CSS3', 'Responsive Design'],
    featured: false,
    mockupType: 'laptop'
  },
  'responsi_pbop': {
    title: 'Responsi UAS PBOP Python Project',
    description: 'Aplikasi tugas akhir responsi Ujian Akhir Semester mata kuliah PBOP Python dengan pemodelan objek class dan persistensi berkas data.',
    category: 'Academic & Teaching',
    techStack: ['Python', 'OOP', 'Data Handling'],
    featured: false,
    mockupType: 'code'
  },
  'kevinamay.github.io': {
    title: 'First Personal Portfolio Exploration',
    description: 'Eksplorasi awal pembuatan website portofolio pribadi pertama menggunakan GitHub Pages untuk menampilkan identitas dan profil pengembang.',
    category: 'Web & Full-Stack',
    techStack: ['HTML5', 'CSS3', 'GitHub Pages'],
    featured: false,
    mockupType: 'laptop'
  },
  'cafe_pbop': {
    title: 'Cafe PBOP Point of Sale System',
    description: 'Sistem aplikasi manajemen kasir dan pemesanan menu kafe berbasis Python OOP untuk simulasi proses operasional kasir restoran.',
    category: 'Web & Full-Stack',
    techStack: ['Python', 'OOP', 'CLI'],
    featured: false,
    mockupType: 'code'
  }
};

// Full Fallback Data (matching all 32 repositories accurately in case GitHub API is rate-limited)
export const FALLBACK_REPOS: EnrichedRepo[] = [
  {
    id: 1,
    name: 'Corporate-Ticketing-Communication-System',
    title: 'Corporate Ticketing & Communication System',
    description: 'Portal tiket korporat dan koordinasi komunikasi lintas divisi perusahaan untuk mempercepat alur kerja penanganan kendala teknis dan administrasi dengan manajemen status real-time.',
    category: 'Web & Full-Stack',
    language: 'Blade',
    techStack: ['Laravel', 'Blade', 'PHP', 'MySQL', 'Vercel'],
    html_url: 'https://github.com/kevinamay/Corporate-Ticketing-Communication-System',
    homepage: 'https://ticketing-kappa-jet.vercel.app/register',
    demoUrl: 'https://ticketing-kappa-jet.vercel.app/register',
    pushed_at: '2026-10-02T02:33:35Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: true,
    mockupType: 'laptop'
  },
  {
    id: 2,
    name: 'kevinamay',
    title: 'GitHub Profile & Artisan Portfolio',
    description: 'Repositori konfigurasi profil GitHub bertema Japanese Cyberpunk & Shokunin Artisan dengan metrik real-time, lencana teknologi, dan integrasi dinamis.',
    category: 'Web & Full-Stack',
    language: 'Markdown',
    techStack: ['Markdown', 'SVG', 'GitHub Actions', 'TokyoNight'],
    html_url: 'https://github.com/kevinamay/kevinamay',
    homepage: null,
    demoUrl: null,
    pushed_at: '2026-10-02T01:58:00Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'laptop'
  },
  {
    id: 3,
    name: 'Soto-Ayam-Pringgondani',
    title: 'Soto Ayam Pringgondani POS & Catalog',
    description: 'Sistem aplikasi web katalog kuliner dan manajemen pemesanan kasir Soto Ayam Pringgondani dengan antarmuka responsif dan rekap transaksi terstruktur.',
    category: 'Web & Full-Stack',
    language: 'TypeScript',
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Next.js'],
    html_url: 'https://github.com/kevinamay/Soto-Ayam-Pringgondani',
    homepage: null,
    demoUrl: null,
    pushed_at: '2026-07-17T16:01:28Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'laptop'
  },
  {
    id: 4,
    name: 'alpin_ads_test_2',
    title: 'Alpin Ads Campaign Suite V2',
    description: 'Dashboard manajemen periklanan digital modern dengan visualisasi metrik performa analitik, sistem filter kampanye dinamis, dan kartu statistik interaktif.',
    category: 'Web & Full-Stack',
    language: 'TypeScript',
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    html_url: 'https://github.com/kevinamay/alpin_ads_test_2',
    homepage: 'https://alpinadstest2.vercel.app',
    demoUrl: 'https://alpinadstest2.vercel.app',
    pushed_at: '2026-05-23T11:41:19Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: true,
    mockupType: 'laptop'
  },
  {
    id: 5,
    name: 'Alpin-Ads-Frontend-Test',
    title: 'Alpin Ads Frontend Showcase V1',
    description: 'Implementasi antarmuka periklanan dengan komponen kartu kampanye modular, validasi formulir interaktif, dan optimasi performa frontend tingkat tinggi.',
    category: 'Web & Full-Stack',
    language: 'TypeScript',
    techStack: ['TypeScript', 'React', 'Tailwind CSS'],
    html_url: 'https://github.com/kevinamay/Alpin-Ads-Frontend-Test',
    homepage: 'https://alpin-ads-frontend-test.vercel.app',
    demoUrl: 'https://alpin-ads-frontend-test.vercel.app',
    pushed_at: '2026-05-20T21:40:23Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'laptop'
  },
  {
    id: 6,
    name: 'Portofolio',
    title: 'Personal Developer Portfolio',
    description: 'Website portofolio interaktif dengan desain visual Glassmorphism bernuansa sakura, integrasi real-time GitHub API, verifikasi sertifikat, dan Firebase.',
    category: 'Web & Full-Stack',
    language: 'TypeScript',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    html_url: 'https://github.com/kevinamay/Portofolio',
    homepage: 'https://portofoliokevina.vercel.app',
    demoUrl: 'https://portofoliokevina.vercel.app',
    pushed_at: '2026-03-01T04:29:07Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: true,
    mockupType: 'laptop'
  },
  {
    id: 7,
    name: 'materi_SI_pert_8_9_10_11_12_13_14',
    title: 'Materi & Kunci Jawaban Java SI (Pertemuan 8-14)',
    description: 'Kompilasi kode materi ajar, studi kasus praktikum, tugas mingguan, dan pembahasan kunci jawaban pemrograman Java untuk mahasiswa Sistem Informasi UTY.',
    category: 'Academic & Teaching',
    language: 'Java',
    techStack: ['Java', 'OOP', 'Data Structures', 'Algorithms'],
    html_url: 'https://github.com/kevinamay/materi_SI_pert_8_9_10_11_12_13_14',
    homepage: null,
    demoUrl: null,
    pushed_at: '2026-01-09T10:08:04Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'code'
  },
  {
    id: 8,
    name: 'Materi_Query_SBD_TK',
    title: 'Modul Query Relasional Sistem Basis Data',
    description: 'Koleksi query SQL tingkat lanjut: operasi JOIN multi-tabel, subquery kompleks, grouping, agregasi data, dan teknik indexing untuk mahasiswa Teknik Komputer.',
    category: 'Academic & Teaching',
    language: 'SQL',
    techStack: ['SQL', 'MySQL', 'Relational Database'],
    html_url: 'https://github.com/kevinamay/Materi_Query_SBD_TK',
    homepage: null,
    demoUrl: null,
    pushed_at: '2025-12-23T10:01:33Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'code'
  },
  {
    id: 9,
    name: 'materi_java_pert_8_9_10_11_12_13_14',
    title: 'Modul Praktikum Java Teknik Komputer & SI',
    description: 'Materi praktikum Pemrograman Berorientasi Objek Java pertemuan 8 hingga 14 meliputi class inheritance, polimorfisme, dan exception handling.',
    category: 'Academic & Teaching',
    language: 'Java',
    techStack: ['Java', 'OOP', 'Inheritance', 'Polymorphism'],
    html_url: 'https://github.com/kevinamay/materi_java_pert_8_9_10_11_12_13_14',
    homepage: null,
    demoUrl: null,
    pushed_at: '2025-12-23T03:10:36Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'code'
  },
  {
    id: 10,
    name: 'assignment-submission-app',
    title: 'Assignment Submission Platform',
    description: 'Platform web pengumpulan tugas praktikum mahasiswa SI dan Teknik Komputer UTY dengan fitur upload berkas, monitoring deadline, dan verifikasi status evaluasi asdos.',
    category: 'Web & Full-Stack',
    language: 'TypeScript',
    techStack: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Vercel'],
    html_url: 'https://github.com/kevinamay/assignment-submission-app',
    homepage: 'https://assignment-submission-app.vercel.app',
    demoUrl: 'https://assignment-submission-app.vercel.app',
    pushed_at: '2025-12-21T17:38:14Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: true,
    mockupType: 'laptop'
  },
  {
    id: 11,
    name: 'Materi_PBOP_IF_Pert10_11',
    title: 'Modul PBOP Konektivitas Database Python',
    description: 'Materi perkuliahan Pemrograman Berorientasi Objek Python pertemuan 10-11: koneksi SQLite/MySQL, implementasi DAO pattern, dan manipulasi data CRUD.',
    category: 'Academic & Teaching',
    language: 'Python',
    techStack: ['Python', 'SQLite', 'OOP', 'Database'],
    html_url: 'https://github.com/kevinamay/Materi_PBOP_IF_Pert10_11',
    homepage: null,
    demoUrl: null,
    pushed_at: '2025-12-17T00:12:24Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'code'
  },
  {
    id: 12,
    name: 'SBD_Firebase_2',
    title: 'Praktikum SBD Firebase Realtime DB (Part 2)',
    description: 'Modul praktikum Sistem Basis Data pertemuan 10 Teknik Komputer: integrasi NoSQL Firebase Realtime Database lanjutan, real-time listener, dan sinkronisasi data cloud.',
    category: 'Academic & Teaching',
    language: 'HTML',
    techStack: ['Firebase', 'NoSQL', 'JavaScript', 'HTML5'],
    html_url: 'https://github.com/kevinamay/SBD_Firebase_2',
    homepage: null,
    demoUrl: null,
    pushed_at: '2025-12-15T07:32:01Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'laptop'
  },
  {
    id: 13,
    name: 'SBD_Firebase',
    title: 'Praktikum SBD Dasar Firebase Realtime',
    description: 'Materi pengantar arsitektur basis data NoSQL dan integrasi Firebase Realtime Database untuk praktikum mahasiswa Teknik Komputer.',
    category: 'Academic & Teaching',
    language: 'HTML',
    techStack: ['Firebase', 'JavaScript', 'HTML5', 'Web'],
    html_url: 'https://github.com/kevinamay/SBD_Firebase',
    homepage: null,
    demoUrl: null,
    pushed_at: '2025-12-03T00:17:19Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'laptop'
  },
  {
    id: 14,
    name: 'dicoba',
    title: 'Web Component & Layout Experiment',
    description: 'Proyek eksperimen dan eksplorasi styling antarmuka web modern, animasi mikro, dan pengujian komponen responsif berbasis HTML dan CSS.',
    category: 'Web & Full-Stack',
    language: 'HTML',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    html_url: 'https://github.com/kevinamay/dicoba',
    homepage: null,
    demoUrl: null,
    pushed_at: '2025-12-01T16:35:50Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'laptop'
  },
  {
    id: 15,
    name: 'copypaste_query',
    title: 'Query Bank & SQL Snippets Portal',
    description: 'Aplikasi utilitas perbankan query SQL praktikum untuk mempermudah mahasiswa mencari, menyalin sintaks query penting, dan memahami struktur query database.',
    category: 'Web & Full-Stack',
    language: 'TypeScript',
    techStack: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    html_url: 'https://github.com/kevinamay/copypaste_query',
    homepage: 'https://query-bank-eight.vercel.app',
    demoUrl: 'https://query-bank-eight.vercel.app',
    pushed_at: '2025-11-22T12:46:37Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: true,
    mockupType: 'laptop'
  },
  {
    id: 16,
    name: 'kunci_jawaban',
    title: 'Kunci Jawaban Responsi UTS TK & SI',
    description: 'Pedoman penilaian dan solusi implementasi kode untuk ujian tengah semester (UTS) praktikum pemrograman mahasiswa Teknik Komputer dan Sistem Informasi.',
    category: 'Academic & Teaching',
    language: 'Java',
    techStack: ['Java', 'Algorithms', 'Testing'],
    html_url: 'https://github.com/kevinamay/kunci_jawaban',
    homepage: null,
    demoUrl: null,
    pushed_at: '2025-11-08T06:09:03Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'code'
  },
  {
    id: 17,
    name: 'Bahan_ResponsiTK',
    title: 'Bahan Responsi TK Web Hub',
    description: 'Portal web repositori materi dan referensi kode praktikum untuk memfasilitasi mahasiswa Teknik Komputer menyalin dan mempraktikkan kode saat sesi ujian responsi.',
    category: 'Web & Full-Stack',
    language: 'TypeScript',
    techStack: ['TypeScript', 'React', 'Tailwind CSS'],
    html_url: 'https://github.com/kevinamay/Bahan_ResponsiTK',
    homepage: 'https://bahan-responsi-tk.vercel.app',
    demoUrl: 'https://bahan-responsi-tk.vercel.app',
    pushed_at: '2025-11-02T19:41:54Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'laptop'
  },
  {
    id: 18,
    name: 'materi-PBO-TK',
    title: 'Materi Perkuliahan PBO TK Semester Ganjil',
    description: 'Modul pembelajaran Pemrograman Berorientasi Objek semester ganjil: konsep enkapsulasi, hierarki pewarisan class, interface, dan implementasi OOP.',
    category: 'Academic & Teaching',
    language: 'Java',
    techStack: ['Java', 'OOP', 'Data Abstraction'],
    html_url: 'https://github.com/kevinamay/materi-PBO-TK',
    homepage: null,
    demoUrl: null,
    pushed_at: '2025-10-08T16:39:19Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'code'
  },
  {
    id: 19,
    name: 'apk_reza',
    title: 'Sampah Go Mobile Application',
    description: 'Aplikasi mobile pemantauan pengumpulan sampah dan daur ulang pintar berbasis Flutter & Dart untuk mendorong pengelolaan sampah ramah lingkungan.',
    category: 'Mobile App',
    language: 'Dart',
    techStack: ['Flutter', 'Dart', 'Mobile UI', 'Firebase'],
    html_url: 'https://github.com/kevinamay/apk_reza',
    homepage: null,
    demoUrl: null,
    pushed_at: '2025-07-06T13:34:14Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: true,
    mockupType: 'phone'
  },
  {
    id: 20,
    name: 'healthy2',
    title: 'Healthy Life Companion App V2',
    description: 'Aplikasi mobile pelacak pola hidup sehat yang memantau rutinitas harian, hidrasi tubuh, kebiasaan positif, dan catatan kebugaran pengguna.',
    category: 'Mobile App',
    language: 'Dart',
    techStack: ['Flutter', 'Dart', 'State Management'],
    html_url: 'https://github.com/kevinamay/healthy2',
    homepage: null,
    demoUrl: null,
    pushed_at: '2025-07-02T18:12:37Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: true,
    mockupType: 'phone'
  },
  {
    id: 21,
    name: 'mental_health',
    title: 'Mental Health & Self-Care Companion',
    description: 'Aplikasi mobile pendamping kesehatan mental yang menyediakan panduan meditasi, pelacakan emosi/mood harian, serta tips relaksasi interaktif.',
    category: 'Mobile App',
    language: 'Dart',
    techStack: ['Flutter', 'Dart', 'UX Design'],
    html_url: 'https://github.com/kevinamay/mental_health',
    homepage: null,
    demoUrl: null,
    pushed_at: '2025-01-17T00:51:20Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'phone'
  },
  {
    id: 22,
    name: 'kesehatan_mental',
    title: 'Mental Health Diagnostic Logic Engine',
    description: 'Rancangan arsitektur awal dan algoritma perhitungan skor evaluasi kesehatan mental berbasis C++ dengan logika komputasi terstruktur.',
    category: 'Web & Full-Stack',
    language: 'C++',
    techStack: ['C++', 'Algorithms', 'Logic Engine'],
    html_url: 'https://github.com/kevinamay/kesehatan_mental',
    homepage: null,
    demoUrl: null,
    pushed_at: '2024-12-28T18:51:06Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'code'
  },
  {
    id: 23,
    name: 'belajarJS',
    title: 'Modern JavaScript ES6+ Exploration',
    description: 'Eksplorasi konsep modern JavaScript ES6+, asynchronous programming, manipulasi DOM dinamis, dan manipulasi data array terstruktur.',
    category: 'Web & Full-Stack',
    language: 'JavaScript',
    techStack: ['JavaScript', 'HTML5', 'CSS3'],
    html_url: 'https://github.com/kevinamay/belajarJS',
    homepage: null,
    demoUrl: null,
    pushed_at: '2024-03-24T20:50:14Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'laptop'
  },
  {
    id: 24,
    name: 'belajar_reaact',
    title: 'React Fundamentals & Component Architecture',
    description: 'Latihan pembuatan komponen reaktif, custom hooks, passing props, state management, dan struktur aplikasi berbasis React modern.',
    category: 'Web & Full-Stack',
    language: 'HTML',
    techStack: ['React', 'JavaScript', 'HTML5', 'CSS3'],
    html_url: 'https://github.com/kevinamay/belajar_reaact',
    homepage: null,
    demoUrl: null,
    pushed_at: '2024-03-05T05:51:30Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'laptop'
  },
  {
    id: 25,
    name: 'belajar_js',
    title: 'JavaScript Algorithmic Playground',
    description: 'Latihan logika dasar pemrograman JavaScript: percabangan kondisional, perulangan bertingkat, penanganan event listener, dan manipulasi form.',
    category: 'Web & Full-Stack',
    language: 'HTML',
    techStack: ['JavaScript', 'HTML5'],
    html_url: 'https://github.com/kevinamay/belajar_js',
    homepage: null,
    demoUrl: null,
    pushed_at: '2024-02-02T15:19:57Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'laptop'
  },
  {
    id: 26,
    name: 'pbop_smt3',
    title: 'Tugas Terstruktur PBOP Python Smt 3',
    description: 'Koleksi tugas dan proyek praktikum Pemrograman Berorientasi Objek semester 3 menggunakan Python dengan implementasi modular.',
    category: 'Academic & Teaching',
    language: 'Python',
    techStack: ['Python', 'OOP', 'Coursework'],
    html_url: 'https://github.com/kevinamay/pbop_smt3',
    homepage: null,
    demoUrl: null,
    pushed_at: '2024-01-27T16:54:32Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'code'
  },
  {
    id: 27,
    name: 'rumah_makan',
    title: 'Web Rumah Makan Nusantara',
    description: 'Landing page promosi restoran tradisional dengan katalog menu makanan, daftar paket hidangan, dan informasi kontak reservasi meja.',
    category: 'Web & Full-Stack',
    language: 'HTML',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    html_url: 'https://github.com/kevinamay/rumah_makan',
    homepage: null,
    demoUrl: null,
    pushed_at: '2024-01-24T19:28:18Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'laptop'
  },
  {
    id: 28,
    name: 'project-kafe-kucing',
    title: 'Project Kafe Kucing Interactive',
    description: 'Website interaktif bertema kafe kucing yang menggabungkan antarmuka frontend ramah pengguna (HTML, CSS, JS) dengan logika pemesanan Python.',
    category: 'Web & Full-Stack',
    language: 'Python',
    techStack: ['Python', 'JavaScript', 'HTML5', 'CSS3'],
    html_url: 'https://github.com/kevinamay/project-kafe-kucing',
    homepage: null,
    demoUrl: null,
    pushed_at: '2024-01-24T07:08:15Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'laptop'
  },
  {
    id: 29,
    name: 'ethopia_web',
    title: 'Ethopia Fashion Web Store',
    description: 'Desain website etalase toko pakaian Ethopia dengan tata letak grid produk responsif, detail varian pakaian, dan navigasi ramah pengguna seluler.',
    category: 'Web & Full-Stack',
    language: 'CSS',
    techStack: ['HTML5', 'CSS3', 'Responsive Design'],
    html_url: 'https://github.com/kevinamay/ethopia_web',
    homepage: null,
    demoUrl: null,
    pushed_at: '2024-01-23T14:01:36Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'laptop'
  },
  {
    id: 30,
    name: 'responsi_pbop',
    title: 'Responsi UAS PBOP Python Project',
    description: 'Aplikasi tugas akhir responsi Ujian Akhir Semester mata kuliah PBOP Python dengan pemodelan objek class dan persistensi berkas data.',
    category: 'Academic & Teaching',
    language: 'Python',
    techStack: ['Python', 'OOP', 'Data Handling'],
    html_url: 'https://github.com/kevinamay/responsi_pbop',
    homepage: null,
    demoUrl: null,
    pushed_at: '2024-01-21T17:36:32Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'code'
  },
  {
    id: 31,
    name: 'kevinamay.github.io',
    title: 'First Personal Portfolio Exploration',
    description: 'Eksplorasi awal pembuatan website portofolio pribadi pertama menggunakan GitHub Pages untuk menampilkan identitas dan profil pengembang.',
    category: 'Web & Full-Stack',
    language: 'HTML',
    techStack: ['HTML5', 'CSS3', 'GitHub Pages'],
    html_url: 'https://github.com/kevinamay/kevinamay.github.io',
    homepage: null,
    demoUrl: null,
    pushed_at: '2024-01-14T00:20:24Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'laptop'
  },
  {
    id: 32,
    name: 'cafe_pbop',
    title: 'Cafe PBOP Point of Sale System',
    description: 'Sistem aplikasi manajemen kasir dan pemesanan menu kafe berbasis Python OOP untuk simulasi proses operasional kasir restoran.',
    category: 'Web & Full-Stack',
    language: 'Python',
    techStack: ['Python', 'OOP', 'CLI'],
    html_url: 'https://github.com/kevinamay/cafe_pbop',
    homepage: null,
    demoUrl: null,
    pushed_at: '2024-01-13T22:42:37Z',
    stargazers_count: 0,
    forks_count: 0,
    featured: false,
    mockupType: 'code'
  }
];

// Helper to merge raw GitHub Repo data with curated metadata
export function enrichRepo(repo: any): EnrichedRepo {
  const meta = REPO_METADATA[repo.name];

  const cleanTitle = meta?.title || repo.name.replace(/[-_]/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase());
  const description = meta?.description || repo.description || 'Proyek pengembangan software oleh Kevina Maydiva.';
  const category = meta?.category || (
    ['dart', 'flutter'].includes(repo.language?.toLowerCase() || '') ? 'Mobile App' :
    ['java', 'python'].includes(repo.language?.toLowerCase() || '') && repo.name.toLowerCase().includes('materi') ? 'Academic & Teaching' :
    'Web & Full-Stack'
  );
  
  const techStack = meta?.techStack || [repo.language || 'Code'].filter(Boolean);
  const demoUrl = meta?.demoUrl || repo.homepage || null;
  const featured = meta?.featured ?? (Boolean(repo.homepage) || repo.stargazers_count > 0);
  
  const mockupType = meta?.mockupType || (
    ['dart', 'flutter'].includes(repo.language?.toLowerCase() || '') ? 'phone' :
    ['c++', 'python', 'java', 'sql'].includes(repo.language?.toLowerCase() || '') ? 'code' :
    'laptop'
  );

  return {
    id: repo.id,
    name: repo.name,
    title: cleanTitle,
    description,
    category,
    language: repo.language || (techStack[0] ?? 'Code'),
    techStack,
    html_url: repo.html_url,
    homepage: repo.homepage,
    demoUrl,
    pushed_at: repo.pushed_at,
    stargazers_count: repo.stargazers_count ?? 0,
    forks_count: repo.forks_count ?? 0,
    featured,
    mockupType,
  };
}

// Function to fetch all repos from GitHub with smart sorting and fallback
export async function getEnrichedRepos(): Promise<EnrichedRepo[]> {
  try {
    const res = await fetch('https://api.github.com/users/kevinamay/repos?per_page=100&sort=pushed&direction=desc', {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'kevinamay-portfolio'
      },
      next: { revalidate: 60 } // Revalidate every 60 seconds
    });

    if (!res.ok) {
      console.warn(`GitHub API returned ${res.status} ${res.statusText}, using enriched fallback dataset.`);
      return FALLBACK_REPOS;
    }

    const rawRepos = await res.json();
    if (!Array.isArray(rawRepos) || rawRepos.length === 0) {
      return FALLBACK_REPOS;
    }

    // Sort by pushed_at descending (latest work first)
    const sorted = [...rawRepos].sort(
      (a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
    );

    return sorted.map(enrichRepo);
  } catch (error) {
    console.warn('Error fetching repos from GitHub API, falling back to local dataset:', error);
    return FALLBACK_REPOS;
  }
}
