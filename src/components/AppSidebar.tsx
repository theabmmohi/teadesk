import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter } from "@ui/sidebar"
import { DropdownMenu, DropdownMenuTrigger } from "@ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@ui/avatar"
import { ChevronsUpDown } from "lucide-react"
import { Menu } from "@component/Menu"
import { useAuth } from "@util/auth"
import { Button } from "@ui/button"
import { Link } from "react-router"
import { Badge } from "@ui/badge"

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
        <Link to="/" className="font-mono truncate min-w-0 flex-1">
          {import.meta.env.VITE_APP_NAME}
        </Link>
        <Badge variant="outline" className="capitalize shrink-0">
          {profile?.type}
        </Badge>
      </SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarFooter className="flex flex-row items-center gap-2 select-none border-t p-2.5">
        <Avatar className="shrink-0">
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
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">{profile?.name}</p>
          <p className="truncate text-xs text-muted-foreground">{user?.email}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="ghost" size="icon-sm" className="shrink-0">
                <ChevronsUpDown />
              </Button>
            }
          />
          <Menu/>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
