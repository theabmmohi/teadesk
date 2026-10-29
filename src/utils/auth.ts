import type { User } from "@supabase/supabase-js"
import { create } from "zustand"

export const useAuth = create<{ user: User | null }>(() => ({
  user: null
}))
