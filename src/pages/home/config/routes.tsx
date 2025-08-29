import {HomePage} from "../ui";
import type { RouteObject } from "react-router";

export const HomeRoutes: RouteObject[] = [
    {
        path: "/",
        element: <HomePage />,
    },
];
