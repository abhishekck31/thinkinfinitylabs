import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Card, type CardProps } from "@/components/ui/card"

export interface CleanCardProps extends CardProps {
  variant?: "default" | "bordered" | "elevated"
}

const CleanCard = forwardRef<HTMLDivElement, CleanCardProps>(
  ({ className, children, variant = "default", ...props }, ref) => {
    return (
      <Card
        className={cn(
          "tech-card",
          {
            "border border-slate-800 bg-slate-900": variant === "default",
            "border-2 border-primary/20 bg-slate-900": variant === "bordered",
            "border border-slate-800 bg-slate-900 shadow-xl": variant === "elevated",
          },
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Card>
    )
  },
)
CleanCard.displayName = "CleanCard"

export { CleanCard }
