import type { InputIconProps, InputProps } from "../model/types.ts";
import { cn } from "../../../utils/cn.ts";
import { inputVariants } from "../model/variants.ts";

const InputIcon: InputIconProps = ({ children }) => {
	return <div>{children}</div>;
};

export const Input: InputProps = ({ iconStart, iconEnd, variant, size, className, ...rest }) => {
	/* Convert to boolean */
	const isStartIcon: boolean = Boolean(iconStart);
	const isEndIcon: boolean = Boolean(iconEnd);

	return (
		<div className={"relative"}>
			{/* Icon Start */}
			{iconStart && <InputIcon position={"left"}>{iconStart}</InputIcon>}

			{/* Input Field */}
			<input
				className={cn(inputVariants({ variant, size, isStartIcon, isEndIcon }), className)}
				{...rest}
			/>

			{/* Icon End */}
			{iconEnd && <InputIcon position={"right"}>{iconEnd}</InputIcon>}
		</div>
	);
};
