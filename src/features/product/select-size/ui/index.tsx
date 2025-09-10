import { SegmentedControl } from "../../../../shared/ui/SegmentedControl";

const sizes = ["Маленькая", "Средняя", "Большая"];

export const SizeSelector = () => {
	return <SegmentedControl properties={sizes} />;
};
