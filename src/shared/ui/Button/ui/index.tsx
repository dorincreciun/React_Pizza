import { cn } from "../../../utils/cn.ts";
import { buttonVariants } from "../model/variants.ts";
import type { FC } from "react";
import type { ButtonProps } from "../model/types.ts";

export const Button: FC<ButtonProps> = ({
	kind,
	status,
	size,
	loading,
	ref,
	mode,
	icon,
	label,
	className,
	...rest
}) => {
	const hasIcon = mode === "prefix" || mode === "suffix";
	const isOnlyIcon = mode === "icon-only";

	const classes = cn(
		buttonVariants({
			isOnlyIcon,
			hasIcon,
			kind,
			status,
			size,
		}),
		className
	);

	return (
		<button ref={ref} data-loading={loading} className={classes} {...rest}>
			{mode === "prefix" && icon}
			{isOnlyIcon ? icon : label}
			{mode === "suffix" && icon}
		</button>
	);
};
