import { PageLayout } from "@/shared/layouts/PageLayout.tsx";
import { ProductList } from "@/widgets/product-list";

export const ProductsPage = () => {
	return (
		<PageLayout className={"container"}>
			<ProductList />
		</PageLayout>
	);
};
