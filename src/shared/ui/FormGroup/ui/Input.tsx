import type { InputIconProps, InputProps } from "../model/types.ts";
import { cn } from "../../../utils/cn.ts";
import { inputVariants } from "../model/variants.ts";

const InputIcon: InputIconProps = ({ children, position }) => {
	const positionDirection = position === "left" ? "left-3" : "right-3";
	return (
		<div
			className={cn(
				"absolute top-1/2 -translate-y-1/2 text-[#C0C0C0]",
				positionDirection
			)}
		>
			{children}
		</div>
	);
};

export const Input: InputProps = ({
	iconStart,
	iconEnd,
	variant,
	size,
	className,
	...rest
}) => {
	/* Convert to boolean */
	const isStartIcon: boolean = Boolean(iconStart);
	const isEndIcon: boolean = Boolean(iconEnd);

	return (
		<div className={"relative"}>
			{/* Icon Start */}
			{iconStart && <InputIcon position={"left"}>{iconStart}</InputIcon>}

			{/* Input Field */}
			<input
				className={cn(
					inputVariants({ variant, size, isStartIcon, isEndIcon }),
					className
				)}
				{...rest}
			/>

			{/* Icon End */}
			{iconEnd && <InputIcon position={"right"}>{iconEnd}</InputIcon>}
		</div>
	);
};
