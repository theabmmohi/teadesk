import { RouterProvider, createBrowserRouter } from "react-router"
import { createRoot } from "react-dom/client"
import { StrictMode } from "react"

import { HydrateFallback } from "@router/HydrateFallback"
import { ErrorBoundary } from "@router/ErrorBoundary"
import { supabase } from "@util/supabase"
import { Layout } from "@router/Layout"
import { routes } from "@router/routes"
import { setUser } from "@/utils/auth"
import "@util/listeners"
import "@/main.css"

const router = createBrowserRouter([
  {
    id: "teadesk",
    element: <Layout />,
    children: routes,
    HydrateFallback,
    ErrorBoundary,
    loader: async () => {
      if (import.meta.env.DEV) console.log("Im loader !")
      const { data } = await supabase.auth.getUser()
      await setUser(data.user)
      return null
    }
  }
])

createRoot(document.getElementById("teadesk")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
