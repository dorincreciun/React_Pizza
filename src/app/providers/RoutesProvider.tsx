import { useRoutes } from "react-router";
import { homeRoutes } from "../../pages/home";
import { cartRoutes } from "../../pages/cart";
import { notFoundRoutes } from "../../pages/not-found";
import { orderRoutes } from "../../pages/order";
import { productRoutes } from "../../pages/product";

export const RoutesProvider = () =>
  useRoutes([
    ...homeRoutes,
    ...cartRoutes,
    ...notFoundRoutes,
    ...orderRoutes,
    ...productRoutes,
  ]);
