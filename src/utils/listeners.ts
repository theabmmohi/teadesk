import { supabase } from "@util/supabase"
import { useAuth } from "@util/auth"

supabase.auth.onAuthStateChange((event, session) => {
  const { setState } = useAuth
  switch (event) {
    case "INITIAL_SESSION":
    case "USER_UPDATED":
    case "SIGNED_IN":
      setState({ user: session?.user ?? null })
      break
    case "SIGNED_OUT":
      setState({ user: null })
      break
    // case "PASSWORD_RECOVERY":
    // case "TOKEN_REFRESHED":
    // case "MFA_CHALLENGE_VERIFIED":
  }
})
