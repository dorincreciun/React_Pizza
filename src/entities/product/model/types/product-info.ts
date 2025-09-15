/* Title */
import type { FC, ReactElement, ReactNode } from "react";

export type TitleProps = {
	children?: ReactNode;
};

/* Description */
export type DescriptionProps = {
	children?: ReactNode;
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
