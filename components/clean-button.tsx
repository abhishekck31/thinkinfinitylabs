import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"

export interface CleanButtonProps extends ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost"
}

const CleanButton = forwardRef<HTMLButtonElement, CleanButtonProps>(
  ({ className, children, variant = "primary", ...props }, ref) => {
    return (
      <Button
        className={cn(
          "tech-button whitespace-nowrap",
          {
            "bg-primary text-white hover:bg-primary/90": variant === "primary",
            "bg-slate-800 text-white hover:bg-slate-700": variant === "secondary",
            "bg-transparent border border-slate-700 text-white hover:bg-slate-800/50": variant === "outline",
            "bg-transparent text-white hover:bg-slate-800/50": variant === "ghost",
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
CleanButton.displayName = "CleanButton"

export { CleanButton }
