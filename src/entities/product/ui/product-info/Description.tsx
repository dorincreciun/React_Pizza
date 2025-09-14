import type { DescriptionProps } from "@/entities/product/model/types.ts";

export const Description = ({ children }: DescriptionProps) => {
	return (
		<p className={"text-sm font-normal text-[#373737]"}>{children}</p>
	);
};
