import { PageLayout } from "@/shared/layouts/PageLayout.tsx";
import { Breadcrumbs } from "@/widgets/breadcrumbs";
import { ProductList } from "@/widgets/product-list";

export const ProductsPage = () => {
	return (
		<PageLayout className={"container"}>
			<Breadcrumbs />
			<ProductList />
		</PageLayout>
	);
};
