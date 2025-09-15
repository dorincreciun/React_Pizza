import { PageLayout } from "@/shared/layouts/PageLayout.tsx";
import { ProductList } from "@/widgets/product-list";
import { Tabs } from "@/shared/ui/Tabs";

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

export const ProductsPage = () => {
	return (
		<PageLayout className={"container"}>
			{/**/}
			<div className={"pt-10"}>
				<Tabs defaultValue="descriere">
					<div className={"pb-9"}>
						<h1 className={"pb-9 text-4xl font-extrabold"}>
							Все пиццы
						</h1>
						<div
							className={
								"flex items-center justify-between gap-10"
							}
						>
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
						<ProductList />
						<div className={"flex-auto bg-gray-50"}>
							<Tabs.Content value="Все">
								Conținutul pentru tab-ul Descriere.
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
		</PageLayout>
	);
};
