/* SegmentedControl */
export type SegmentedControlProps = {
	properties: string[];
	defaultIndex?: number;
	onChange?: (value: string, index: number) => void;
	className?: string;
};

/* Button */
import type { ButtonHTMLAttributes } from "react";

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = NativeButtonProps & {
	label: string;
	active?: boolean;
};

/* Glissant */
export type GlissantProps = {
	position: number;
	segments: number;
};
