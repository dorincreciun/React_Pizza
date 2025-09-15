import { Button } from "@/shared/ui/Button";
import { Grid2x2Plus } from "lucide-react";
import { ProductCard } from "@/entities/product";

export const ProductRecommendation = () => {
	return (
		<div>
			<div
				className={"text-[28px] leading-5 font-bold tracking-[-0.5px]"}
			>
				Рекомендации
			</div>

			<div className={"grid grid-cols-4 items-stretch gap-6 py-8"}>
				{/* Item */}
				<ProductCard>
					<ProductCard.Image src={"/pizza.png"} alt={"pizza"} />
					<ProductCard.Content>
						<ProductCard.Content.Title>
							Сырный цыпленок
						</ProductCard.Content.Title>
						<ProductCard.Content.Description>
							Цыпленок, моцарелла, сыры чеддер и пармезан, сырный
							соус, томаты, соус альфредо, чеснок
						</ProductCard.Content.Description>
					</ProductCard.Content>
					<ProductCard.Footer>
						<ProductCard.Footer.Price>
							от
							<span className={"font-bold"}>395 ₽</span>
						</ProductCard.Footer.Price>
						<ProductCard.Footer.Action>
							<Button color={"secondary"}>
								<Grid2x2Plus />
								Собрать
							</Button>
						</ProductCard.Footer.Action>
					</ProductCard.Footer>
				</ProductCard>
			</div>
		</div>
	);
};

/* React DevTools */
ProductRecommendation.displayName = "ProductRecommendation";
