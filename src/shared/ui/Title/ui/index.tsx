import type { TitleProps } from "@/shared/ui/Title/model/types.ts";
import { createElement } from "react";
import { variantsTitle } from "@/shared/ui/Title/model/variants.ts";
import { cn } from "@/shared/utils/cn.ts";

export const Title = ({ as, children, size, className }: TitleProps) => {
	const buildTitleStyle = cn(variantsTitle({ size }), className);

	return createElement(as, { children, className: buildTitleStyle });
};
