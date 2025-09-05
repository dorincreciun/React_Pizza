import { cva } from "class-variance-authority";

export const buttonVariants = cva(["font-medium"], {
	variants: {
		kind: {
			default: "filled",
			outlined: "border border-default",
			dashed: "border-dashed",
			text: "",
		},
		status: {
			default: "bg-default text-[#030712]",
			primary: "bg-primary text-[#FFFFFF]",
			info: "bg-info text-[#FFFFFF]",
			success: "bg-success text-[#FFFFFF]",
			warning: "bg-warning text-[#FFFFFF]",
			danger: "bg-danger text-[#FFFFFF]",
		},
		size: {
			small: "p-2 text-sm leading-5",
			medium: "py-2 px-3 text-base leading-6",
			large: "py-2 px-4 text-lg leading-7",
		},
		hasIcon: {
			true: "flex items-center justify-center",
			false: "",
		},
		isOnlyIcon: {
			true: "",
			false: "",
		},
	},
	compoundVariants: [
		{
			size: "small",
			hasIcon: true,
			class: "gap-2",
		},
		{
			size: "medium",
			hasIcon: true,
			class: "gap-2.5",
		},
		{
			size: "large",
			hasIcon: true,
			class: "gap-3",
		},
	],
});
