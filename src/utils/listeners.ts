import { supabase } from "@util/supabase"
import { useAuth } from "@util/auth"

supabase.auth.onAuthStateChange((event) => {
  const { setState } = useAuth
  if (event === "SIGNED_OUT") setState({ user: null })
})
