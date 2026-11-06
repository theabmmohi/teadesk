import { DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Sun, Moon, Monitor, LogOut, User, Lock } from "lucide-react"
import { useAppearance } from "@util/appearance"
import { useLogoutDialog } from "@util/states"
import { useSidebar } from "@ui/sidebar"
import { Link } from "react-router"

export function Menu() {
  const { isMobile } = useSidebar()
  const appearance = useAppearance((s) => s.appearance)
  const setAppearance = useAppearance((s) => s.setAppearance)
  const setLogoutDialogOpen = useLogoutDialog((s) => s.setOpen)

  return (
    <DropdownMenuContent side="top" align="end" className={isMobile ? "" : "w-[calc(16rem-21px)]"}>
      <DropdownMenuGroup>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuRadioGroup defaultValue={appearance} onValueChange={setAppearance}>
          <DropdownMenuRadioItem value="light">
            <Sun />
            Light
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">
            <Moon />
            Dark
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">
            <Monitor />
            System
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <DropdownMenuItem render={<Link to="/profile" />}>
          <User />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem render={<Link to="/security" />}>
          <Lock />
          Security
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem variant="destructive" onClick={() => setLogoutDialogOpen(true)}>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  )
}
