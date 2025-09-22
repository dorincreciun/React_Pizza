import { Checkbox } from "@/shared/ui/Checkbox";
import { FormGroup } from "@/shared/ui/FormGroup";
import { Radio } from "@/shared/ui/Radio";
import { Button } from "@/shared/ui/Button";
import { Title } from "@/shared/ui/Title";

const ingredientsList = [
	{
		label: "Сырный соус",
		value: 0,
	},
	{
		label: "Моцарелла",
		value: 0,
	},
	{
		label: "Чеснок",
		value: 0,
	},
	{
		label: "Солённые огурчики",
		value: 0,
	},
	{
		label: "Красный лук",
		value: 0,
	},
	{
		label: "Томаты",
		value: 0,
	},
];

export const Filter = () => {
	return (
		<div className={"w-[224px] shrink-0"}>
			{/* Title */}
			<Title as={"h2"} size={"sm"} className={"mb-7.5"}>
				Фильтрация
			</Title>

			<div className={"flex flex-col gap-3.5"}>
				<Checkbox label={"Можно собирать"} />
				<Checkbox label={"Новинки"} />
			</div>

			<div
				className={
					"my-6 flex flex-col gap-3.5 border-t border-b border-[#F6F6F6] py-6"
				}
			>
				{/* Title section */}
				<Title as={"h3"} size={"xs"}>
					Цена от и до:
				</Title>
				<div className={"flex items-center justify-between gap-3.5"}>
					<FormGroup>
						<FormGroup.Input
							variant={"secondary"}
							size={"small"}
							placeholder={"$0.00"}
						/>
					</FormGroup>
					<FormGroup>
						<FormGroup.Input
							variant={"secondary"}
							size={"small"}
							placeholder={"$0.00"}
						/>
					</FormGroup>
				</div>
			</div>

			<div className={"flex flex-col gap-3.5"}>
				{/* Title section */}
				<Title as={"h3"} size={"xs"}>
					Ингредиенты:
				</Title>

				{ingredientsList.map((ingredient) => (
					<Checkbox key={ingredient.label} label={ingredient.label} />
				))}
			</div>

			<div
				className={
					"my-6 flex flex-col gap-3.5 border-t border-b border-[#F6F6F6] py-6"
				}
			>
				{/* Title section */}
				<Title as={"h3"} size={"xs"}>
					Тип теста:
				</Title>

				<Radio name={"test"} label={"Test 2"} />
				<Radio name={"test"} label={"Test 3"} />
			</div>

			<Button size={"large"} className={"w-full"}>
				Применить
			</Button>
		</div>
	);
};
