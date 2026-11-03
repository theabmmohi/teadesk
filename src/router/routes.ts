import type { RouteObject } from "react-router"

export const routes: RouteObject[] = [
  {
    path: "/",
    lazy: () => import("@page/Index")
  },
  {
    path: "/login",
    lazy: () => import("@page/Login")
  },
  {
    path: "/register",
    lazy: () => import("@page/Register")
  },
  {
    path: "/verify",
    lazy: () => import("@page/Verify")
  },
  {
    path: "/setup",
    lazy: () => import("@page/Setup")
  }
]
