import type { FC } from "react";
import type { ProductPriceProps } from "../model/types/product";

export const ProductPrice: FC<ProductPriceProps> = ({ price }) => {
	return <div>{price}</div>;
};
