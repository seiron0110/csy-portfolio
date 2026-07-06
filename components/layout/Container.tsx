import type { ElementType, HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "className">;

/**
 * Applies responsive horizontal gutters and centers content within the viewport.
 * Use inside Section to constrain side padding across breakpoints.
 */
export function Container<T extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn(
        "mx-auto w-full px-gutter sm:px-gutter-sm lg:px-gutter-lg",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
