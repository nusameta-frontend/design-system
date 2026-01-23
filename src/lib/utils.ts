// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  prefix: "nm-",

  //Jika punya class custom di config tailwind, daftarkan di sini.
  // Contoh:  punya font size custom 'text-tiny'
  // extend: {
  //   classGroups: {
  //     'font-size': ['tiny'],
  //   },
  // },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
