import type { User } from "@supabase/supabase-js"
import type { Tables } from "@type/database"

import { supabase } from "@util/supabase"
import { create } from "zustand"

export type Profile = Tables<"profiles">

export const useAuth = create<{ user: User | null; profile: Profile | null }>(() => ({
  user: null,
  profile: null
}))

export async function setUser(user: User | null) {
  if (!user) {
    useAuth.setState({ user: null, profile: null })
    return
  }
  const { data: profile, error } = await supabase.from("profiles").select("*").eq("id", user.id).maybeSingle()
  if (error) throw error
  useAuth.setState({ user, profile })
}
