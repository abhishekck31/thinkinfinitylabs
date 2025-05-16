"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface MotherboardBackgroundProps {
  children: React.ReactNode
  className?: string
  density?: "low" | "medium" | "high" | "ultra"
  animated?: boolean
  color?: "green" | "blue" | "purple" | "cyan"
}

export function MotherboardBackground({
  children,
  className,
  density = "high",
  animated = true,
  color = "green",
}: MotherboardBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const colorValues = {
    green: { r: 0, g: 200, b: 150 },
    blue: { r: 0, g: 150, b: 200 },
    purple: { r: 150, g: 0, b: 200 },
    cyan: { r: 0, g: 200, b: 200 },
  }

  const selectedColor = colorValues[color]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 3 // Make canvas taller to cover scrolling
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Draw circuit board pattern
    const drawCircuitPattern = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Background color
      ctx.fillStyle = "#0a101f"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Background grid
      ctx.strokeStyle = `rgba(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b}, 0.15)`
      ctx.lineWidth = 1

      const gridSize = density === "low" ? 50 : density === "medium" ? 30 : density === "high" ? 20 : 10

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Draw circuit traces
      ctx.strokeStyle = `rgba(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b}, 0.3)`
      ctx.lineWidth = 2

      const traceCount = density === "low" ? 20 : density === "medium" ? 40 : density === "high" ? 80 : 120

      for (let i = 0; i < traceCount; i++) {
        const startX = Math.random() * canvas.width
        const startY = Math.random() * canvas.height

        ctx.beginPath()
        ctx.moveTo(startX, startY)

        // Create a path with multiple segments
        let currentX = startX
        let currentY = startY

        const segments = Math.floor(Math.random() * 5) + 3

        for (let j = 0; j < segments; j++) {
          // Decide whether to go horizontal or vertical
          if (Math.random() > 0.5) {
            currentX += (Math.random() - 0.5) * 300
          } else {
            currentY += (Math.random() - 0.5) * 300
          }

          // Make sure we have 90-degree angles
          if (j % 2 === 0) {
            ctx.lineTo(currentX, startY)
          } else {
            ctx.lineTo(currentX, currentY)
          }
        }

        ctx.stroke()
      }

      // Draw connection points
      ctx.fillStyle = `rgba(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b}, 0.4)`

      const pointCount = density === "low" ? 30 : density === "medium" ? 60 : density === "high" ? 120 : 200

      for (let i = 0; i < pointCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = Math.random() * 3 + 1

        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Draw IC outlines
      ctx.strokeStyle = `rgba(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b}, 0.25)`
      ctx.lineWidth = 1

      const icCount = density === "low" ? 10 : density === "medium" ? 20 : density === "high" ? 30 : 50

      for (let i = 0; i < icCount; i++) {
        const width = Math.random() * 100 + 40
        const height = Math.random() * 60 + 20
        const x = Math.random() * (canvas.width - width)
        const y = Math.random() * (canvas.height - height)

        ctx.beginPath()
        ctx.rect(x, y, width, height)
        ctx.stroke()

        // Add pins
        const pinCount = Math.floor(width / 10)

        for (let j = 0; j < pinCount; j++) {
          const pinX = x + j * (width / pinCount) + width / pinCount / 2

          // Top pins
          ctx.beginPath()
          ctx.moveTo(pinX, y)
          ctx.lineTo(pinX, y - 5)
          ctx.stroke()

          // Bottom pins
          ctx.beginPath()
          ctx.moveTo(pinX, y + height)
          ctx.lineTo(pinX, y + height + 5)
          ctx.stroke()
        }
      }

      // Draw capacitors
      const capacitorCount = density === "low" ? 5 : density === "medium" ? 10 : density === "high" ? 20 : 30

      for (let i = 0; i < capacitorCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const radius = Math.random() * 8 + 4
        const height = radius * 2 + Math.random() * 10

        // Capacitor body
        ctx.fillStyle = `rgba(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b}, 0.2)`
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.strokeStyle = `rgba(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b}, 0.3)`
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.stroke()

        // Capacitor leads
        ctx.beginPath()
        ctx.moveTo(x, y + radius)
        ctx.lineTo(x, y + radius + 5)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(x, y - radius)
        ctx.lineTo(x, y - radius - 5)
        ctx.stroke()
      }

      // Draw resistors
      const resistorCount = density === "low" ? 5 : density === "medium" ? 10 : density === "high" ? 20 : 30

      for (let i = 0; i < resistorCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const width = Math.random() * 20 + 15
        const height = Math.random() * 6 + 4

        // Resistor body
        ctx.fillStyle = "#E8D3A9" // Beige color for resistors
        ctx.beginPath()
        ctx.rect(x - width / 2, y - height / 2, width, height)
        ctx.fill()
        ctx.strokeStyle = `rgba(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b}, 0.3)`
        ctx.beginPath()
        ctx.rect(x - width / 2, y - height / 2, width, height)
        ctx.stroke()

        // Resistor bands
        const bandCount = 4
        const bandWidth = width / (bandCount * 2)
        const bandColors = ["#000", "#964B00", "#FF0000", "#FFD700"] // Black, brown, red, gold

        for (let j = 0; j < bandCount; j++) {
          ctx.fillStyle = bandColors[j]
          ctx.beginPath()
          ctx.rect(
            x - width / 2 + (width * (j + 1)) / (bandCount + 1) - bandWidth / 2,
            y - height / 2,
            bandWidth,
            height,
          )
          ctx.fill()
        }

        // Resistor leads
        ctx.strokeStyle = `rgba(${selectedColor.r}, ${selectedColor.g}, ${selectedColor.b}, 0.3)`
        ctx.beginPath()
        ctx.moveTo(x - width / 2, y)
        ctx.lineTo(x - width / 2 - 10, y)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(x + width / 2, y)
        ctx.lineTo(x + width / 2 + 10, y)
        ctx.stroke()
      }
    }

    drawCircuitPattern()

    // Animate if enabled
    let animationId: number

    if (animated) {
      let lastTime = 0
      const fps = 10 // Lower FPS for better performance

      const animate = (time: number) => {
        if (time - lastTime > 1000 / fps) {
          drawCircuitPattern()
          lastTime = time
        }
        animationId = requestAnimationFrame(animate)
      }

      animationId = requestAnimationFrame(animate)
    }

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animated && animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [density, animated, color, selectedColor.r, selectedColor.g, selectedColor.b])

  return (
    <div className={cn("relative", className)}>
      <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-40" style={{ pointerEvents: "none" }} />
      {children}
    </div>
  )
}
