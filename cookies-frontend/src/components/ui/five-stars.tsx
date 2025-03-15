import { cn } from "@/utils/utils"
import { Star } from "lucide-react"
import { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLElement> {
  score: number
  className?: string
}

export function FiveStars({ score, className, ...props }: Props) {
  return (
    <div className={cn("flex gap-2", className)} {...props}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          className={cn(
            "stroke-dahlia",
            score > index ? "fill-dahlia" : "",
            className
          )}
          key={index}
          size="24px"
        />
      ))}
    </div>
  )
}
