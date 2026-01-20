# Nusameta Design System

Design System berbasis React, TypeScript, dan Vite yang modern, ringan, dan siap untuk Next.js App Router.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)

---

## ✨ Fitur Utama

- 🚀 **Next.js Ready**: Kompatibel penuh dengan App Router (otomatis "use client").
- 📦 **Ringan**: Menggunakan Rollup untuk tree-shaking yang optimal.
- 🎨 **Mudah Dikustomisasi**: CSS terisolasi dan mudah di-override.
- 📘 **Type Safe**: Dukungan TypeScript penuh dengan definisi tipe (.d.ts).

---

## 📦 Instalasi

Jalankan perintah berikut di terminal proyek Anda:

    yarn add @username/design-system

Atau jika menggunakan NPM:

    npm install @username/design-system

> **Catatan:** Ganti `@username` dengan scope NPM Anda yang sebenarnya.

---

## 🚀 Cara Penggunaan

### 1. Import CSS Global (Wajib)

Agar tampilan komponen muncul dengan benar, Anda harus mengimpor file CSS library ini **satu kali** di file entry point aplikasi Anda.

**Untuk Next.js (App Router)**, buka `app/layout.tsx`:

    import type { Metadata } from 'next';
    import { Inter } from 'next/font/google';
    import './globals.css';

    // 👇 Import CSS Design System di sini
    import '@username/design-system/dist/index.css';

    export default function RootLayout({ children }: { children: React.ReactNode }) {
      return (
        <html lang="en">
          <body>{children}</body>
        </html>
      );
    }

### 2. Menggunakan Komponen

Anda bisa langsung mengimpor komponen dan menggunakannya di halaman manapun.

    import { Button } from '@username/design-system';

    export default function HomePage() {
      return (
        <div style={{ padding: '20px' }}>
          <h1>Contoh Penggunaan</h1>

          <Button
            label="Klik Saya"
            primary={true}
            onClick={() => alert('Berhasil!')}
          />
        </div>
      );
    }

---

## 🛠 Pengembangan (Development)

Jika Anda ingin berkontribusi mengembangkan library ini, memperbaiki bug, atau menambah komponen baru, silakan baca panduan lengkapnya di sini:

👉 **[Baca Panduan Kontribusi (CONTRIBUTING.md)](./CONTRIBUTING.md)**

---

## 📝 Lisensi

Proyek ini dilisensikan di bawah **MIT License**.
