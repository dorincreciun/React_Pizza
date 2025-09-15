import { Checkbox } from "@/shared/ui/Checkbox";
import { Radio } from "@/shared/ui/Radio";

export const ProductList = () => {
	return (
		<div>
			<div className={"flex flex-col gap-4"}>
				<Checkbox label={"Можно собирать"} />
				<Checkbox label={"Новинки"} />
			</div>

			<Radio name={"test"} label={"Test 2"} />
			<Radio name={"test"} label={"Test 3"} />

			<div className={"flex flex-col gap-4"}>
				<Checkbox label={"Сырный соус"} />
				<Checkbox label={"Моцарелла"} />
				<Checkbox label={"Чеснок"} />
				<Checkbox label={"Солённые огурчики"} />
				<Checkbox label={"Красный лук"} />
				<Checkbox label={"Красный лук"} />
				<Checkbox label={"Томаты"} />
			</div>
		</div>
	);
};
