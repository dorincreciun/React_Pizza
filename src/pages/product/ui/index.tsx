import { PageLayout } from "@/shared/layouts/PageLayout.tsx";
import { Breadcrumbs } from "@/widgets/breadcrumbs";
import { useParams } from "react-router";
import { ProductDescription } from "@/widgets/product-description/ui";

/* Todo: Product */
/*
Product trebuie sa primeasca ca props urmatoarele:

1. Imaginea
2. Denumirea
3. Descrierea
4. Marimile ce le poate avea produsul
5. Tipul de alut pe care il poate avea produsul
6. Tipurile de ingrediente pe care le poate avea produsul
7. Pretul

*/

const sizes = ["Маленькая", "Средняя", "Большая"];
const dough = ["Традиционное", "Тонкое"];

export const ProductPage = () => {
	const { slug } = useParams<{ slug: string }>();
	console.log(slug);

	return (
		<PageLayout className={"container pt-10"}>
			<Breadcrumbs />

			<div className={"pt-10"}>
				<ProductDescription
					imageSrc={"/pizza.png"}
					imageAlt={"pizza"}
					title={"Pizza Rancho"}
					description={
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit."
					}
					selectorSize={sizes}
					selectorDough={dough}
				/>
			</div>
		</PageLayout>
	);
};
