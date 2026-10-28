import { RouterProvider, createBrowserRouter } from "react-router"
import { createRoot } from "react-dom/client"
import { StrictMode } from "react"

import { HydrateFallback } from "@router/HydrateFallback"
import { ErrorBoundary } from "@router/ErrorBoundary"
import { Layout } from "@router/Layout"
import { routes } from "@router/routes"
import "@/main.css"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routes,
    HydrateFallback,
    ErrorBoundary
  }
])

createRoot(document.getElementById("teadesk")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
