import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface CircuitSectionProps {
  children: ReactNode
  className?: string
  variant?: "default" | "grid" | "dots" | "lines"
}

export function CircuitSection({ children, className, variant = "default" }: CircuitSectionProps) {
  return (
    <section
      className={cn(
        "py-16 border-b border-primary/10",
        {
          "circuit-grid-bg": variant === "default",
          "circuit-grid": variant === "grid",
          "circuit-dots": variant === "dots",
          "circuit-lines": variant === "lines",
        },
        className,
      )}
    >
      {children}
    </section>
  )
}
