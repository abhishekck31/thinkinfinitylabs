import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import type { JSX } from "react/jsx-runtime"

interface CircuitHeadingProps {
  children: ReactNode
  className?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  withAccent?: boolean
}

export function CircuitHeading({ children, className, level = 2, withAccent = false }: CircuitHeadingProps) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Component className={cn("font-bold text-slate-800", withAccent && "circuit-line", className)}>
      {children}
    </Component>
  )
}
