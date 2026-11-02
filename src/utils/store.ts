import type { User } from "@supabase/supabase-js"

import { create } from "zustand"

export const auth = create<{ user: User | null }>(() => ({
  user: null
}))
