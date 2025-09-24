import { PageLayout } from "@/shared/layouts/PageLayout.tsx";
import { NavLink, Outlet } from "react-router";
import { cn } from "@/shared/utils/cn.ts";
import { ArrowUpDown } from "lucide-react";
import { Title } from "@/shared/ui/Title";

const tabLists = [
	{
		label: "Все",
		value: "",
	},
	{
		label: "Мясные",
		value: "meat",
	},
	{
		label: "Острые",
		value: "spicy",
	},
	{
		label: "Сладкие",
		value: "sweet",
	},
	{
		label: "Вегетарианские",
		value: "vegetarian",
	},
	{
		label: "С курицей",
		value: "chicken",
	},
];

export const CatalogPage = () => {
	return (
		<PageLayout className={"container"}>
			<div className="pt-10">
				<div className={"pb-9"}>
					<Title as={"h1"} size={"xl"} className={"pb-9"}>
						Все пиццы
					</Title>
					<div className={"flex items-center justify-between gap-10"}>
						<nav
							className={cn(
								"bg-surface relative flex rounded-2xl px-2 py-1.5 select-none",
								"focus-within:ring-2 focus-within:ring-gray-400/10",
								"transition-all duration-200 ease-in-out"
							)}
						>
							{tabLists.map(({ label, value }) => (
								<NavLink
									to={`/${value}`}
									className={({ isActive }) =>
										cn(
											"cursor-pointer rounded-2xl px-6 py-2.5 text-base font-medium",
											"transition-all duration-300 ease-out",
											isActive
												? "text-primary bg-white shadow-[0_14px_20px_rgba(0,0,0,0.05)]"
												: "hover:text-primary text-[#202020]"
										)
									}
								>
									{label}
								</NavLink>
							))}
						</nav>
						<button
							className={cn(
								"flex cursor-pointer items-center gap-[10px]",
								"bg-surface relative flex rounded-2xl p-4 select-none",
								"focus-within:ring-2 focus-within:ring-gray-400/10",
								"active:translate-y-0.5",
								"transition-all duration-200 ease-in-out"
							)}
						>
							<ArrowUpDown />
							<div className={"flex items-center gap-2"}>
								<span className={"text-[#202020]"}>
									Сортировка:
								</span>
								<span className={"text-primary"}>рейтингу</span>
							</div>
						</button>
					</div>
				</div>
				<Outlet />
			</div>
		</PageLayout>
	);
};
