import type { ElementType, HTMLAttributes } from "react";

import { cn } from "@/lib/cn";
import { maxWidthClasses, type MaxWidthSize } from "@/lib/layout";

type MaxWidthProps<T extends ElementType = "div"> = {
  as?: T;
  size?: MaxWidthSize;
  className?: string;
} & Omit<HTMLAttributes<HTMLElement>, "className">;

/**
 * Constrains content width for readable line lengths and balanced layouts.
 * Compose inside Container when a section needs a narrower content column.
 */
export function MaxWidth<T extends ElementType = "div">({
  as,
  size = "default",
  className,
  children,
  ...props
}: MaxWidthProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={cn("mx-auto w-full", maxWidthClasses[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
