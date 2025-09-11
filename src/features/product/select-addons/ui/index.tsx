import { AddonItem } from "./AddonItem.tsx";

export const SelectAddons = () => {
	let isActive = true;

	return (
		<div className={"grid grid-cols-3 gap-3.5"}>
			<AddonItem
				image={"/test-pizza-2.png"}
				name={"Сливочная моцарелла"}
				price={79}
				isActive={isActive}
			/>
			<AddonItem
				image={"/test-pizza.png"}
				name={"Сливочная моцарелла"}
				price={79}
				isActive={false}
			/>
			<AddonItem
				image={"/test-pizza-3.png"}
				name={"Сливочная моцарелла"}
				price={79}
				isActive={false}
			/>
			<AddonItem
				image={"/test-pizza-4.png"}
				name={"Сливочная моцарелла"}
				price={79}
				isActive={false}
			/>
		</div>
	);
};
