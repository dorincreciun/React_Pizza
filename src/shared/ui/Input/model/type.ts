import type { InputHTMLAttributes, ReactNode } from "react";

export type IconProps = {
	children?: ReactNode;
};

export type MessageProps = {
	children?: ReactNode;
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	iconStart?: ReactNode;
	iconEnd?: ReactNode;
	message?: ReactNode;
}
