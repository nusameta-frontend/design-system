import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextField, Input, TextArea, WrappedField } from "./Textfield";

// 1. Konfigurasi Metadata
const meta = {
  title: "Components/TextField",
  component: WrappedField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label untuk input field",
    },
    description: {
      control: "text",
      description: "Deskripsi atau helper text di bawah input",
    },
    errorMessage: {
      control: "text",
      description: "Pesan error ketika validasi gagal",
    },
    isDisabled: {
      control: "boolean",
      description: "Status apakah input bisa diisi atau tidak",
    },
    isRequired: {
      control: "boolean",
      description: "Status apakah input wajib diisi",
    },
    type: {
      control: "text",
      description: "Tipe input (text, email, password, number, dll)",
    },
    textArea: {
      control: "boolean",
      description: "Render sebagai TextArea atau Input",
    },
  },
} satisfies Meta<typeof WrappedField>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- DAFTAR STORIES ---

// 1. Default Input
export const Default: Story = {
  args: {
    label: "Nama Lengkap",
    description: "Masukkan nama lengkap Anda",
    placeholder: "Contoh: Andi Wijaya",
  },
};

// 2. Email Input
export const Email: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "contoh@email.com",
    description: "Kami akan mengirim konfirmasi ke email ini",
  },
};

// 3. Password Input
export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "••••••••",
    description: "Minimal 8 karakter",
  },
};

// 4. Disabled State
export const Disabled: Story = {
  args: {
    label: "Tidak Aktif",
    placeholder: "Tidak bisa diisi",
    isDisabled: true,
    description: "Field ini sedang tidak aktif",
  },
};

// 5. Required Field
export const Required: Story = {
  args: {
    label: "Username (Wajib)",
    isRequired: true,
    placeholder: "Username Anda",
    description: "Harus diisi untuk melanjutkan",
  },
};

// 6. With Error
export const WithError: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "contoh@email.com",
    isInvalid: true,
    errorMessage: "Format email tidak valid",
  },
};

// 7. With Helper Text
export const WithHelperText: Story = {
  args: {
    label: "Username",
    placeholder: "Pilih username unik Anda",
    description: "Username hanya bisa berisi huruf, angka, dan underscore",
  },
};

// 8. TextArea
export const WithTextArea: Story = {
  args: {
    label: "Deskripsi",
    textArea: true,
    placeholder: "Tulis deskripsi di sini...",
    description: "Maksimal 500 karakter",
  },
};

// 9. TextArea Disabled
export const TextAreaDisabled: Story = {
  args: {
    label: "Komentar (Hanya Baca)",
    textArea: true,
    isDisabled: true,
    placeholder: "Tidak bisa diedit",
  },
};

// 10. Number Input
export const NumberInput: Story = {
  args: {
    label: "Jumlah Barang",
    type: "number",
    placeholder: "0",
    description: "Masukkan jumlah barang yang ingin dibeli",
  },
};

// 11. Search Input
export const SearchInput: Story = {
  args: {
    label: "Pencarian",
    type: "search",
    placeholder: "Cari...",
    description: "Tekan Enter untuk mencari",
  },
};
