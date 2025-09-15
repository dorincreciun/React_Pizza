import type { ProductFooterComponent } from "../../model/types/product-card";
import { ProductPrice } from "./ProductPrice";
import { ProductAction } from "./ProductAction";

export const ProductFooter: ProductFooterComponent = ({ children }) => {
	return (
		<div className={"flex items-center justify-between"}>{children}</div>
	);
};

ProductFooter.Price = ProductPrice;
ProductFooter.Action = ProductAction;
