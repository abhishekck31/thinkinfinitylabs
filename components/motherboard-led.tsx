interface MotherboardLedProps {
  color?: "green" | "red" | "blue" | "yellow" | "white"
  blinking?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

export function MotherboardLed({ color = "green", blinking = true, size = "md", className }: MotherboardLedProps) {
  const colorClasses = {
    green: "bg-green-500 shadow-[0_0_10px_rgba(0,255,0,0.7)]",
    red: "bg-red-500 shadow-[0_0_10px_rgba(255,0,0,0.7)]",
    blue: "bg-blue-500 shadow-[0_0_10px_rgba(0,0,255,0.7)]",
    yellow: "bg-yellow-500 shadow-[0_0_10px_rgba(255,255,0,0.7)]",
    white: "bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]",
  }

  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  }

  return (
    <div
      className={`rounded-full ${colorClasses[color]} ${sizeClasses[size]} ${blinking ? "led-blink" : ""} ${className}`}
    ></div>
  )
}
