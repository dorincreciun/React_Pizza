import { PageLayout } from "@/shared/layouts/PageLayout.tsx";
import { Breadcrumbs } from "@/widgets/breadcrumbs";
import { Button } from "@/shared/ui/Button";
import { SizeSelector } from "@/features/product/select-size";
import { SelectDough } from "@/features/product/select-dough";
import { type Addon, SelectAddons } from "@/features/product/select-addons";
import { useParams } from "react-router";
import { ProductInfo, ProductMedia } from "@/entities/product";

const addons = [
	{
		image: "/test-pizza-2.png",
		name: "Сливочная моцарелла",
		price: 79,
		isActive: true,
	},
	{
		image: "/test-pizza.png",
		name: "Сливочная моцарелла",
		price: 79,
		isActive: false,
	},
	{
		image: "/test-pizza-3.png",
		name: "Сливочная моцарелла",
		price: 79,
		isActive: false,
	},
	{
		image: "/test-pizza-4.png",
		name: "Сливочная моцарелла",
		price: 79,
		isActive: false,
	},
];

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

export const ProductPage = () => {
	const { slug } = useParams<{ slug: string }>();
	console.log(slug);

	const handleAddonChange = (addon: Addon) => {
		console.log(addon);
	};

	return (
		<PageLayout className={"container pt-10"}>
			<Breadcrumbs />

			<div className={"pt-10"}>
				<div className={"grid grid-cols-11 items-stretch gap-11.5"}>
					<div className="col-span-5 flex flex-auto items-center justify-center rounded-2xl bg-[#FFF7EE]">
						<ProductMedia src={"/pizza.png"} alt={"test pizza"} />
					</div>

					<div className={"col-span-6"}>
						<ProductInfo>
							<ProductInfo.Title title={"Пепперони фреш"} />
							<ProductInfo.Description
								description={
									"25 см, традиционное тесто 25, 380 г"
								}
							/>
						</ProductInfo>

						<div className={"flex flex-col gap-5 py-6"}>
							<SizeSelector />

							<SelectDough />
						</div>

						{/* Ingredients */}
						<SelectAddons
							addons={addons}
							onChange={handleAddonChange}
						/>

						<Button size={"large"}>
							Добавить в корзину за 799₽
						</Button>
					</div>
				</div>
			</div>
		</PageLayout>
	);
};
