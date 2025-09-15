import type { FC } from "react";
import type { ProductDescriptionProps } from "../../model/types/product-card";

export const ProductDescription: FC<ProductDescriptionProps> = ({
	children,
}) => {
	return (
		<p className={"text-[16px] leading-5 font-normal text-[#B1B1B1]"}>
			{children}
		</p>
	);
};
