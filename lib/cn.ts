type ClassValue = string | false | null | undefined;

/**
 * Merges class names, filtering out falsy values.
 * Lightweight alternative to clsx + tailwind-merge for layout composition.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
