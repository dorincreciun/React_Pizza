import { SegmentedControl } from "../../../../shared/ui/SegmentedControl";

const dough = ["Традиционное", "Тонкое"];

export const SelectDough = () => {
	return <SegmentedControl className={"max-w-[420px]"} properties={dough} />;
};
