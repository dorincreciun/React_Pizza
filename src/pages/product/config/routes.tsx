import type { RouteObject } from "react-router";
import { ProductPage } from "../ui";

export const productRoutes: RouteObject[] = [
  {
    path: "/product",
    element: <ProductPage />,
  },
];
