/* =========================================================
   config.js - Konfigurasi & koneksi Supabase
   Isi dua nilai di bawah dari: Supabase > Project Settings > API
   (anon key aman dipakai di frontend karena dilindungi RLS)
   ========================================================= */
const CONFIG = {
  SUPABASE_URL: 'https://fcojrcltfmtasoxsrqik.supabase.co',
  SUPABASE_KEY: 'ISI_ANON_PUBLIC_KEY',
  BUCKET_TUGAS: 'tugas',
  BUCKET_MATERI: 'materi',
  MAX_FILE_MB: 20,        // batas unggah tugas (pengunjung)
  MAX_MATERI_MB: 50,      // batas unggah materi (admin)
  EXT_TUGAS: ['pdf', 'ppt', 'pptx', 'doc', 'docx']
};

// null jika belum dikonfigurasi, sehingga web tetap tampil tanpa error
const db = (window.supabase && !CONFIG.SUPABASE_URL.startsWith('ISI') && !CONFIG.SUPABASE_KEY.startsWith('ISI'))
  ? window.supabase.createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_KEY)
  : null;
