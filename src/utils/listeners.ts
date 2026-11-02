import { supabase } from "@util/supabase"
import { auth } from "@util/store"

supabase.auth.onAuthStateChange((event, session) => {
  console.log({ event, session })
  const { setState } = auth

  switch (event) {
    case "USER_UPDATED":
    case "SIGNED_IN":
      setState({ user: session?.user ?? null })
      break
    case "SIGNED_OUT":
      setState({ user: null })
      break
    // case "INITIAL_SESSION":
    // case "PASSWORD_RECOVERY":
    // case "TOKEN_REFRESHED":
    // case "MFA_CHALLENGE_VERIFIED":
  }
})
