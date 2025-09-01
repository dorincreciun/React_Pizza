import type { RouteObject } from "react-router";
import { NotFoundPage } from "../ui";

export const notFoundRoutes: RouteObject[] = [
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
