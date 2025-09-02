import type { ButtonHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "./variants.ts";

type ButtonVariants = VariantProps<typeof buttonVariants>["intent"];

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	intent: ButtonVariants;
};
