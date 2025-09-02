import type { ButtonProps } from "../model/types.ts";
import type { FC } from "react";
import { cn } from "../../../utils/cn.ts";
import { buttonVariants } from "../model/variants.ts";

export const Button: FC<ButtonProps> = ({ intent, children, className, ...rest }) => {
	return (
		<button className={cn(buttonVariants({ intent }), className)} {...rest}>
			{children}
		</button>
	);
};
