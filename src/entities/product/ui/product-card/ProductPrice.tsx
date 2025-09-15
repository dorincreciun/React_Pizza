import type { FC } from "react";
import type { ProductPriceProps } from "../../model/types/product-card";

export const ProductPrice: FC<ProductPriceProps> = ({ children }) => {
	return <div className={"text-xl font-normal"}>{children}</div>;
};
