import type { DescriptionProps } from "@/entities/product/model/types.ts";

export const Description = ({ description }: DescriptionProps) => {
	return (
		<p className={"text-sm font-normal text-[#373737]"}>{description}</p>
	);
};
