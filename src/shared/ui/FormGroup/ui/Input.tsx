import type { InputSlotProps, InputProps } from "../model/types.ts";
import { inputVariants } from "../styles/variants.ts";
import { cn } from "@/shared/utils/cn.ts";

const InputSlot: InputSlotProps = ({ children, position }) => {
	const positionDirection = position === "left" ? "left-3" : "right-3";
	return (
		<div
			className={cn(
				"text-icon-muted absolute top-1/2 -translate-y-1/2",
				positionDirection
			)}
		>
			{children}
		</div>
	);
};

export const Input: InputProps = ({
	prefix,
	suffix,
	variant,
	size,
	className,
	...rest
}) => {
	/* Convert to boolean */
	const isStartIcon: boolean = Boolean(prefix);
	const isEndIcon: boolean = Boolean(suffix);

	return (
		<div className={"relative"}>
			{/* Icon Start */}
			{prefix && <InputSlot position={"left"}>{prefix}</InputSlot>}

			{/* Input Field */}
			<input
				className={cn(
					inputVariants({ variant, size, isStartIcon, isEndIcon }),
					className
				)}
				{...rest}
			/>

			{/* Icon End */}
			{suffix && <InputSlot position={"right"}>{suffix}</InputSlot>}
		</div>
	);
};
