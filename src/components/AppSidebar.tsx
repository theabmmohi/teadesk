import { Sidebar, SidebarHeader, SidebarContent } from "@ui/sidebar"
import { Avatar, AvatarImage, AvatarFallback } from "@ui/avatar"

export function AppsSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <Avatar>
          <AvatarImage src="/icon.png" />
          <AvatarFallback>TD</AvatarFallback>
        </Avatar>
      </SidebarHeader>
      <SidebarContent></SidebarContent>
    </Sidebar>
  )
}
