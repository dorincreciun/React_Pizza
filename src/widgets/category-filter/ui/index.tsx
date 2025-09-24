import { Title } from "@/shared/ui/Title";
import { Filter } from "@/features/product/filter";

export const CategoryFilter = () => {
	return (
		<div className={"w-[224px] shrink-0"}>
			{/* Title */}
			<Title as={"h2"} size={"sm"} className={"mb-7.5"}>
				Фильтрация
			</Title>

			{/* Filter */}
			<Filter />
		</div>
	);
};
