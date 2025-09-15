import type { RouteObject } from "react-router";
import { ProductsPage } from "../ui";

export const productsRoutes: RouteObject[] = [
	{
		path: "/",
		element: <ProductsPage />,
	},
];
