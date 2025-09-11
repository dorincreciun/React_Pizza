import { ProductInfo, ProductMedia } from "@/entities/product";
import { SizeSelector } from "@/features/product/select-size";
import { SelectDough } from "@/features/product/select-dough";
import { type Addon, SelectAddons } from "@/features/product/select-addons";
import { Button } from "@/shared/ui/Button";
import type { ProductDescriptionProps } from "@/widgets/product-description/model/types.ts";

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

const handleAddonChange = (addon: Addon) => {
	console.log(addon);
};

export const ProductDescription = ({
	imageSrc,
	imageAlt,
	title,
	description,
	selectorSize,
	selectorDough,
}: ProductDescriptionProps) => {
	return (
		<div className={"grid grid-cols-11 items-stretch gap-11.5"}>
			<div className="col-span-5 flex flex-auto items-center justify-center rounded-2xl bg-[#FFF7EE]">
				<ProductMedia src={imageSrc} alt={imageAlt} />
			</div>

			<div className={"col-span-6"}>
				<ProductInfo>
					<ProductInfo.Title>{title}</ProductInfo.Title>
					<ProductInfo.Description>
						{description}
					</ProductInfo.Description>
				</ProductInfo>

				<div className={"flex flex-col gap-5 py-6"}>
					{selectorSize && <SizeSelector sizes={selectorSize} />}
					{selectorDough && <SelectDough doughs={selectorDough} />}
				</div>

				{/* Ingredients */}
				<SelectAddons addons={addons} onChange={handleAddonChange} />

				<Button size={"large"}>Добавить в корзину за 799₽</Button>
			</div>
		</div>
	);
};
