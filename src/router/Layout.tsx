import { SidebarProvider, SidebarInset, SidebarTrigger } from "@ui/sidebar"
import { Avatar, AvatarImage, AvatarFallback } from "@ui/avatar"
import { AppsSidebar } from "@/components/AppSidebar"
import { Outlet } from "react-router"

export function Layout() {
  return (
    <SidebarProvider>
      <AppsSidebar />
      <SidebarInset>
        <header className="flex items-center border-b sticky top-0 bg-background p-2">
          <SidebarTrigger />
          <h1 className="font-mono">{import.meta.env.VITE_APP_NAME}</h1>
          <div className="flex justify-end flex-1">
            <Avatar>
              <AvatarImage />
              <AvatarFallback>O</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main>
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
