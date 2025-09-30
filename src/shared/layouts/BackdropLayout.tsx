import { cn } from "@/shared/utils/cn.ts";
import { type FC, useEffect } from "react";
import type { BackdropProps } from "@/shared/types/layouts.ts";

export const BackdropLayout: FC<BackdropProps> = ({ isOpen }) => {
	useEffect(() => {
		if (isOpen) {
			window.document.body.style.overflow = "hidden";
		} else {
			window.document.body.style.overflow = "initial";
		}
	}, [isOpen]);

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
