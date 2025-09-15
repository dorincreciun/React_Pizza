import { Checkbox } from "@/shared/ui/Checkbox";
import { Radio } from "@/shared/ui/Radio";

export const ProductList = () => {
	return (
		<div>
			<Checkbox label={"Test"} />

			<Radio name={"test"} label={"Test 2"} />
			<Radio name={"test"} label={"Test 3"} />
		</div>
	);
};
