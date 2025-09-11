import { cn } from "@/shared/utils/cn.ts";

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
					"[&>li+li]:before:mx-3 [&>li+li]:before:text-[#E0E0E0] [&>li+li]:before:content-['/']"
				)}
			>
				{items.map((item, index) => (
					<li key={index}>
						<a
							href={item.href}
							className={cn(
								"text-sm leading-5 font-normal text-[#373737]",
								"transition-colors duration-200 ease-in-out",
								"hover:text-[#373737]/60"
							)}
						>
							{item.label}
						</a>
					</li>
				))}
			</ol>
		</nav>
	);
};
