import { SegmentedControl } from "@/shared/ui/SegmentedControl";
import type { SizesProps } from "@/features/product/select-size/models/types.ts";

export const SizeSelector = ({ sizes }: SizesProps) => {
	return <SegmentedControl className={"max-w-[420px]"} properties={sizes} />;
};
