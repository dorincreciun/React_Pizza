import { Checkbox } from "@/shared/ui/Checkbox";
import { FormGroup } from "@/shared/ui/FormGroup";
import { Radio } from "@/shared/ui/Radio";
import { Button } from "@/shared/ui/Button";
import { Title } from "@/shared/ui/Title";
import { useFilter } from "@/features/product/filter/model/useFilter.ts";

export const Filter = () => {
	const { flags, ingredients, doughTypes } = useFilter();

	return (
		<>
			{/* Flags */}
			{flags.length > 0 && (
				<div className={"flex flex-col gap-3.5"}>
					{flags.map((flag) => (
						<Checkbox label={flag} />
					))}
				</div>
			)}

			{/* Price */}
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

			{/* Ingredients */}
			{ingredients && (
				<div className={"flex flex-col gap-3.5"}>
					{/* Title section */}
					<Title as={"h3"} size={"xs"}>
						Ингредиенты:
					</Title>

					{ingredients.map((ingredient) => (
						<Checkbox key={ingredient} label={ingredient} />
					))}
				</div>
			)}

			{/* Dough types */}
			{doughTypes && (
				<div
					className={
						"my-6 flex flex-col gap-3.5 border-t border-b border-[#F6F6F6] py-6"
					}
				>
					{/* Title section */}
					<Title as={"h3"} size={"xs"}>
						Тип теста:
					</Title>

					{doughTypes.map((doughType) => (
						<Radio name={doughType} label={doughType} />
					))}
				</div>
			)}

			<Button size={"large"} className={"w-full"}>
				Применить
			</Button>
		</>
	);
};
