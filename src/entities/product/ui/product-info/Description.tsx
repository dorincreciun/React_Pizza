import type { DescriptionProps } from "../../model/types/product-info";

export const Description = ({ children }: DescriptionProps) => {
	return <p className={"text-sm font-normal text-[#373737]"}>{children}</p>;
};
