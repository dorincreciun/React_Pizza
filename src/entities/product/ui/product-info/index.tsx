import type {
	CompoundComponentProps,
	ProductInfoProps,
} from "@/entities/product/model/types/product-info";
import { Title } from "./Title";
import { Description } from "./Description";

export const ProductInfo: CompoundComponentProps = ({
	children,
}: ProductInfoProps) => {
	return <div className={"flex flex-col gap-3.5"}>{children}</div>;
};

ProductInfo.Title = Title;
ProductInfo.Description = Description;
