import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeString(str: string = "") {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function truncateString(str: string = "", maxLength: number) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength - 3) + "...";
  }
  return str;
}
