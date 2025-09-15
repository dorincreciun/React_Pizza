/* ProductImage */
import type { FC, ReactElement, ReactNode } from "react";
import type { MediaProps } from "./global";

export type ProductImageProps = MediaProps;

/* ProductTitle */
export type ProductTitleProps = {
	children: string;
};

/* ProductDescription */
export type ProductDescriptionProps = {
	children: string;
};

/* ProductPrice */
export type ProductPriceProps = {
	children: ReactNode;
};

/* ProductAction */
export type ProductActionProps = {
	children: ReactNode;
};

/* ProductCard */
export type ProductCardProps = {
	children: [
		ReactElement<ProductImageProps>,
		ReactElement<ProductContentProps>,
		ReactElement<ProductFooterProps>,
	];
};

/* ProductContent */
type ProductContentProps = {
	children: [
		ReactElement<ProductTitleProps>,
		ReactElement<ProductDescriptionProps>,
	];
};

/* ProductFooter */
type ProductFooterProps = {
	children: [
		ReactElement<ProductPriceProps>,
		ReactElement<ProductActionProps>,
	];
};

/* CompoundComponent */
export type ProductContentComponent = FC<ProductContentProps> & {
	Title: FC<ProductTitleProps>;
	Description: FC<ProductDescriptionProps>;
};

export type ProductFooterComponent = FC<ProductFooterProps> & {
	Price: FC<ProductPriceProps>;
	Action: FC<ProductActionProps>;
};

export type ProductCardComponent = FC<ProductCardProps> & {
	Image: FC<ProductImageProps>;
	Content: ProductContentComponent;
	Footer: ProductFooterComponent;
};
