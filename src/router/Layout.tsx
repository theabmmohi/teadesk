import { SidebarProvider, SidebarInset, SidebarTrigger } from "@ui/sidebar"
import { Avatar, AvatarImage, AvatarFallback } from "@ui/avatar"
import { AppsSidebar } from "@/components/AppSidebar"
import { Toaster } from "@component/Toaster"
import { Outlet, Link } from "react-router"
import { buttonVariants } from "@ui/button"
import { useAuth } from "@/utils/auth"

export function Layout() {
  const user = useAuth((s) => s.user)
  const profile = useAuth((s) => s.profile)

  return (
    <SidebarProvider>
      {user && <AppsSidebar />}
      <SidebarInset>
        <header className={`flex items-center border-b sticky top-0 bg-background select-none ${user ? "p-2.5" : "p-2"}`}>
          {user && <SidebarTrigger />}
          <div className="flex justify-end flex-1 gap-2.5">
            {user ? (
              <Avatar>
                <AvatarImage src="" alt="" />
                <AvatarFallback>
                  {profile?.name
                    .trim()
                    .split(/\s+/)
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
            ) : (
              <>
                <Link to="/register" className={buttonVariants({ variant: "outline" })}>
                  Register
                </Link>
                <Link to="/login" className={buttonVariants()}>
                  Login
                </Link>
              </>
            )}
          </div>
        </header>
        <main className="p-5">
          <Outlet />
        </main>
      </SidebarInset>
      <Toaster />
    </SidebarProvider>
  )
}
