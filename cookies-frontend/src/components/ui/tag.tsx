import { fingerPaint } from "@/styles/font";
import { cn } from "@/utils/utils";
import { Arrow } from "./arrow";

interface Props {
  title: string;
  color?: "dahlia" | "charcoal" | "white";
  className?: string;
}

export function Tag({ title, color = "dahlia", className }: Props) {
  return (
    <div className={cn("flex items-center gap-1 text-2xl", className)}>
      <Arrow className="hidden md:block translate-y-4" />
      <span className={cn(fingerPaint.className, `text-${color}`)}>
        {title}
      </span>
    </div>
  );
}
