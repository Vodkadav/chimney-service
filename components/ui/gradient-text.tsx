import * as React from "react";
import { cn } from "@/lib/utils";

/** Text rendered with the accent gradient clipped to the glyphs. */
export function GradientText({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "from-accent to-accent-2 bg-gradient-to-r bg-clip-text text-transparent",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
