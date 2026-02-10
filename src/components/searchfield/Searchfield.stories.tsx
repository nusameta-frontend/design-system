import type { Meta, StoryObj } from "@storybook/react";
import {
  ComposedSearchField,
  SearchField,
  SearchFieldGroup,
  SearchFieldInput,
  SearchFieldClear,
} from "./Searchfield";
import { Label } from "../textfield/Field";
import { SearchIcon, XIcon } from "lucide-react";

const meta = {
  title: "Components/SearchField",
  component: ComposedSearchField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label untuk search field",
    },
    description: {
      control: "text",
      description: "Deskripsi atau helper text di bawah search field",
    },
    errorMessage: {
      control: "text",
      description: "Pesan error ketika validasi gagal",
    },
    isDisabled: {
      control: "boolean",
      description: "Status apakah search field bisa diisi atau tidak",
    },
    isRequired: {
      control: "boolean",
      description: "Status apakah search field wajib diisi",
    },
  },
} satisfies Meta<typeof ComposedSearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. Default SearchField
export const Default: Story = {
  args: {
    label: "Cari",
    description: "Masukkan kata kunci pencarian",
  },
};

// 2. With Placeholder
export const WithPlaceholder: Story = {
  args: {
    label: "Pencarian",
  },
  render: (args) => (
    <SearchField {...args}>
      <Label>{args.label}</Label>
      <SearchFieldGroup>
        <SearchIcon
          aria-hidden
          className="nm:size-4 nm:text-muted-foreground"
        />
        <SearchFieldInput placeholder="Ketik untuk mencari..." />
        <SearchFieldClear>
          <XIcon aria-hidden className="nm:size-4" />
        </SearchFieldClear>
      </SearchFieldGroup>
    </SearchField>
  ),
};

// 3. Disabled State
export const Disabled: Story = {
  args: {
    label: "Pencarian (Tidak Aktif)",
    isDisabled: true,
    description: "Search field sedang tidak aktif",
  },
};

// 4. Required Field
export const Required: Story = {
  args: {
    label: "Pencarian (Wajib)",
    isRequired: true,
    description: "Harus diisi untuk melanjutkan",
  },
};

// 5. With Error
export const WithError: Story = {
  args: {
    label: "Pencarian",
    isInvalid: true,
    errorMessage: "Pencarian tidak boleh kosong",
  },
};

// 6. With Helper Text
export const WithHelperText: Story = {
  args: {
    label: "Cari Produk",
    description: "Gunakan kata kunci spesifik untuk hasil lebih akurat",
  },
};

// 7. Custom SearchField
export const CustomSearchField: Story = {
  render: () => (
    <SearchField className="nm:w-80">
      <Label>Cari Artikel</Label>
      <SearchFieldGroup>
        <SearchIcon
          aria-hidden
          className="nm:size-4 nm:text-muted-foreground"
        />
        <SearchFieldInput placeholder="Cari berdasarkan judul..." />
        <SearchFieldClear>
          <XIcon aria-hidden className="nm:size-4" />
        </SearchFieldClear>
      </SearchFieldGroup>
    </SearchField>
  ),
};

// 8. Compact SearchField
export const Compact: Story = {
  render: () => (
    <SearchField>
      <SearchFieldGroup className="nm:h-8">
        <SearchIcon
          aria-hidden
          className="nm:size-3 nm:text-muted-foreground"
        />
        <SearchFieldInput
          placeholder="Quick search..."
          className="nm:text-xs"
        />
        <SearchFieldClear>
          <XIcon aria-hidden className="nm:size-3" />
        </SearchFieldClear>
      </SearchFieldGroup>
    </SearchField>
  ),
};
