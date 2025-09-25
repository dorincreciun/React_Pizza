import type { FC } from "react";
import type { ProductDescriptionProps } from "../model/types/product";

export const ProductDescription: FC<ProductDescriptionProps> = ({
	description,
}) => {
	return <>{description}</>;
};
