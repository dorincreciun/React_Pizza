import type { ProductImageProps } from "../../model/types/product-card";

export const ProductImage = ({ src, alt }: ProductImageProps) => {
	return (
		<div
			className={
				"flex items-center justify-center rounded-2xl bg-[#FFF7EE] p-6"
			}
		>
			<img src={src} alt={alt} width={200} height={200} />
		</div>
	);
};
