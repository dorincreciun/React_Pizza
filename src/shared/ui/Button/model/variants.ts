import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	[
		// Layout & base
		"inline-flex items-center justify-center select-none align-middle",
		"font-medium cursor-pointer",
		// Motion
		"transition-all duration-200 ease-in-out active:translate-y-0.5",
		// Focus ring (a11y)
		"outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2",
		// Disabled (va fi activat via varianta `disabled`)
		"disabled:opacity-50 disabled:cursor-not-allowed disabled:active:translate-y-0",
		// Loading (opțional prin varianta `loading`)
		"data-[loading=true]:pointer-events-none data-[loading=true]:opacity-70",
		// Rounded generice (completate de size)
	],
	{
		variants: {
			kind: {
				solid: "",
				outlined: "border",
			},
			status: {
				primary: "bg-primary text-white hover:bg-primary/90",
				secondary: "bg-secondary text-primary hover:bg-primary/20",
			},
			size: {
				small: "h-9 text-sm leading-5 rounded-lg",
				medium: "h-10 text-base leading-6 rounded-xl",
				large: "h-11 text-lg leading-7 rounded-2xl",
			},
			hasIcon: {
				true: "flex",
				false: "",
			},
			isOnlyIcon: {
				true: "px-0 aspect-square",
				false: "",
			},
		},

		compoundVariants: [
			{ size: "small", hasIcon: true, isOnlyIcon: false, class: "gap-2" },
			{
				size: "medium",
				hasIcon: true,
				isOnlyIcon: false,
				class: "gap-2.5",
			},
			{ size: "large", hasIcon: true, isOnlyIcon: false, class: "gap-3" },

			{ size: "small", isOnlyIcon: false, class: "px-3" },
			{ size: "medium", isOnlyIcon: false, class: "px-3.5" },
			{ size: "large", isOnlyIcon: false, class: "px-4" },

			{
				kind: "outlined",
				status: "primary",
				class: "bg-secondary border-primary text-primary hover:bg-primary/10",
			},
			{
				kind: "outlined",
				status: "secondary",
				class: "bg-white border-neutral text-muted hover:bg-neutral",
			},
		],

		defaultVariants: {
			kind: "solid",
			status: "primary",
			size: "medium",
			hasIcon: false,
			isOnlyIcon: false,
		},
	}
);
