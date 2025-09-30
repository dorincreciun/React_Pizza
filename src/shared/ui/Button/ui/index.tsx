import type { FC } from "react";
import type { ButtonProps } from "../model/types.ts";
import { cn } from "../../../utils/cn.ts";
import { buttonVariants } from "@/shared/ui/Button/styles/variants.ts";

export const Button: FC<ButtonProps> = ({
	children,
	className,
	size = "medium",
	kind = "solid",
	color = "primary",
	type = "button",
	["aria-label"]: ariaLabel,
	isOnlyIcon,
	loading,
	ref,
	...rest
}: ButtonProps) => {
	/* Build button classes */
	const classes = cn(
		buttonVariants({ size, kind, color, isOnlyIcon }),
		className
	);

	return (
		<button
			ref={ref}
			type={type}
			aria-label={ariaLabel}
			aria-busy={loading}
			data-loading={loading}
			className={classes}
			{...rest}
		>
			{children}
		</button>
	);
};

Button.displayName = "Button";
