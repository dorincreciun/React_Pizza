import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { CategoryFilter } from "@/widgets/category-filter";
import { ProductCard } from "@/widgets/product-card";
import { PageLayout } from "@/shared/layouts/PageLayout.tsx";
import { Pagination } from "@/widgets/pagination";
import { ProductConfiguratorModal } from "@/widgets/product-configurator-modal";

export const CatalogPageSlug = () => {
	const [showConfigurator, setShowConfigurator] = useState<boolean>(false);
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
				</div>

				{/* Configurator modal */}
				{showConfigurator && (
					<ProductConfiguratorModal
						onClick={() => setShowConfigurator(false)}
					/>
				)}

				{/* Pagination */}
				<Pagination />
			</div>
		</PageLayout>
	);
};
