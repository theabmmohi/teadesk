import { SidebarProvider, SidebarInset, SidebarTrigger } from "@ui/sidebar"
import { Avatar, AvatarImage, AvatarFallback } from "@ui/avatar"
import { AppsSidebar } from "@/components/AppSidebar"
import { Outlet } from "react-router"
import { useAuth } from "@util/auth"
import {Button} from "@ui/button"

export function Layout() {
  const { user } = useAuth.getState()
  return (
    <SidebarProvider>
      <AppsSidebar />
      <SidebarInset>
        <header className="flex items-center border-b sticky top-0 bg-background p-2">
          <SidebarTrigger />
          <h1 className="font-mono">{import.meta.env.VITE_APP_NAME}</h1>
          <div className="flex justify-end flex-1">
            {user ? (
              <Avatar>
                <AvatarImage />
                <AvatarFallback>O</AvatarFallback>
              </Avatar>
            ) : (
              <>
                <Button variant="ghost">Register</Button>
                <Button>Login</Button>
              </>
            )}
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
