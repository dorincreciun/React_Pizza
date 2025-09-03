import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	[
		// Layout & flex
		"inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer",
		// Box model
		"rounded-2xl",
		// Font & text
		"text-base font-semibold",
		// Background
		"active:translate-y-[1px] transition-colors",
		// Focus
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F95005] focus-visible:ring-offset-2",
		// Disabled
		"disabled:pointer-events-none disabled:opacity-50 disabled:bg-gray-500",
	],
	{
		variants: {
			variant: {
				primary: ["bg-[#FE5F00] text-[#f9f9f8]", "hover:bg-[#FE5F00]/90"],
				secondary: ["bg-[#FFEBE0] text-[#FE5F00]", "hover:bg-[#FFEBE0]/50"],
				outline: [
					"border border-[#FE5F00] bg-transparent text-[#FE5F00]",
					"hover:bg-[#FFEBE0]",
				],
				ghost: ["hover:bg-[#FFEBE0]", "hover:text-[#1C1817]"],
			},
			size: {
				default: "h-12.5 px-4 py-2",
				icon: "h-12.5 w-12.5",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "default",
		},
	}
);
