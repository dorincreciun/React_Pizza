import type { ProductTitleProps } from "../../model/types/product-card";
import type { FC } from "react";

export const ProductTitle: FC<ProductTitleProps> = ({ children }) => {
	return <div className={"text-[22px] font-bold"}>{children}</div>;
};
