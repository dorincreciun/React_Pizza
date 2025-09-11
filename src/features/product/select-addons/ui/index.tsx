import { AddonItem } from "./AddonItem.tsx";
import { type FC, useState } from "react";
import type { SelectAddonProps } from "../model/type.ts";

export const SelectAddons: FC<SelectAddonProps> = ({ addons, onChange }) => {
	const [activeAddon, setActiveAddon] = useState<number | null>(0);

	const handleSelect = (index: number) => {
		setActiveAddon(index);
		onChange(addons[index]);
	};

	return (
		<div className="pt-6 pb-16">
			<div className="pb-4 text-base font-semibold">Ингредиенты</div>
			<div className="grid grid-cols-4 gap-3.5">
				{addons.map((addon, index) => (
					<AddonItem
						key={index}
						image={addon.image}
						name={addon.name}
						price={addon.price}
						isActive={activeAddon === index}
						onClick={() => handleSelect(index)}
					/>
				))}
			</div>
		</div>
	);
};
