import { useParams } from "react-router";
import { useEffect } from "react";
import { CategoryFilter } from "@/widgets/category-filter";
import { ProductCard } from "@/widgets/product-card";

export const CatalogPageSlug = () => {
	const { slug } = useParams();
	const category = slug ?? "all";

	useEffect(() => {
		console.log(category);
	}, [category]);

	return (
		<div className="flex gap-10">
			<CategoryFilter />
			<div className={"grid grid-cols-3"}>
				<div>
					<ProductCard />
				</div>
			</div>
		</div>
	);
};
