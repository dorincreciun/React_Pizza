/* ------------------------ ProductInfo ------------------------------------- */
/* Title */
import type { FC, ReactElement } from "react";

export type TitleProps = {
	title: string;
};

/* Description */
export type DescriptionProps = {
	description: string;
};

/* ProductInfo */
export type ProductInfoProps = {
	children: [ReactElement<TitleProps>, ReactElement<DescriptionProps>];
};

/* CompoundComponent */
export type CompoundComponentProps = FC<ProductInfoProps> & {
	Title: FC<TitleProps>;
	Description: FC<DescriptionProps>;
};

/* ------------------------ Index ------------------------------------ */
/* Index */
export type MediaProps = {
	src: string;
	alt: string;
};
