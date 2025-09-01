import type { RouteObject } from "react-router";
import { CartPage } from "../ui";

export const cartRoutes: RouteObject[] = [
  {
    path: "/cart",
    element: <CartPage />,
  },
];
