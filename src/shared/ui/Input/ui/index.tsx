import type { FC } from "react";
import type { InputProps } from "../model/type.ts";
import { cn } from "../../../utils/cn.ts";
import { inputVariants } from "../model/variants.ts";

export const Input: FC<InputProps> = ({ variant, size, className, ...rest }) => {
	return <input className={cn(inputVariants({ variant, size }), className)} {...rest} />;
};
