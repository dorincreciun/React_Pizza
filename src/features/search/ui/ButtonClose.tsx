import { X } from "lucide-react";
import { type FC, useEffect } from "react";
import type { ButtonCloseProps } from "../model/types.ts";
import { cn } from "@/shared/utils/cn.ts";

export const ButtonClose: FC<ButtonCloseProps> = ({ onClick, isOpened }) => {
	useEffect(() => {
		document.body.style.overflow = isOpened ? "hidden" : "auto";

		const handleKeyPress = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onClick();
			}
		};

		if (isOpened) {
			window.addEventListener("keydown", handleKeyPress);
		}

		return () => {
			window.removeEventListener("keydown", handleKeyPress);
			document.body.style.overflow = "auto";
		};
	}, [isOpened, onClick]);

	return (
		<button
			onClick={onClick}
			className={cn(
				"flex cursor-pointer items-center justify-center",
				"transition-[color,transform] duration-300 ease-in",
				"hover:text-primary",
				isOpened ? "scale-100 opacity-100" : "scale-90 opacity-0"
			)}
		>
			<X />
		</button>
	);
};
