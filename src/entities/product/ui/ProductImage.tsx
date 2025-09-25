import type { FC } from "react";
import type { ProductImageProps } from "../model/types/product";
import { cn } from "@/shared/utils/cn.ts";

export const ProductImage: FC<ProductImageProps> = ({
	src,
	alt,
	width,
	height,
}) => {
	return (
		<div
			className={cn([
				"aspect-square overflow-hidden rounded-2xl bg-[#FFF7EE]",
				"flex items-center justify-center",
			])}
		>
			<img
				className={"aspect-square"}
				src={src}
				alt={alt}
				width={width}
				height={height}
			/>
		</div>
	);
};
