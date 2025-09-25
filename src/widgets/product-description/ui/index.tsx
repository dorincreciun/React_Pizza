import { type Addon } from "@/features/product/select-addons";
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

const selectorSize = ["Маленькая", "Средняя", "Большая"];
const selectorDough = ["Традиционное", "Тонкое"];

const handleAddonChange = (addon: Addon) => {
	console.log(addon);
};

export const ProductDescription = () => {
	const { slug } = useParams<{ slug: string }>();
	console.log(slug);

	return (
		<div className={"grid grid-cols-11 items-stretch gap-11.5"}>
			{/*<div className="col-span-5 flex flex-auto items-center justify-center rounded-2xl bg-[#FFF7EE]">*/}
			{/*	<ProductMedia src={"/pizza.png"} alt={"pizza"} />*/}
			{/*</div>*/}

			{/*<div className={"col-span-6"}>*/}
			{/*	<ProductInfo>*/}
			{/*		<ProductInfo.Title>Test pizza</ProductInfo.Title>*/}
			{/*		<ProductInfo.Description>*/}
			{/*			Lorem ipsum dolor sit amet, consectetur adipiscing elit.*/}
			{/*		</ProductInfo.Description>*/}
			{/*	</ProductInfo>*/}

			{/*	<div className={"flex flex-col gap-5 py-6"}>*/}
			{/*		{selectorSize && <SizeSelector sizes={selectorSize} />}*/}
			{/*		{selectorDough && <SelectDough doughs={selectorDough} />}*/}
			{/*	</div>*/}

			{/*	/!* Ingredients *!/*/}
			{/*	{addons && (*/}
			{/*		<SelectAddons*/}
			{/*			addons={addons}*/}
			{/*			onChange={handleAddonChange}*/}
			{/*		/>*/}
			{/*	)}*/}

			{/*	<Button size={"large"}>Добавить в корзину за 799₽</Button>*/}
			{/*</div>*/}
		</div>
	);
};

/* React DevTools */
ProductDescription.displayName = "ProductDescription";
