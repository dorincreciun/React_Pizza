import type { ButtonHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "./variants.ts";

type ButtonVariants = VariantProps<typeof buttonVariants>["variant"];
type ButtonSize = VariantProps<typeof buttonVariants>["size"];

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant: ButtonVariants;
	size?: ButtonSize;
};
