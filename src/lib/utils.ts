import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(targetId: string, offset: number = 80) {
  const element = document.getElementById(targetId);
  if (element) {
    const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  }
}

