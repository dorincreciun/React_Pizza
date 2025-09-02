import type { VariantProps } from "class-variance-authority";
import type { inputVariants } from "./variants.ts";
import type { InputHTMLAttributes } from "react";

type InputVariants = NonNullable<VariantProps<typeof inputVariants>["variant"]>;
type InputSizes = NonNullable<VariantProps<typeof inputVariants>["size"]>;

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
	variant: InputVariants;
	size: InputSizes;
}
