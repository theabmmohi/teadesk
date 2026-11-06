import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@ui/alert-dialog"
import { Field, FieldLabel } from "@/components/ui/field"
import { Checkbox } from "@/components/ui/checkbox"
import { useLogoutDialog } from "@util/states"
import { useNavigate } from "react-router"
import { supabase } from "@util/supabase"
import { Spinner } from "@ui/spinner"
import { useState } from "react"
import { toast } from "sonner"

export function LogoutDialog() {
  const navigate = useNavigate()
  const open = useLogoutDialog((s) => s.open)
  const setOpen = useLogoutDialog((s) => s.setOpen)
  const [others, setOthers] = useState(false)
  const [loggingOut, setLoggingOut] = useState(false)

  async function logOut() {
    setLoggingOut(true)
    const { error } = await supabase.auth.signOut({ scope: others ? "global" : "local" })
    if (error) toast.error(error.message)
    else navigate("/", { replace: true })
    setOpen(false)
    setOthers(false)
    setLoggingOut(false)
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogDescription>Are you sure to logout ?</AlertDialogDescription>
          <Field orientation="horizontal" className="mt-2.5">
            <Checkbox id="other-devices" checked={others} onCheckedChange={setOthers} />
            <FieldLabel htmlFor="other-devices">from other devices too</FieldLabel>
          </Field>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Stay here</AlertDialogCancel>
          <AlertDialogAction disabled={loggingOut} onClick={logOut}>
            {loggingOut && <Spinner />}
            Logout
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
