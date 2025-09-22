import type { VariantProps } from "class-variance-authority";
import type { variantsTitle } from "@/shared/ui/Title/model/variants.ts";

type TitleType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type SizeType = VariantProps<typeof variantsTitle>["size"];

export type TitleProps = {
	as: TitleType;
	size?: SizeType;
	className?: string;
	children: string;
};
