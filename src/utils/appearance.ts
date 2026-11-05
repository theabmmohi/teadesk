import { create } from "zustand"
import { toast } from "sonner"

const mql = window.matchMedia("(prefers-color-scheme: dark)")

export type Appearance = "dark" | "light" | "system"
export type Resolved = "dark" | "light"

function read(): Appearance {
  const stored = localStorage.getItem("appearance")
  return stored === "dark" || stored === "light" || stored === "system" ? stored : "system"
}

function resolve(appearance: Appearance): Resolved {
  if (appearance === "system") return mql.matches ? "dark" : "light"
  return appearance
}

function apply(resolved: Resolved) {
  const isDark = resolved === "dark"
  document.documentElement.classList.toggle("dark", isDark)
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", isDark ? "#09090b" : "#ffffff")
}

export const useAppearance = create<{
  appearance: Appearance
  resolved: Resolved
  setAppearance: (value: Appearance) => void
}>((set, get) => ({
  appearance: read(),
  resolved: resolve(read()),
  setAppearance: (value) => {
    if (get().appearance === value) return
    const resolved = resolve(value)
    localStorage.setItem("appearance", value)
    set({ appearance: value, resolved })
    apply(resolved)
    toast.success(`Appearance switched to ${value}.`)
  }
}))

apply(useAppearance.getState().resolved)

mql.addEventListener("change", () => {
  const resolved = resolve(useAppearance.getState().appearance)
  useAppearance.setState({ resolved })
  apply(resolved)
})
