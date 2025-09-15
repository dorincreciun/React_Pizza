import { useRoutes } from "react-router";
import { cartRoutes } from "@/pages/cart";
import { notFoundRoutes } from "@/pages/not-found";
import { orderRoutes } from "@/pages/order";
import { productsRoutes } from "@/pages/products/config/routing.tsx";
import { productsIdRoutes } from "@/pages/products[id]/config/routes.tsx";

export const RoutesProvider = () =>
	useRoutes([
		...productsRoutes,
		...cartRoutes,
		...notFoundRoutes,
		...orderRoutes,
		...productsIdRoutes,
	]);
