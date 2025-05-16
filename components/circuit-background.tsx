import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface CircuitBackgroundProps {
  children: ReactNode
  className?: string
  animated?: boolean
}

export function CircuitBackground({ children, className, animated = false }: CircuitBackgroundProps) {
  return (
    <div
      className={cn("relative overflow-hidden", animated ? "animated-circuit-board" : "circuit-background", className)}
    >
      {children}
    </div>
  )
}
