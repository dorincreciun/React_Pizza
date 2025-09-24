import { ProductCard } from "@/entities/product";

export const CatalogPageSlug = () => {
	return (
		<div className={"grid grid-cols-3"}>
			<ProductCard>
				<ProductCard.Image src={"/pizza.png"} alt={"pizza"} />
				<ProductCard.Content>
					<ProductCard.Content.Title>
						Pizza Diablo
					</ProductCard.Content.Title>
					<ProductCard.Content.Description>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. A aliquam aut autem dignissimos dolore, ducimus
						eius fuga magnam molestiae non quam quidem ratione
					</ProductCard.Content.Description>
				</ProductCard.Content>
				<ProductCard.Footer>
					<ProductCard.Footer.Price>$100</ProductCard.Footer.Price>
					<ProductCard.Footer.Action>btn</ProductCard.Footer.Action>
				</ProductCard.Footer>
			</ProductCard>
		</div>
	);
};
