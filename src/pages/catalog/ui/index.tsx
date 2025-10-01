import { PageLayout } from "@/shared/layouts/PageLayout.tsx";
import { Outlet } from "react-router";
import { cn } from "@/shared/utils/cn.ts";
import { ArrowUpDown } from "lucide-react";
import { Title } from "@/shared/ui/Title";
import { Categories } from "@/features/product/categories";

export const CatalogPage = () => {
	return (
		<PageLayout className={"container"}>
			<div className="pt-10">
				<div className={"pb-9"}>
					<Title as={"h1"} size={"xl"} className={"pb-9"}>
						Все пиццы
					</Title>
					<div className={"flex items-center justify-between gap-10"}>
						<Categories />

						{/* Dropdown filter */}
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
								<span className={"text-text-primary"}>
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
