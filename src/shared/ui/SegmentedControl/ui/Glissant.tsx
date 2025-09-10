import { cn } from "../../../utils/cn.ts";
import type { GlissantProps } from "../model/types.ts";

export const Glissant = ({ position, segments }: GlissantProps) => {
	return (
		<div
			className={cn(
				"absolute top-[2px] left-[2px]",
				"h-[calc(100%-4px)]",
				"rounded-[30px] bg-white shadow-sm",
				"transition-transform duration-300 ease-in-out will-change-transform"
			)}
			style={{
				width: `calc((100% - 4px) / ${segments})`,
				transform: `translateX(${position * 100}%)`,
			}}
			aria-hidden="true"
		/>
	);
};
