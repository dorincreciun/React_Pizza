import { SegmentedControl } from "../../../../shared/ui/SegmentedControl";

const sizes = ["Маленькая", "Средняя", "Большая"];

export const SizeSelector = () => {
	return <SegmentedControl className={"max-w-[420px]"} properties={sizes} />;
};
