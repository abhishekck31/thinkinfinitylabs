"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { useAudio } from "@/components/audio-provider"

interface MotherboardSwitchProps {
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  className?: string
  label?: string
  size?: "sm" | "md" | "lg"
}

export function MotherboardSwitch({
  defaultChecked = false,
  onChange,
  className,
  label,
  size = "md",
}: MotherboardSwitchProps) {
  const [checked, setChecked] = useState(defaultChecked)
  const { playSwitch } = useAudio()

  const handleToggle = () => {
    playSwitch()
    const newState = !checked
    setChecked(newState)
    if (onChange) onChange(newState)
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={handleToggle}
        className={cn(
          "relative inline-flex shrink-0 cursor-pointer transition-colors duration-200 ease-in-out border-2",
          {
            "bg-primary border-primary/50": checked,
            "bg-slate-700 border-slate-600": !checked,
            "h-4 w-8 rounded-sm": size === "sm",
            "h-6 w-12 rounded-md": size === "md",
            "h-8 w-16 rounded-lg": size === "lg",
          },
        )}
      >
        <span
          className={cn(
            "pointer-events-none inline-block transform rounded-sm bg-white shadow-lg ring-0 transition duration-200 ease-in-out",
            {
              "translate-x-full": checked,
              "translate-x-0": !checked,
              "h-3 w-3": size === "sm",
              "h-5 w-5": size === "md",
              "h-7 w-7": size === "lg",
            },
          )}
          style={{
            position: "absolute",
            top: "50%",
            transform: `translateY(-50%) ${checked ? "translateX(calc(100% - 4px))" : "translateX(1px)"}`,
          }}
        />
      </button>
      {label && <span className="text-sm">{label}</span>}
    </div>
  )
}
