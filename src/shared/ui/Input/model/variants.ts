import { cva } from "class-variance-authority";

export const inputVariants = cva([`w-full placeholder:text-[#C0C0C0] border border-[#F9F9F9]`], {
	variants: {
		variant: {
			dark: ["bg-[#F9F9F9]"],
			light: ["bg-white"],
		},
		size: {
			medium: ["px-3.5 py-2.5", "rounded-lg"],
			large: ["px-5 py-3.5", "rounded-2xl"],
		},
	},
});
