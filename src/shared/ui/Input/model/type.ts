import type { InputHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { inputVariants } from "./variants.ts";

type InputVariant = VariantProps<typeof inputVariants>["variant"];
type InputSize = VariantProps<typeof inputVariants>["size"];

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
	variant: InputVariant;
	size: InputSize;
}
