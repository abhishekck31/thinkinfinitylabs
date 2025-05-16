import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface CleanSectionProps {
  children: ReactNode
  className?: string
  variant?: "default" | "alt" | "dark"
}

export function CleanSection({ children, className, variant = "default" }: CleanSectionProps) {
  return (
    <section
      className={cn(
        "tech-section",
        {
          "bg-slate-950": variant === "default",
          "bg-slate-900": variant === "alt",
          "bg-black": variant === "dark",
        },
        className,
      )}
    >
      {children}
    </section>
  )
}
