import type { RouteObject } from "react-router";
import { HomePage } from "../ui";

export const homeRoutes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
];
