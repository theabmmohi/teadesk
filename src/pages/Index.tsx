import { Dashboard } from "@page/Dashboard"
import { Navigate } from "react-router"
import { useAuth } from "@util/auth"

export function Component() {
  const user = useAuth((s) => s.user)
  const profile = useAuth((s) => s.profile)

  if (user) {
    if (profile) return <Dashboard />
    else return <Navigate to="/setup" />
  }
  
  return <p>Welcome to the {import.meta.env.VITE_APP_NAME}</p>
}
