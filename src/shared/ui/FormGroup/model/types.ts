import type { FC, InputHTMLAttributes, LabelHTMLAttributes, ReactElement, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { inputVariants } from "./variants.ts";

/* Label */
export type LabelProps = FC<LabelHTMLAttributes<HTMLLabelElement>>;

/* ---------------------------------------------------------------------------------------------- */
/* InputIcon */
export type InputIconProps = FC<{ children: ReactNode; position: "left" | "right" }>;

/* Input */
type InputVariants = VariantProps<typeof inputVariants>["variant"];
type InputSizes = VariantProps<typeof inputVariants>["size"];

type InputCustomProps = {
	iconStart?: ReactNode;
	iconEnd?: ReactNode;
	variant: InputVariants;
	size: InputSizes;
};

export type InputProps = FC<InputCustomProps & Omit<InputHTMLAttributes<HTMLInputElement>, "size">>;

/* ---------------------------------------------------------------------------------------------- */

/* Hint */
export type HintProps = FC<{ children: ReactNode }>;

/* ---------------------------------------------------------------------------------------------- */

/* FormGroup */
export type FormGroupProps = {
	children: [ReactElement<LabelProps>, ReactElement<InputProps>, ReactElement<HintProps>];
};

/* CompoundComponent */
export type CompoundComponentElements = FC<FormGroupProps> & {
	Label: LabelProps;
	Input: InputProps;
	Hint: HintProps;
};
