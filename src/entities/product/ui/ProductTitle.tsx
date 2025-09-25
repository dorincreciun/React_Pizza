import type { FC } from "react";
import type { ProductTitleProps } from "../model/types/product";

export const ProductTitle: FC<ProductTitleProps> = ({ title }) => {
	return <h3 className={"text-[22px] font-bold text-black"}>{title}</h3>;
};
