import { cn } from "@/utils/utils"
import { HTMLAttributes, ReactNode } from "react"

interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  className?: string
}

/**
 * Page Wrapper - Auto sets a max-width and margin inline
 * For consistency, do not overwrite
 */
export function PageWrapper({ children, className, ...props }: Props) {
  return (
    <main className={cn("max-w-6xl mx-auto max-sm:px-8", className)} {...props}>
      {children}
    </main>
  )
}

/**
 * Content Wrapper
 * Use for spacing sections
 */
export function ContentWrapper({ children, className, ...props }: Props) {
  return (
    <section className={className} {...props}>
      {children}
    </section>
  )
}
