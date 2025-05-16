import { cn } from "@/lib/utils"

interface MotherboardCapacitorProps {
  size?: "sm" | "md" | "lg"
  color?: "blue" | "black" | "silver" | "gold"
  className?: string
}

export function MotherboardCapacitor({ size = "md", color = "blue", className }: MotherboardCapacitorProps) {
  const sizeClasses = {
    sm: "w-4 h-6",
    md: "w-6 h-8",
    lg: "w-8 h-12",
  }

  const colorClasses = {
    blue: "bg-blue-800 border-blue-900",
    black: "bg-slate-900 border-black",
    silver: "bg-gray-400 border-gray-500",
    gold: "bg-yellow-600 border-yellow-700",
  }

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div
        className={cn(
          "relative border rounded-full flex items-center justify-center",
          sizeClasses[size],
          colorClasses[color],
        )}
      >
        {/* Capacitor polarity marking */}
        <div className="absolute top-1 w-2/3 h-1 bg-white/20 rounded-full"></div>

        {/* Pins */}
        <div className="absolute -bottom-2 left-1/4 w-0.5 h-2 bg-gray-400"></div>
        <div className="absolute -bottom-2 right-1/4 w-0.5 h-2 bg-gray-400"></div>
      </div>
    </div>
  )
}
