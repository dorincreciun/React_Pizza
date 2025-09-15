import { cn } from "@/shared/utils/cn.ts";
import type { CheckboxProps } from "../model/types";
import type { FC } from "react";

export const Checkbox: FC<CheckboxProps> = ({
	id,
	label,
	className,
	...props
}) => {
	return (
		<label
			htmlFor={id}
			className={cn(
				"group inline-flex cursor-pointer items-center gap-2 select-none",
				"animate-[fade-blur-in_0.5s_ease]",
				className
			)}
		>
			<input
				id={id}
				type="checkbox"
				className="peer sr-only"
				{...props}
			/>

			<span
				className={cn(
					"relative inline-flex h-5 w-5 items-center justify-center rounded-md",
					"border border-[color:var(--color-neutral)] bg-[color:var(--color-surface)]",
					"transition-[background-color,border-color,transform] duration-200 ease-out",
					"group-hover:border-[color:var(--color-muted)] active:scale-95",
					"peer-checked:border-[color:var(--color-primary)] peer-checked:bg-[color:var(--color-primary)]",
					"peer-checked:[&>svg]:scale-100 peer-checked:[&>svg]:opacity-100",
					"peer-focus-visible:ring-2 peer-focus-visible:ring-[color:var(--color-primary)] peer-focus-visible:ring-offset-2 peer-focus-visible:outline-none"
				)}
			>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="white"
					strokeWidth={3}
					strokeLinecap="round"
					strokeLinejoin="round"
					className={cn(
						"pointer-events-none h-3.5 w-3.5",
						"scale-75 opacity-0",
						"transition-[opacity,transform] duration-200 ease-out"
					)}
				>
					<polyline points="20 6 9 17 4 12" />
				</svg>
			</span>

			<span className="text-sm leading-5 text-[color:var(--color-muted)]">
				{label}
			</span>
		</label>
	);
};
