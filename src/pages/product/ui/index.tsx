import { PageLayout } from "@/shared/layouts/PageLayout.tsx";
import { Breadcrumbs } from "@/widgets/breadcrumbs";
import { Button } from "@/shared/ui/Button";
import { SizeSelector } from "@/features/product/select-size";
import { SelectDough } from "@/features/product/select-dough";
import { type Addon, SelectAddons } from "@/features/product/select-addons";
import { useParams } from "react-router";

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
				{/* Section Product */}

				<div className={"grid grid-cols-11 items-stretch gap-11.5"}>
					<div className="col-span-5 flex flex-auto items-center justify-center rounded-2xl bg-[#FFF7EE]">
						<img
							src="/pizza.png"
							alt="Pizza"
							className="h-full w-full rounded-2xl object-contain"
						/>
					</div>

					<div className={"col-span-6"}>
						{/* Title / Description */}
						<div className={"flex flex-col gap-3.5"}>
							<h1
								className={
									"text-[32px] leading-5 font-extrabold tracking-[-0.5px]"
								}
							>
								Пепперони фреш
							</h1>
							<span
								className={"text-sm font-normal text-[#373737]"}
							>
								25 см, традиционное тесто 25, 380 г
							</span>
						</div>

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
