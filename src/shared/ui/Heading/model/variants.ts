import { cva } from "class-variance-authority";

export const headingVariants = cva([], {
	variants: {
		as: {
			h1: "text-4xl font-bold",
			h2: "text-3xl font-bold",
			h3: "text-2xl font-bold",
			h4: "text-xl font-bold",
			h5: "text-lg font-bold",
			h6: "text-base font-bold",
		},
	},
});
