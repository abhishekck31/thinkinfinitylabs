import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"

export interface CircuitButtonProps extends ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost"
}

const CircuitButton = forwardRef<HTMLButtonElement, CircuitButtonProps>(
  ({ className, children, variant = "primary", ...props }, ref) => {
    return (
      <Button
        className={cn(
          "circuit-btn whitespace-nowrap",
          {
            "bg-primary text-white hover:bg-primary/90": variant === "primary",
            "bg-secondary text-secondary-foreground hover:bg-secondary/90": variant === "secondary",
            "bg-white border border-primary/50 text-primary hover:bg-secondary/50": variant === "outline",
            "bg-transparent text-primary hover:bg-secondary/50": variant === "ghost",
          },
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    )
  },
)
CircuitButton.displayName = "CircuitButton"

export { CircuitButton }
