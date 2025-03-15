import { cn } from "@/utils/utils"
import { HTMLAttributes, ReactNode } from "react"

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
}

export function Card({ className, children, ...props }: Props) {
  return (
    <article className={cn("bg-white p-6", className)} {...props}>
      {children}
    </article>
  )
}
