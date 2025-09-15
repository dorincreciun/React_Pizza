import type {
	ProductCardComponent,
	ProductCardProps,
} from "../../model/types/product-card";
import { ProductImage } from "./ProductImage";
import { ProductContent } from "@/entities/product/ui/product-card/ProductContent.tsx";
import { ProductFooter } from "@/entities/product/ui/product-card/ProductFooter.tsx";

export const ProductCard: ProductCardComponent = ({
	children,
}: ProductCardProps) => {
	return <div className={"flex flex-col gap-4"}>{children}</div>;
};

ProductCard.Image = ProductImage;
ProductCard.Content = ProductContent;
ProductCard.Footer = ProductFooter;
