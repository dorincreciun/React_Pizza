import type { RouteObject } from "react-router";
import { ProductsIdPage } from "../ui";

export const productsIdRoutes: RouteObject[] = [
	{
		path: "/product/:slug",
		element: <ProductsIdPage />,
	},
];
