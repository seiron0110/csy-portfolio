/**
 * Layout size presets mapped to Tailwind max-width utilities.
 * Used by MaxWidth and other layout components.
 */
export const maxWidthClasses = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-7xl",
  full: "max-w-full",
} as const;

export type MaxWidthSize = keyof typeof maxWidthClasses;

export const sectionSpacingClasses = {
  sm: "py-section-sm",
  default: "py-section",
  lg: "py-section-lg",
  xl: "py-section-xl",
} as const;

export type SectionSpacing = keyof typeof sectionSpacingClasses;
