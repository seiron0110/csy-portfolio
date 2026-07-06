import type { ElementType, HTMLAttributes } from "react";

import { cn } from "@/lib/cn";
import {
  sectionSpacingClasses,
  type SectionSpacing,
} from "@/lib/layout";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  spacing?: SectionSpacing;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "className">;

/**
 * Vertical rhythm wrapper for page sections.
 * Provides consistent section padding and optional semantic element override.
 */
export function Section<T extends ElementType = "section">({
  as,
  spacing = "default",
  className,
  children,
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";

  return (
    <Component
      className={cn(sectionSpacingClasses[spacing], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
