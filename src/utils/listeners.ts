import { useAuth, setUser } from "@util/auth"
import { supabase } from "@util/supabase"

supabase.auth.onAuthStateChange((event, session) => {
  console.log({ event, session })
  const user = session?.user ?? null

  switch (event) {
    case "SIGNED_IN":
      if (user?.id === useAuth.getState().user?.id) useAuth.setState({ user })
      else setTimeout(() => setUser(user).catch(console.error), 0)
      break
    case "USER_UPDATED":
      useAuth.setState({ user })
      break
    case "SIGNED_OUT":
      setUser(null)
      break
    // case "INITIAL_SESSION":
    // case "PASSWORD_RECOVERY":
    // case "TOKEN_REFRESHED":
    // case "MFA_CHALLENGE_VERIFIED":
  }
})
