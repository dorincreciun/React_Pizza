import { cn } from "@/shared/utils/cn.ts";
import { Link } from "react-router";

export const Breadcrumbs = () => {
	const items = [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Home",
			href: "/",
		},
	];

	return (
		<nav aria-label="Breadcrumb" className="w-full">
			<ol
				className={cn(
					"flex flex-wrap items-center",
					"[&>li+li]:before:mx-3 [&>li+li]:before:text-separator [&>li+li]:before:content-['/']"
				)}
			>
				<li>
					<Link
						to={"/"}
						className={cn(
							"text-sm leading-5 font-normal text-text-dark",
							"transition-colors duration-200 ease-in-out",
							"hover:text-text-dark/60"
						)}
					>
						Products
					</Link>
				</li>
				{items.map((item, index) => (
					<li key={index}>
						<Link
							to={item.href}
							className={cn(
								"text-sm leading-5 font-normal text-text-dark",
								"transition-colors duration-200 ease-in-out",
								"hover:text-text-dark/60"
							)}
						>
							{item.label}
						</Link>
					</li>
				))}
			</ol>
		</nav>
	);
};
