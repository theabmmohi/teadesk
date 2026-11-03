import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter } from "@ui/sidebar"
import { Avatar, AvatarImage, AvatarFallback } from "@ui/avatar"
import { useAuth } from "@util/auth"
import { Link } from "react-router"

export function AppsSidebar() {
  const user = useAuth((s) => s.user)
  const profile = useAuth((s) => s.profile)

  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row items-center select-none border-b p-2.5">
        <Avatar>
          <AvatarImage src="/icon.png" />
          <AvatarFallback>TD</AvatarFallback>
        </Avatar>
        <Link to="/" className="font-mono">
          {import.meta.env.VITE_APP_NAME}
        </Link>
      </SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarFooter className="flex flex-row items-center select-none border-t p-2.5">
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
        <div>
          <p>{profile?.name}</p>
          <p className="text-xs text-muted-foreground">{user?.email}</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
