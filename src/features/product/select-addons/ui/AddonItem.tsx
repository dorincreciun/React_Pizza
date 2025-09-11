import { cn } from "../../../../shared/utils/cn.ts";
import type { AddonItemProps } from "../model/type.ts";

export const AddonItem = ({
	isActive,
	onClick,
	name,
	price,
	image,
}: AddonItemProps) => {
	return (
		<div
			onClick={onClick}
			className={cn(
				// Layout
				"group user-select-none flex flex-auto cursor-pointer flex-col items-center gap-4",

				// Box model
				"min-w-[130px] p-2.5",

				// Borders & radius
				"rounded-2xl border",
				isActive ? "border-primary" : "border-transparent",

				// Interaction state
				"active:opacity-70",

				"transition-colors]duration-300 ease-in-out"
			)}
		>
			<div className="shrink-0 overflow-hidden pt-2">
				<img
					src={image}
					alt={name}
					className={cn(
						"h-27.5 w-27.5 rounded-2xl object-cover",
						"transition-transform duration-500 ease-in-out",
						"group-hover:scale-110"
					)}
				/>
			</div>

			<div className="flex h-full flex-col items-center justify-between gap-1">
				<div className="max-w-[100px] text-center text-xs font-normal text-gray-700">
					{name}
				</div>
				<div className="text-center text-sm font-semibold text-gray-900">
					{price}
				</div>
			</div>
		</div>
	);
};
