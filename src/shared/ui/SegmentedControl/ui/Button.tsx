import type { ButtonProps } from "../model/types.ts";
import { cn } from "../../../utils/cn.ts";

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
					? "text-[#373737]"
					: "text-[#6B7280] hover:text-[#4B5563]",
				"focus-visible:ring-2 focus-visible:ring-black/10 focus-visible:outline-none",
				"transition-colors duration-200 ease-out",
				className
			)}
			{...rest}
		>
			{label}
		</button>
	);
};
