import { useRouteError } from "react-router"

export function ErrorBoundary() {
  const error = useRouteError()
  return <pre>{JSON.stringify(error, null, 2)}</pre>
}
