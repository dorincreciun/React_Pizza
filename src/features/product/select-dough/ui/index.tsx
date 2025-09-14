import { SegmentedControl } from "@/shared/ui/SegmentedControl";
import type { DoughsProps } from "@/features/product/select-dough/models/types.ts";

export const SelectDough = ({ doughs }: DoughsProps) => {
	return <SegmentedControl className={"max-w-[420px]"} properties={doughs} />;
};

/* React DevTools */
SelectDough.displayName = "Features SelectDough";
