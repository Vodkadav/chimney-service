import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="hover:border-accent/40 group h-full p-6 transition-colors hover:shadow-[0_20px_50px_-30px_rgba(33,26,21,0.4)]">
      <span className="bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white inline-flex size-12 items-center justify-center rounded-2xl transition-colors">
        <Icon className="size-6" aria-hidden />
      </span>
      <h3 className="font-display text-foreground mt-5 text-xl font-bold">{title}</h3>
      <p className="text-muted mt-2 leading-relaxed">{description}</p>
    </Card>
  );
}
