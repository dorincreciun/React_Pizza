import { PageLayout } from "@/shared/layouts/PageLayout";
import { Breadcrumbs } from "@/widgets/breadcrumbs";
import { ProductDescription } from "@/widgets/product-description";
import { ProductRecommendation } from "@/widgets/product-recommendation";

export const ProductsIdPage = () => {
	return (
		<PageLayout className={"container pt-10"}>
			<Breadcrumbs />

			<div className={"pt-10"}>
				<ProductDescription />
			</div>

			<div className={"pt-21"}>
				<ProductRecommendation />
			</div>
		</PageLayout>
	);
};

/* React DevTools */
ProductsIdPage.displayName = "ProductPage";
