import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Mail, Trash2, Loader2, Save } from "lucide-react"; // Contoh icon

// 1. Konfigurasi Metadata
const meta = {
  title: "Components/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered", // Posisi komponen di tengah canvas
  },
  tags: ["autodocs"], // Otomatis generate halaman Docs

  // Konfigurasi Controls (Panel bawah Storybook)
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "Gaya visual tombol",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "Ukuran dimensi tombol",
    },
    isDisabled: {
      control: "boolean",
      description: "Status apakah tombol bisa diklik atau tidak",
    },
    // React Aria menggunakan onPress, bukan onClick
    onPress: { action: "pressed" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// --- DAFTAR STORIES ---

// 2. Default Story (Playground utama)
export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    children: "Simpan Data", // Konten default
  },
};

// 8. State: Disabled (Fitur bawaan React Aria)
export const Disabled: Story = {
  args: {
    isDisabled: true,
    children: "Tidak Bisa Diklik",
  },
};
