import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";
import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "./variants.ts";

type ButtonKind = VariantProps<typeof buttonVariants>["kind"];
type ButtonStatus = VariantProps<typeof buttonVariants>["status"];
type ButtonSize = VariantProps<typeof buttonVariants>["size"];

export type BaseButtonProps = Omit<
	ButtonHTMLAttributes<HTMLButtonElement>,
	"children"
> & {
	kind: ButtonKind;
	status: ButtonStatus;
	size: ButtonSize;
	loading?: boolean;
	ref?: Ref<HTMLButtonElement>;
};

type ButtonNoIcon = BaseButtonProps & {
	mode: "text-only";
	label: string;
	icon?: never;
};

type ButtonPrefixIcon = BaseButtonProps & {
	mode: "prefix";
	icon: ReactNode;
	label: string;
};

type ButtonSuffixIcon = BaseButtonProps & {
	mode: "suffix";
	icon: ReactNode;
	label: string;
};

type ButtonIconOnly = BaseButtonProps & {
	mode: "icon-only";
	icon: ReactNode;
	label?: never;
	"aria-label": string;
};

export type ButtonProps =
	| ButtonNoIcon
	| ButtonPrefixIcon
	| ButtonSuffixIcon
	| ButtonIconOnly;
