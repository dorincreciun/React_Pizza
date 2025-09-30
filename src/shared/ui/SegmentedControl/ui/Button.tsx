import type { ButtonProps } from "../model/types.ts";
import { cn } from "@/shared/utils/cn.ts";

export const Button = ({
	label,
	active,
	className,
	type = "button",
	...rest
}: ButtonProps) => {
	return (
		<button
			type={type}
			className={cn(
				"relative z-10 flex-1 cursor-pointer rounded-[28px] px-4 py-2 text-sm leading-5 font-medium",
				active
					? "text-text-dark"
					: "text-gray-500 hover:text-gray-600",
				!active && "hover:opacity-90",
				"focus-visible:ring-2 focus-visible:ring-black/10 focus-visible:outline-none",
				"transition-[color,opacity] duration-200 ease-out",
				className
			)}
			data-active={active ? "true" : "false"}
			{...rest}
		>
			{label}
		</button>
	);
};
