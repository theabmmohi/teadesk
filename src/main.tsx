import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import App from "@/App"
import "@/main.css"

createRoot(document.getElementById("teadesk")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
