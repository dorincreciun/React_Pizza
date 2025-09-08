import { cva } from "class-variance-authority";

export const inputVariants = cva(
	[
		"w-full block text-base",
		"transition-all duration-200 ease-in-out",
		"outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2",
		"disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-y-0",
		"placeholder:text-muted",
	],
	{
		variants: {
			variant: {
				primary: "bg-surface",
				secondary: "bg-transparent border border-neutral",
			},
			size: {
				small: "py-2 px-3 rounded-lg",
				medium: "py-3 px-3.5 rounded-xl",
				large: "py-3 px-4 rounded-2xl",
			},
			isStartIcon: {
				true: "ps-11",
				false: "",
			},
			isEndIcon: {
				true: "pe-11",
				false: "",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "medium",
		},
	}
);
