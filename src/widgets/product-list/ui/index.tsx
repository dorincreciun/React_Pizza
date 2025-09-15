import { Checkbox } from "@/shared/ui/Checkbox";
import { Radio } from "@/shared/ui/Radio";
import { Button } from "@/shared/ui/Button";

export const ProductList = () => {
	return (
		<div className={"bg-gray-50"}>
			<div className={"w-[224px]"}>
				<div className={"mb-9 text-[22px] font-bold"}>Фильтрация</div>

				<div className={"flex flex-col gap-4"}>
					<Checkbox label={"Можно собирать"} />
					<Checkbox label={"Новинки"} />
				</div>

				<div
					className={
						"my-6 flex flex-col gap-4 border-t border-b border-[#F6F6F6] py-6"
					}
				>
					<Radio name={"test"} label={"Test 2"} />
					<Radio name={"test"} label={"Test 3"} />
				</div>

				<div className={"flex flex-col gap-4"}>
					<Checkbox label={"Сырный соус"} />
					<Checkbox label={"Моцарелла"} />
					<Checkbox label={"Чеснок"} />
					<Checkbox label={"Солённые огурчики"} />
					<Checkbox label={"Красный лук"} />
					<Checkbox label={"Красный лук"} />
					<Checkbox label={"Томаты"} />
				</div>

				<Button size={"large"} className={"mt-10 w-full"}>
					Применить
				</Button>
			</div>
		</div>
	);
};
