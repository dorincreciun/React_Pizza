import { NavLink } from "react-router";
import { cn } from "@/shared/utils/cn.ts";
import { useCategories } from "../model/useCategories";

export const Categories = () => {
	const categories = useCategories();

	return (
		<nav
			className={cn(
				"bg-surface relative flex rounded-2xl px-2 py-1.5 select-none",
				"focus-within:ring-2 focus-within:ring-gray-400/10",
				"transition-all duration-200 ease-in-out"
			)}
		>
			{categories.map(({ name, slug }) => (
				<NavLink
					key={slug}
					to={`/${slug}`}
					className={({ isActive }) =>
						cn(
							"cursor-pointer rounded-2xl px-6 py-2.5 text-base font-medium",
							"transition-all duration-300 ease-out",
							isActive
								? "text-primary bg-white shadow-[0_14px_20px_rgba(0,0,0,0.05)]"
								: "hover:text-primary text-text-primary"
						)
					}
				>
					{name}
				</NavLink>
			))}
		</nav>
	);
};
