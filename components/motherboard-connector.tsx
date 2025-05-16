import { cn } from "@/lib/utils"

interface MotherboardConnectorProps {
  type?: "usb" | "hdmi" | "ethernet" | "power" | "audio" | "generic"
  orientation?: "horizontal" | "vertical"
  className?: string
  label?: string
}

export function MotherboardConnector({
  type = "generic",
  orientation = "horizontal",
  className,
  label,
}: MotherboardConnectorProps) {
  const getConnectorStyles = () => {
    switch (type) {
      case "usb":
        return {
          container: "bg-slate-800 border-slate-700",
          inner: "bg-slate-900",
        }
      case "hdmi":
        return {
          container: "bg-slate-800 border-slate-700",
          inner: "bg-slate-900",
        }
      case "ethernet":
        return {
          container: "bg-slate-700 border-slate-600",
          inner: "bg-slate-800",
        }
      case "power":
        return {
          container: "bg-slate-700 border-slate-600",
          inner: "bg-slate-900",
        }
      case "audio":
        return {
          container: "bg-green-900 border-green-800",
          inner: "bg-green-950",
        }
      default:
        return {
          container: "bg-slate-800 border-slate-700",
          inner: "bg-slate-900",
        }
    }
  }

  const styles = getConnectorStyles()

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div
        className={cn(
          "border rounded-sm shadow-inner flex items-center justify-center",
          styles.container,
          orientation === "horizontal" ? "w-16 h-8" : "w-8 h-16",
        )}
      >
        <div className={cn("rounded-sm", styles.inner, orientation === "horizontal" ? "w-12 h-4" : "w-4 h-12")}></div>
      </div>
      {label && <span className="text-xs mt-1 text-muted-foreground">{label}</span>}
    </div>
  )
}
