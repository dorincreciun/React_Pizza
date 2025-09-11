import { PageLayout } from "@/shared/layouts/PageLayout";
import { Breadcrumbs } from "@/widgets/breadcrumbs";
import { ProductDescription } from "@/widgets/product-description";

export const ProductPage = () => {
	return (
		<PageLayout className={"container pt-10"}>
			<Breadcrumbs />

			<div className={"pt-10"}>
				<ProductDescription />
			</div>
		</PageLayout>
	);
};
