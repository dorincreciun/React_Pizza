import { Tabs } from "@/shared/ui/Tabs";
import { Filter } from "@/features/product/filter";
import { ProductCard } from "@/entities/product";
import { Title } from "@/shared/ui/Title";
import { ArrowUpDown } from "lucide-react";
import { cn } from "@/shared/utils/cn.ts";
import { useParams } from "react-router";

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
	const { category } = useParams();
	console.log(category);
	return (
		<div className={"pt-10"}>
			<Tabs defaultValue="descriere">
				<div className={"pb-9"}>
					<Title as={"h1"} size={"xl"} className={"pb-9"}>
						Все пиццы
					</Title>
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

						<button
							className={cn(
								"flex cursor-pointer items-center gap-[10px]",
								"bg-surface relative flex rounded-2xl p-4 select-none",
								"focus-within:ring-2 focus-within:ring-gray-400/10",
								"active:translate-y-0.5",
								"transition-all duration-200 ease-in-out"
							)}
						>
							<ArrowUpDown />
							<div className={"flex items-center gap-2"}>
								<span className={"text-[#202020]"}>
									Сортировка:
								</span>
								<span className={"text-primary"}>рейтингу</span>
							</div>
						</button>
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
