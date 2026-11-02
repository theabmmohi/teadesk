import { Toaster as Sonner } from "sonner"
import { cn } from "cn"

export const Toaster = () => (
  <Sonner
    swipeDirections={["top", "right", "bottom", "left"]}
    className="select-none"
    toastOptions={{
      closeButton: true,
      classNames: {
        toast: "group",
        closeButton: cn("absolute -left-2 -top-2 size-6 flex items-center justify-center rounded-full text-foreground bg-overlay! opacity-0 transition-opacity border transform-none focus-visible:opacity-100 focus-ring group-hover:opacity-100!")
      }
    }}
  />
)
