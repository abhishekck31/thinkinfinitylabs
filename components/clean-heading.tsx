import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import type { JSX } from "react/jsx-runtime"

interface CleanHeadingProps {
  children: ReactNode
  className?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  withAccent?: boolean
}

export function CleanHeading({ children, className, level = 2, withAccent = false }: CleanHeadingProps) {
  const Component = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Component className={cn("tech-heading", withAccent && "border-l-4 border-primary pl-3", className)}>
      {children}
    </Component>
  )
}
