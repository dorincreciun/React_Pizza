import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	[
		/* Layout */
		"cursor-pointer h-12.5 rounded-2xl px-4",
		"flex items-center justify-center",
		"transition-colors ease-in duration-300",

		/* Ring */
		"outline-0 focus:ring-offset-2 focus:ring-1",

		/* Text */
		"font-semibold",

		/* :disabled */
		"disabled:opacity-50 disabled:pointer-events-none",
	],
	{
		variants: {
			intent: {
				primary: [
					/* Layout */
					"bg-[#FE5F00]",

					/* Text */
					"text-[#FE5F00]",

					/* :hover */
					"hover:bg-[#FE5F00]/70",

					/* :focus */
					"focus:ring-[#FE5F00]/30",
				],
				secondary: [
					/* Layout */
					"bg-[#FFFAF4]",

					/* Text */
					"text-[#FE5F00]",

					/* :hover */
					"hover:bg-[#FFF4E8]",

					/* :focus */
					"focus:ring-[#FE5F00]/30",
				],
				neutral: [
					/* Layout */
					"bg-white border-[#FE5F00]",

					/* Text */
					"text-[#FE5F00]",

					/* :hover */
					"hover:bg-[#FFF4E8]",

					/* :focus */
					"focus:ring-[#FE5F00]/30",
				],
			},
		},
		defaultVariants: {
			intent: "primary",
		},
	}
);
