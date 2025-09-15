import type { MediaProps } from "../../model/types/global";

export const ProductMedia = ({ src, alt }: MediaProps) => {
	return (
		<img
			src={src}
			alt={alt}
			className="h-full w-full rounded-2xl object-contain"
		/>
	);
};
