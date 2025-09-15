import type { ProductContentComponent } from "../../model/types/product-card";
import { ProductTitle } from "./ProductTitle";
import { ProductDescription } from "./ProductDescription";

export const ProductContent: ProductContentComponent = ({ children }) => {
	return <div className={"flex flex-col gap-2"}>{children}</div>;
};

ProductContent.Title = ProductTitle;
ProductContent.Description = ProductDescription;
