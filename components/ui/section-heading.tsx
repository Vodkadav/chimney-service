import { Heading } from "./heading";
import { GradientText } from "./gradient-text";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

/** Consistent eyebrow + gradient title + subtitle block used across sections. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-accent mb-3 text-sm font-semibold tracking-[0.18em] uppercase">
          {eyebrow}
        </p>
      )}
      <Heading size="section">
        <GradientText>{title}</GradientText>
      </Heading>
      {subtitle && <p className="text-muted mt-4 text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}
