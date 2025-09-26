import {
	ProductDescription,
	ProductImage,
	ProductPrice,
	ProductTitle,
} from "@/entities/product";
import { cn } from "@/shared/utils/cn.ts";
import { Link } from "react-router";
import { Layers } from "lucide-react";
import { Button } from "@/shared/ui/Button";

const product = {
	title: "Сырный цыпленок",
	description:
		"Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
	price: "от 395 ₽",
	image: "/pizza.png",
};

export const ProductCard = () => {
	return (
		<div className={"group flex flex-col gap-4"}>
			<div className={"relative"}>
				<Link to={""} className={"absolute inset-0 z-1"}></Link>

				{/* Button customize */}
				<Button
					isOnlyIcon
					kind={"solid"}
					color={"secondary"}
					aria-label={"Deschide modalul de customizare"}
					className={"absolute top-5 right-5 z-2 bg-transparent"}
				>
					<Layers />
				</Button>

				<ProductImage
					className={cn(
						"[&>img]:origin-center",
						"[&>img]:transition-all",
						"[&>img]:duration-500",
						"[&>img]:ease-out",
						"[&>img]:group-hover:scale-110",
						"[&>img]:group-hover:rotate-12"
					)}
					alt={""}
					width={220}
					height={220}
					src={product.image}
				/>
			</div>
			<div className={"flex flex-1 flex-col gap-2"}>
				<ProductTitle title={product.title} />
				<ProductDescription description={product.description} />
			</div>
			<div className={"flex items-center justify-between"}>
				<ProductPrice price={product.price} />
			</div>
		</div>
	);
};
