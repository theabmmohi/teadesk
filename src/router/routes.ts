import type { RouteObject } from "react-router"

export const routes: RouteObject[] = [{
    path: "/",lazy: () => import("@page/index")
}]
