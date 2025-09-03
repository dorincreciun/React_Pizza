import type { InputHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { inputVariants } from "./variants.ts";

type InputVariants = VariantProps<typeof inputVariants>["variant"];
type InputSizes = VariantProps<typeof inputVariants>["size"];

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
	variant: InputVariants;
	size: InputSizes;
}
