# ❖ Nusameta Design System

[![npm version](https://img.shields.io/npm/v/@username/design-system.svg?style=flat-square)](https://www.npmjs.com/package/@username/design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg?style=flat-square)](https://www.typescriptlang.org/)
[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://storybook.js.org/)

**Nusameta Design System** adalah pustaka komponen UI (User Interface) yang dibangun di atas **React**, **TypeScript**, dan **Vite**. Library ini dirancang khusus agar **ringan**, **type-safe**, dan **kompatibel secara native** dengan **Next.js App Router**.

---

## ✨ Fitur Utama

- 🚀 **Next.js App Router Ready**: Setiap komponen otomatis menyertakan direktif `"use client"`, sehingga aman digunakan di dalam Server Components.
- 📦 **Tree-Shakable**: Menggunakan Rollup untuk memastikan hanya kode yang Anda gunakan yang masuk ke bundle aplikasi.
- 🎨 **CSS Terisolasi**: Gaya (Styles) dibundel dalam satu file CSS yang mudah dikelola.
- 📘 **Type Safety**: Dilengkapi dengan definisi tipe TypeScript (`.d.ts`) bawaan.
- 📚 **Dokumentasi Storybook**: Lingkungan pengembangan terisolasi untuk menguji komponen.

---

## 📦 Instalasi

Pastikan Anda telah menginstal `react` dan `react-dom` (versi 18 atau lebih baru) di proyek Anda.

```bash
# Menggunakan Yarn (Rekomendasi)
yarn add @username/design-system

# Menggunakan NPM
npm install @username/design-system

# Menggunakan PNPM
pnpm add @username/design-system
```
