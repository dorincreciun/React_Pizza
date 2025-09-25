import {
	ProductDescription,
	ProductImage,
	ProductPrice,
	ProductTitle,
} from "@/entities/product";

const product = {
	title: "Сырный цыпленок",
	description:
		"Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
	price: "от 395 ₽",
	image: "/pizza.png",
};

export const ProductCard = () => {
	return (
		<div className={"flex flex-col gap-4"}>
			<ProductImage
				src={product.image}
				alt={""}
				width={220}
				height={220}
			/>
			<div className={"flex flex-1 flex-col gap-2"}>
				<ProductTitle title={product.title} />
				<ProductDescription description={product.description} />
			</div>
			<div>
				<ProductPrice price={product.price} />
			</div>
		</div>
	);
};
