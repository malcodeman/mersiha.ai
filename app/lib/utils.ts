import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateCircularPositions(
  count: number,
  centerX: number,
  centerY: number,
  radius: number,
) {
  const angleStep = (2 * Math.PI) / count;

  return Array.from({ length: count }, (_, index) => {
    const angle = index * angleStep;

    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    };
  });
}
