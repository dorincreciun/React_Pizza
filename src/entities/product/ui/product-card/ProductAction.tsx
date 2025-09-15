import type { FC } from "react";
import type { ProductActionProps } from "../../model/types/product-card";

export const ProductAction: FC<ProductActionProps> = ({ children }) => {
	return <div>{children}</div>;
};
