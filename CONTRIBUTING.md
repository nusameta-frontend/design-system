# Panduan Kontribusi (Contributing Guide)

Terima kasih atas minat Anda untuk berkontribusi pada **Nusameta Design System**! 🎉

Dokumen ini berisi panduan teknis untuk menyiapkan lingkungan pengembangan lokal, standar pembuatan komponen, dan proses _build_.

---

## 🛠 Prasyarat (Prerequisites)

Sebelum memulai, pastikan perangkat Anda telah terinstal:

- **[Node.js](https://nodejs.org/)** (Versi 18 LTS atau terbaru).
- **[Yarn](https://yarnpkg.com/)** (Versi 4.x).
  - Proyek ini menggunakan Yarn Modern. Jangan gunakan `npm` atau `pnpm` untuk menghindari konflik _lockfile_.
- **Visual Studio Code** (Disarankan) dengan ekstensi:
  - _ESLint_
  - _Prettier_

---

## 💻 Setup Lingkungan Lokal

Ikuti langkah-langkah ini untuk menjalankan proyek di komputer Anda:

### 1. Clone Repositori

    git clone [https://github.com/username/nusameta-design-system.git](https://github.com/username/nusameta-design-system.git)
    cd nusameta-design-system

### 2. Instalasi Dependensi

Jalankan perintah berikut untuk mengunduh semua paket yang dibutuhkan.

    yarn install

### 3. Jalankan Storybook

Kita menggunakan Storybook sebagai lingkungan pengembangan utama (_playground_).

    yarn storybook

Buka browser Anda di `http://localhost:6006`. Setiap perubahan kode di folder `src` akan otomatis diperbarui (_Hot Reload_).

---

## 🧩 Membuat Komponen Baru

Konsistensi adalah kunci. Ikuti struktur folder ini saat membuat komponen baru.

### 1. Struktur Folder

Setiap komponen harus memiliki foldernya sendiri di dalam `src/components/`.

Contoh untuk komponen `Card`:

    src/components/Card/
    ├── Card.tsx           # Logika Komponen & JSX
    ├── Card.stories.tsx   # File Dokumentasi Storybook
    └── index.ts           # (Opsional) Re-export file untuk folder ini

### 2. Aturan Penulisan (Conventions)

- **Nama Komponen**: Gunakan format `PascalCase` (contoh: `PrimaryButton`, `ModalDialog`).
- **Interface Props**: Selalu definisikan tipe data props secara eksplisit dan export interface tersebut.

  export interface CardProps {
  title: string;
  children: React.ReactNode;
  }

- **"Use Client"**: Tidak perlu menambahkan `"use client"` secara manual per file, karena sistem build (Vite) akan menambahkannya secara otomatis di hasil akhir.

### 3. Registrasi Komponen (PENTING)

Agar komponen Anda ikut ter-_build_ dan bisa diimpor oleh pengguna, Anda **wajib** mendaftarkannya di file entry point utama.

Buka `src/index.ts` dan tambahkan:

    export * from './components/Card/Card';

---

## 🧪 Pengujian & Build

Sebelum mengirimkan perubahan (Push/Pull Request), pastikan kode Anda bebas error.

### Cek Tipe Data (TypeScript)

Pastikan tidak ada error TypeScript:

    yarn typecheck

### Simulasi Build

Pastikan proses bundling berjalan lancar:

    yarn build

Periksa folder `dist/` untuk memastikan file `.js`, `.css`, dan `.d.ts` berhasil dibuat.

### Uji Coba di Aplikasi Lain (Linking)

Untuk menguji komponen di aplikasi nyata (misal: Next.js) secara lokal:

1. Di folder ini: `yarn build` lalu `yarn link`.
2. Di folder aplikasi tujuan: `yarn link "@username/design-system"`.

---

## 📝 Format Commit

Gunakan pesan commit yang jelas dan deskriptif. Disarankan menggunakan konvensi sederhana seperti:

- `feat: Menambahkan komponen Input`
- `fix: Memperbaiki warna border pada Button`
- `docs: Memperbarui README`
- `chore: Upgrade dependensi`

---

## ❓ Butuh Bantuan?

Jika Anda mengalami masalah saat setup, silakan buka **Issue** di repositori ini.

Happy Coding! 🚀
