import type { FC } from "react";
import type { BackdropProps } from "@/shared/types/layouts.ts";
import { cn } from "@/shared/utils/cn.ts";

export const BackdropLayout: FC<BackdropProps> = ({ isOpen }) => {
	return (
		<div
			className={cn(
				"fixed inset-0 z-10 bg-black/60 will-change-[opacity,filter]",
				"transition-opacity duration-500",
				isOpen
					? "[animation:fade-blur-in_.45s_cubic-bezier(0.16,1,0.3,1)_both] opacity-100"
					: "pointer-events-none [animation:fade-blur-out_.3s_cubic-bezier(0.4,0,0.2,1)_both] opacity-0"
			)}
		></div>
	);
};
