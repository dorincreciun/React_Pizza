import { Checkbox } from "@/shared/ui/Checkbox";
import { Radio } from "@/shared/ui/Radio";
import { Button } from "@/shared/ui/Button";
import { FormGroup } from "@/shared/ui/FormGroup";

export const ProductList = () => {
	return (
		<div className={""}>
			<div className={"w-[224px]"}>
				<div className={"mb-7.5 text-[22px] font-bold"}>Фильтрация</div>

				<div className={"flex flex-col gap-3.5"}>
					<Checkbox label={"Можно собирать"} />
					<Checkbox label={"Новинки"} />
				</div>

				<div
					className={
						"my-6 flex flex-col gap-3.5 border-t border-b border-[#F6F6F6] py-6"
					}
				>
					<div className={"text-base font-bold"}>Цена от и до:</div>
					<div
						className={"flex items-center justify-between gap-3.5"}
					>
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
					<div className={"text-base font-bold"}>Ингредиенты:</div>
					<Checkbox label={"Сырный соус"} />
					<Checkbox label={"Моцарелла"} />
					<Checkbox label={"Чеснок"} />
					<Checkbox label={"Солённые огурчики"} />
					<Checkbox label={"Красный лук"} />
					<Checkbox label={"Красный лук"} />
					<Checkbox label={"Томаты"} />
				</div>

				<div
					className={
						"my-6 flex flex-col gap-3.5 border-t border-b border-[#F6F6F6] py-6"
					}
				>
					<div className={"text-base font-bold"}>Тип теста:</div>
					<Radio name={"test"} label={"Test 2"} />
					<Radio name={"test"} label={"Test 3"} />
				</div>

				<Button size={"large"} className={"w-full"}>
					Применить
				</Button>
			</div>
		</div>
	);
};
