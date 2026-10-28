Write commit messages in Conventional Commits format.

Format: <type>(<scope>): <summary>

- Types: feat, fix, docs, refactor, chore, test, build, ci
- Scopes (optional): db, auth, ui, functions, config, deps
- Summary: imperative mood, lowercase, max 72 characters, no trailing period
- Add a body only for non-obvious changes, explaining why, not what
- Never use emojis
- Keep migrations (supabase/migrations) in the db scope

Examples:
- feat(db): add students and batches tables
- fix(auth): use 127.0.0.1:5173 as local site_url
- chore: add dotenvx scripts for supabase config and secrets
