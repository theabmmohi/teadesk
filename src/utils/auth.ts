import type { User } from "@supabase/supabase-js"
import type { Tables } from "@type/database"

import { supabase } from "@util/supabase"
import { create } from "zustand"

let cached: { id: string; promise: Promise<Profile | null> } | null = null

async function fetchProfile(id: string) {
  const { data, error } = await supabase.from("profiles").select("*").eq("id", id).maybeSingle()
  if (error) throw error
  return data
}

export type Profile = Tables<"profiles">

export const useAuth = create<{
  user: User | null
  profile: Profile | null
}>(() => ({
  user: null,
  profile: null
}))

export async function setUser(user: User | null) {
  if (!user) {
    cached = null
    useAuth.setState({ user: null, profile: null })
    return
  }
  const entry = cached?.id === user.id ? cached : (cached = { id: user.id, promise: fetchProfile(user.id) })
  entry.promise.catch(() => {
    if (cached === entry) cached = null
  })
  const profile = await entry.promise
  useAuth.setState({ user, profile })
}

export function setProfile(profile: Profile) {
  const id = useAuth.getState().user?.id
  if (!id) return
  if (id) cached = { id, promise: Promise.resolve(profile) }
  useAuth.setState({ profile })
}
