import { SegmentedControl } from "../../../../shared/ui/SegmentedControl";

const dough = ["Традиционное", "Тонкое"];

export const SelectDough = () => {
	return <SegmentedControl properties={dough} />;
};
