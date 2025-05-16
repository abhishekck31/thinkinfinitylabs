import { cn } from "@/lib/utils"

interface MotherboardResistorProps {
  orientation?: "horizontal" | "vertical"
  size?: "sm" | "md" | "lg"
  className?: string
  bands?: string[]
}

export function MotherboardResistor({
  orientation = "horizontal",
  size = "md",
  className,
  bands = ["brown", "black", "red", "gold"],
}: MotherboardResistorProps) {
  const sizeClasses = {
    sm: orientation === "horizontal" ? "w-8 h-3" : "w-3 h-8",
    md: orientation === "horizontal" ? "w-12 h-4" : "w-4 h-12",
    lg: orientation === "horizontal" ? "w-16 h-5" : "w-5 h-16",
  }

  const bandColors: Record<string, string> = {
    black: "bg-black",
    brown: "bg-amber-800",
    red: "bg-red-600",
    orange: "bg-orange-500",
    yellow: "bg-yellow-400",
    green: "bg-green-600",
    blue: "bg-blue-600",
    violet: "bg-purple-600",
    grey: "bg-gray-500",
    white: "bg-white",
    gold: "bg-yellow-600",
    silver: "bg-gray-400",
  }

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className={cn(
          "relative bg-beige-100 rounded-md flex",
          sizeClasses[size],
          orientation === "horizontal" ? "flex-row items-center" : "flex-col justify-center",
        )}
        style={{ backgroundColor: "#E8D3A9" }}
      >
        {/* Resistor bands */}
        {bands.map((band, index) => (
          <div
            key={index}
            className={cn(
              bandColors[band] || "bg-black",
              orientation === "horizontal" ? "h-full w-1.5" : "w-full h-1.5",
            )}
            style={{
              position: "absolute",
              ...(orientation === "horizontal"
                ? {
                    left: `${15 + index * 20}%`,
                  }
                : {
                    top: `${15 + index * 20}%`,
                  }),
            }}
          ></div>
        ))}

        {/* Pins */}
        {orientation === "horizontal" ? (
          <>
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-2 h-0.5 bg-gray-400"></div>
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-2 h-0.5 bg-gray-400"></div>
          </>
        ) : (
          <>
            <div className="absolute top-[-8px] left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-gray-400"></div>
            <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-gray-400"></div>
          </>
        )}
      </div>
    </div>
  )
}
