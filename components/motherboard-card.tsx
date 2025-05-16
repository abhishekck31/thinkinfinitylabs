"use client"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Card, type CardProps } from "@/components/ui/card"
import { useAudio } from "@/components/audio-provider"

export interface MotherboardCardProps extends CardProps {
  variant?: "component" | "chip" | "memory" | "processor" | "connector"
  glowing?: boolean
  interactive?: boolean
  leds?: number
}

const MotherboardCard = forwardRef<HTMLDivElement, MotherboardCardProps>(
  ({ className, children, variant = "component", glowing = false, interactive = true, leds = 0, ...props }, ref) => {
    const { playHover } = useAudio()

    const handleMouseEnter = () => {
      if (interactive) {
        playHover()
      }
    }

    return (
      <Card
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          {
            // Component - looks like a general motherboard component
            "border-primary/20 bg-slate-900/80 shadow-md": variant === "component",

            // Chip - looks like an IC chip
            "border-slate-700 bg-slate-900 shadow-md before:absolute before:top-0 before:left-0 before:w-full before:h-3 before:bg-slate-800 before:border-b before:border-slate-700":
              variant === "chip",

            // Memory - looks like RAM
            "border-slate-700 bg-gradient-to-r from-slate-800 to-slate-900 shadow-md": variant === "memory",

            // Processor - looks like a CPU
            "border-slate-700 bg-slate-900 shadow-md before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[radial-gradient(circle_at_center,_rgba(0,200,150,0.1)_0%,_transparent_70%)]":
              variant === "processor",

            // Connector - looks like a port or connector
            "border-slate-700 bg-slate-800 shadow-md before:absolute before:bottom-0 before:left-0 before:w-full before:h-2 before:bg-slate-700":
              variant === "connector",

            // Interactive hover effects
            "hover:shadow-[0_0_15px_rgba(0,200,150,0.3)] hover:translate-y-[-5px]": interactive,

            // Glowing effect
            "shadow-[0_0_10px_rgba(0,200,150,0.3)]": glowing,
          },
          className,
        )}
        ref={ref}
        onMouseEnter={handleMouseEnter}
        {...props}
      >
        {/* LED indicators */}
        {leds > 0 && (
          <div className="absolute top-2 right-2 flex gap-1">
            {[...Array(leds)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-primary led-blink"
                style={{ animationDelay: `${i * 0.5}s` }}
              ></div>
            ))}
          </div>
        )}

        {/* Circuit traces */}
        <div className="absolute inset-0 circuit-paths opacity-20 pointer-events-none"></div>

        {children}
      </Card>
    )
  },
)
MotherboardCard.displayName = "MotherboardCard"

export { MotherboardCard }
