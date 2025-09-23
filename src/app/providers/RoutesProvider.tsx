import { useRoutes } from "react-router";
import { cartRoutes } from "@/pages/cart";
import { notFoundRoutes } from "@/pages/not-found";
import { orderRoutes } from "@/pages/order";
import { catalogRoutes } from "@/pages/catalog";
import { productsIdRoutes } from "@/pages/products[id]/config/routes.tsx";

export const RoutesProvider = () =>
	useRoutes([
		/* Catalog */
		...catalogRoutes,

		...cartRoutes,
		...notFoundRoutes,
		...orderRoutes,
		...productsIdRoutes,
	]);
