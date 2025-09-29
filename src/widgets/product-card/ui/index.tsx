import {
	ProductDescription,
	ProductImage,
	ProductPrice,
	ProductTitle,
} from "@/entities/product";
import { Button } from "@/shared/ui/Button";
import { Grid2x2Plus, Minus, Plus } from "lucide-react";

const product = {
	title: "Сырный цыпленок",
	description:
		"Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
	price: "395",
	image: "/pizza.png",
};

export const ProductCard = () => {
	const isNotinCart = false;
	const isCustomize = false;
	return (
		<div className={"flex flex-col justify-between gap-4"}>
			<div className={"flex flex-col gap-4"}>
				<ProductImage
					src={product.image}
					alt={""}
					width={220}
					height={220}
				/>
				<div className={"flex flex-col gap-2"}>
					<ProductTitle title={product.title} />
					<ProductDescription description={product.description} />
				</div>
			</div>
			<div className={"flex items-center justify-between"}>
				<ProductPrice price={product.price} />

				{/* Add to cart */}
				{!isNotinCart && (
					<Button color={"secondary"}>
						<Plus />
						Добавить
					</Button>
				)}

				{/* Customize */}
				{isCustomize && (
					<Button color={"secondary"}>
						<Grid2x2Plus />
						Собрать
					</Button>
				)}

				{/* Cart counter */}
				{isNotinCart && (
					<div className={"relative flex items-center gap-10"}>
						<Button
							isOnlyIcon
							color={"primary"}
							kind={"outlined"}
							aria-label={"Add Product"}
						>
							<Minus />
						</Button>
						<div
							className={
								"absolute top-1/2 left-1/2 -translate-1/2"
							}
						>
							<span className={"text-base font-bold"}>1</span>
						</div>
						<Button
							isOnlyIcon
							color={"primary"}
							kind={"outlined"}
							aria-label={"Add Product"}
						>
							<Plus />
						</Button>
					</div>
				)}
			</div>
		</div>
	);
};
