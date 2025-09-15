import { Tabs } from "@/shared/ui/Tabs";
import { Filter } from "@/features/product/filter";
import { ProductCard } from "@/entities/product";

const tabLists = [
	{
		label: "Все",
		value: "Все",
	},
	{
		label: "Мясные",
		value: "Мясные",
	},
	{
		label: "Острые",
		value: "Острые",
	},
	{
		label: "Сладкие",
		value: "Сладкие",
	},
	{
		label: "Вегетарианские",
		value: "Вегетарианские",
	},
	{
		label: "С курицей",
		value: "С курицей",
	},
];

export const ProductList = () => {
	return (
		<div className={"pt-10"}>
			<Tabs defaultValue="descriere">
				<div className={"pb-9"}>
					<h1 className={"pb-9 text-4xl font-extrabold"}>
						Все пиццы
					</h1>
					<div className={"flex items-center justify-between gap-10"}>
						<Tabs.List>
							{tabLists.map((item) => (
								<Tabs.Trigger
									key={item.value}
									value={item.value}
								>
									{item.value}
								</Tabs.Trigger>
							))}
						</Tabs.List>
					</div>
				</div>

				<div className="flex gap-10">
					<Filter />
					<div className={"flex-auto"}>
						<Tabs.Content value="Все">
							<div className={"grid grid-cols-3 gap-12.5"}>
								<ProductCard>
									<ProductCard.Image
										src={"/pizza.png"}
										alt={"pizza"}
									/>
									<ProductCard.Content>
										<ProductCard.Content.Title>
											Pizza Diablo
										</ProductCard.Content.Title>
										<ProductCard.Content.Description>
											Lorem ipsum dolor sit amet,
											consectetur adipisicing elit. A
											aliquam aut autem dignissimos
											dolore, ducimus eius fuga magnam
											molestiae non quam quidem ratione
										</ProductCard.Content.Description>
									</ProductCard.Content>
									<ProductCard.Footer>
										<ProductCard.Footer.Price>
											$100
										</ProductCard.Footer.Price>
										<ProductCard.Footer.Action>
											btn
										</ProductCard.Footer.Action>
									</ProductCard.Footer>
								</ProductCard>
								<ProductCard>
									<ProductCard.Image
										src={"/pizza.png"}
										alt={"pizza"}
									/>
									<ProductCard.Content>
										<ProductCard.Content.Title>
											Pizza Diablo
										</ProductCard.Content.Title>
										<ProductCard.Content.Description>
											Lorem ipsum dolor sit amet,
											consectetur adipisicing elit. A
											aliquam aut autem dignissimos
											dolore, ducimus eius fuga magnam
											molestiae non quam quidem ratione
										</ProductCard.Content.Description>
									</ProductCard.Content>
									<ProductCard.Footer>
										<ProductCard.Footer.Price>
											$100
										</ProductCard.Footer.Price>
										<ProductCard.Footer.Action>
											btn
										</ProductCard.Footer.Action>
									</ProductCard.Footer>
								</ProductCard>
								<ProductCard>
									<ProductCard.Image
										src={"/pizza.png"}
										alt={"pizza"}
									/>
									<ProductCard.Content>
										<ProductCard.Content.Title>
											Pizza Diablo
										</ProductCard.Content.Title>
										<ProductCard.Content.Description>
											Lorem ipsum dolor sit amet,
											consectetur adipisicing elit. A
											aliquam aut autem dignissimos
											dolore, ducimus eius fuga magnam
											molestiae non quam quidem ratione
										</ProductCard.Content.Description>
									</ProductCard.Content>
									<ProductCard.Footer>
										<ProductCard.Footer.Price>
											$100
										</ProductCard.Footer.Price>
										<ProductCard.Footer.Action>
											btn
										</ProductCard.Footer.Action>
									</ProductCard.Footer>
								</ProductCard>
								<ProductCard>
									<ProductCard.Image
										src={"/pizza.png"}
										alt={"pizza"}
									/>
									<ProductCard.Content>
										<ProductCard.Content.Title>
											Pizza Diablo
										</ProductCard.Content.Title>
										<ProductCard.Content.Description>
											Lorem ipsum dolor sit amet,
											consectetur adipisicing elit. A
											aliquam aut autem dignissimos
											dolore, ducimus eius fuga magnam
											molestiae non quam quidem ratione
										</ProductCard.Content.Description>
									</ProductCard.Content>
									<ProductCard.Footer>
										<ProductCard.Footer.Price>
											$100
										</ProductCard.Footer.Price>
										<ProductCard.Footer.Action>
											btn
										</ProductCard.Footer.Action>
									</ProductCard.Footer>
								</ProductCard>
								<ProductCard>
									<ProductCard.Image
										src={"/pizza.png"}
										alt={"pizza"}
									/>
									<ProductCard.Content>
										<ProductCard.Content.Title>
											Pizza Diablo
										</ProductCard.Content.Title>
										<ProductCard.Content.Description>
											Lorem ipsum dolor sit amet,
											consectetur adipisicing elit. A
											aliquam aut autem dignissimos
											dolore, ducimus eius fuga magnam
											molestiae non quam quidem ratione
										</ProductCard.Content.Description>
									</ProductCard.Content>
									<ProductCard.Footer>
										<ProductCard.Footer.Price>
											$100
										</ProductCard.Footer.Price>
										<ProductCard.Footer.Action>
											btn
										</ProductCard.Footer.Action>
									</ProductCard.Footer>
								</ProductCard>
								<ProductCard>
									<ProductCard.Image
										src={"/pizza.png"}
										alt={"pizza"}
									/>
									<ProductCard.Content>
										<ProductCard.Content.Title>
											Pizza Diablo
										</ProductCard.Content.Title>
										<ProductCard.Content.Description>
											Lorem ipsum dolor sit amet,
											consectetur adipisicing elit. A
											aliquam aut autem dignissimos
											dolore, ducimus eius fuga magnam
											molestiae non quam quidem ratione
										</ProductCard.Content.Description>
									</ProductCard.Content>
									<ProductCard.Footer>
										<ProductCard.Footer.Price>
											$100
										</ProductCard.Footer.Price>
										<ProductCard.Footer.Action>
											btn
										</ProductCard.Footer.Action>
									</ProductCard.Footer>
								</ProductCard>
							</div>
						</Tabs.Content>
						<Tabs.Content value="Мясные">
							Conținutul pentru tab-ul Ingrediente.
						</Tabs.Content>
						<Tabs.Content value="Острые">
							Conținutul pentru tab-ul Recenzii.
						</Tabs.Content>
					</div>
				</div>
			</Tabs>
		</div>
	);
};
