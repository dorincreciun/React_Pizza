import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { CategoryFilter } from "@/widgets/category-filter";
import { ProductCard } from "@/widgets/product-card";
import { PageLayout } from "@/shared/layouts/PageLayout.tsx";
import { Pagination } from "@/widgets/pagination";
import { PizzaConfiguratorModal } from "@/widgets/pizza-configurator-modal";

export const CatalogPageSlug = () => {
	const [isCustomizable, setCustomizable] = useState<boolean>(false);
	const { slug } = useParams();
	const category = slug ?? "all";

	useEffect(() => {
		console.log(category);
	}, [category]);

	return (
		<PageLayout className="flex gap-10 pb-5">
			<CategoryFilter />
			<div className={"flex flex-1 flex-col justify-between"}>
				<div className={"grid grid-cols-3 items-stretch gap-12.5"}>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>

				{/* Configurator modal */}
				{isCustomizable && (
					<PizzaConfiguratorModal
						onClick={() => setCustomizable(false)}
					/>
				)}

				{/* Pagination */}
				<Pagination />
			</div>
		</PageLayout>
	);
};
