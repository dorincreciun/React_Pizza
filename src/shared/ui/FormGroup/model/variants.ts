import { cva } from "class-variance-authority";

export const inputVariants = cva(
	[
		// Layout
		"flex w-full",

		// Text & placeholder
		"text-base",
		"placeholder:text-[#C0C0C0]",

		// Focus & ring
		"ring-offset-background",
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F95005] focus-visible:ring-offset-2",

		// Disabled
		"disabled:cursor-not-allowed disabled:opacity-50",
	],
	{
		variants: {
			variant: {
				primary: "bg-[#F9F9F9]",
				secondary: "bg-transparent border border-[#E6E6E6]",
			},
			size: {
				base: "rounded-[10px] py-3 px-4.5",
				large: "h-12.5 rounded-2xl py-3.5 px-5",
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
			size: "large",
		},
	}
);
