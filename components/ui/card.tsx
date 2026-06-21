import * as React from "react";
import { cn } from "@/lib/utils";

/** Glassmorphic surface used for project tiles and content blocks. */
export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "border-border-subtle bg-surface rounded-2xl border backdrop-blur-md",
        className,
      )}
      {...props}
    />
  );
}
