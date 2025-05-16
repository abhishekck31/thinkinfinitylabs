"use client"

import type React from "react"

import { forwardRef, useState } from "react"
import { cn } from "@/lib/utils"

export interface MotherboardButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "switch" | "chip"
  size?: "sm" | "md" | "lg"
  glowing?: boolean
  led?: boolean
  ledColor?: "green" | "red" | "blue" | "yellow"
  showWires?: boolean
}

const MotherboardButton = forwardRef<HTMLButtonElement, MotherboardButtonProps>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "md",
      glowing = false,
      led = false,
      ledColor = "green",
      showWires = true,
      onClick,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref,
  ) => {
    const [isLedActive, setIsLedActive] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsLedActive(true)
      setTimeout(() => setIsLedActive(false), 2000) // Turn off LED after 2 seconds
      if (onClick) onClick(e)
    }

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsHovered(true)
      if (onMouseEnter) onMouseEnter(e)
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
      setIsHovered(false)
      if (onMouseLeave) onMouseLeave(e)
    }

    const ledColorClasses = {
      green: "bg-green-500",
      red: "bg-red-500",
      blue: "bg-blue-500",
      yellow: "bg-yellow-500",
    }

    return (
      <div className="relative inline-block">
        {/* Circuit wires */}
        {showWires && (
          <div className="absolute -left-4 top-1/2 w-4 h-0.5 bg-green-500/50 transform -translate-y-1/2"></div>
        )}

        <button
          className={cn(
            "relative flex items-center justify-center transition-all duration-150 active:translate-y-0.5 font-mono whitespace-nowrap",
            {
              // Primary - looks like a physical button
              "bg-gradient-to-b from-white to-gray-100 text-gray-800 border-2 border-green-500 rounded-md px-4 py-2 shadow-[0_4px_0_rgb(74,222,128)] active:shadow-[0_1px_0_rgb(74,222,128)]":
                variant === "primary",

              // Secondary - looks like a circuit board component
              "bg-green-500/90 text-white border border-green-600/50 rounded-md px-4 py-2 shadow-[0_0_10px_rgba(74,222,128,0.3)] hover:shadow-[0_0_15px_rgba(74,222,128,0.5)]":
                variant === "secondary",

              // Outline - looks like a trace on the board
              "bg-white border border-green-500/50 text-gray-800 rounded-md px-4 py-2 hover:bg-green-50":
                variant === "outline",

              // Switch - looks like a DIP switch
              "bg-gray-100 border border-green-500 text-gray-800 rounded-sm px-6 py-1 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1)] hover:shadow-[inset_0_-1px_2px_rgba(0,0,0,0.05)] data-[state=on]:bg-green-500/80 data-[state=on]:shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]":
                variant === "switch",

              // Chip - looks like an IC chip
              "bg-white border border-green-500 text-gray-800 rounded-sm px-4 py-2 shadow-[0_2px_0_rgb(74,222,128)] active:shadow-[0_1px_0_rgb(74,222,128)] active:translate-y-0.5":
                variant === "chip",

              // Sizes
              "text-xs px-2 py-1 rounded-sm": size === "sm",
              "text-sm px-4 py-2 rounded-md": size === "md",
              "text-base px-6 py-3 rounded-lg": size === "lg",

              // Glowing effect
              "hover:shadow-[0_0_15px_rgba(74,222,128,0.5)]": glowing,
            },
            className,
          )}
          ref={ref}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...props}
        >
          {led && (
            <div
              className={cn(
                "absolute top-1 right-1 w-2 h-2 rounded-full transition-opacity duration-300",
                ledColorClasses[ledColor],
                isLedActive || isHovered ? "opacity-100" : "opacity-20",
              )}
            ></div>
          )}
          <span className="relative z-10">{children}</span>
        </button>

        {/* Circuit wires */}
        {showWires && (
          <div className="absolute -right-4 top-1/2 w-4 h-0.5 bg-green-500/50 transform -translate-y-1/2"></div>
        )}
      </div>
    )
  },
)
MotherboardButton.displayName = "MotherboardButton"

export { MotherboardButton }
