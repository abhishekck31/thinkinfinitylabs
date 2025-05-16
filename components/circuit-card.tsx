import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Card, type CardProps } from "@/components/ui/card"

export interface CircuitCardProps extends CardProps {
  variant?: "default" | "bordered" | "elevated"
}

const CircuitCard = forwardRef<HTMLDivElement, CircuitCardProps>(
  ({ className, children, variant = "default", ...props }, ref) => {
    return (
      <Card
        className={cn(
          "circuit-card bg-white",
          {
            "border border-primary/20": variant === "default",
            "border-2 border-primary/30": variant === "bordered",
            "border border-primary/20 shadow-lg": variant === "elevated",
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
CircuitCard.displayName = "CircuitCard"

export { CircuitCard }
