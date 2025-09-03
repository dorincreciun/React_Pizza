import type { ButtonProps } from "../model/types.ts";
import type { FC } from "react";
import { cn } from "../../../utils/cn.ts";
import { buttonVariants } from "../model/variants.ts";

export const Button: FC<ButtonProps> = ({
	variant = "primary",
	size = "default",
	className,
	children,
	...rest
}) => {
	return (
		<button className={cn(buttonVariants({ variant, size }), className)} {...rest}>
			{children}
		</button>
	);
};
