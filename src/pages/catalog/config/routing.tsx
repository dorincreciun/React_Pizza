import type { RouteObject } from "react-router";
import { CatalogPage } from "../ui";
import { CatalogPageSlug } from "../ui/index[slug]";

export const catalogRoutes: RouteObject[] = [
	{
		path: "/",
		element: <CatalogPage />,
		children: [
			{ index: true, element: <CatalogPage /> },
			{ path: ":slug", element: <CatalogPageSlug /> },
		],
	},
];
