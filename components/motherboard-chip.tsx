import { cn } from "@/lib/utils"

interface MotherboardChipProps {
  label?: string
  size?: "sm" | "md" | "lg"
  pins?: number
  className?: string
  variant?: "cpu" | "memory" | "controller" | "generic"
}

export function MotherboardChip({
  label,
  size = "md",
  pins = 8,
  className,
  variant = "generic",
}: MotherboardChipProps) {
  const sizeClasses = {
    sm: "w-16 h-10",
    md: "w-24 h-16",
    lg: "w-32 h-20",
  }

  const variantClasses = {
    cpu: "bg-slate-900 border-slate-700",
    memory: "bg-slate-800 border-slate-700",
    controller: "bg-slate-900 border-slate-700",
    generic: "bg-slate-800 border-slate-700",
  }

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div
        className={cn(
          "relative border-2 rounded-sm flex items-center justify-center",
          sizeClasses[size],
          variantClasses[variant],
        )}
      >
        {/* Chip notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-slate-700 rounded-b-sm"></div>

        {/* Pins on left side */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-around">
          {[...Array(pins / 2)].map((_, i) => (
            <div key={`left-${i}`} className="w-1 h-1 -ml-1 bg-gray-400 rounded-full"></div>
          ))}
        </div>

        {/* Pins on right side */}
        <div className="absolute right-0 top-0 h-full flex flex-col justify-around">
          {[...Array(pins / 2)].map((_, i) => (
            <div key={`right-${i}`} className="w-1 h-1 -mr-1 bg-gray-400 rounded-full"></div>
          ))}
        </div>

        {/* Chip label */}
        <div className="text-xs text-center text-primary/80 font-mono">
          {label || (variant === "cpu" ? "CPU" : variant === "memory" ? "RAM" : "IC")}
        </div>
      </div>
    </div>
  )
}
