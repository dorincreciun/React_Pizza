import { cn } from "@/shared/utils/cn.ts";
import type { AddonItemProps } from "@/features/product/select-addons/model/type.ts";

export const AddonItem = ({
	image,
	name,
	price,
	isActive,
	onClick,
}: AddonItemProps) => {
	return (
		/* min-w-[130px] */
		<div
			onClick={onClick}
			className={cn(
				"rounded-2xl border p-3",
				"flex cursor-pointer flex-col items-center gap-2",
				"transition-all duration-300 ease-in-out",
				isActive
					? "border-primary bg-primary/5 shadow-sm"
					: "border-transparent hover:border-neutral-300 hover:bg-neutral-50",
				"focus-visible:ring-primary focus-visible:ring-2 focus-visible:outline-none"
			)}
		>
			<div className="overflow-hidden rounded-xl">
				<img
					src={image}
					alt={name}
					width={110}
					height={110}
					className={cn(
						"rounded-xl object-cover transition-transform duration-300 ease-in-out",
						isActive ? "scale-105" : "group-hover:scale-105"
					)}
				/>
			</div>

			<div className="flex flex-1 flex-col justify-between gap-1 text-center">
				<div className="text-xs font-normal text-gray-700">{name}</div>
				<div className="text-sm font-semibold text-gray-900">
					{price} MDL
				</div>
			</div>
		</div>
	);
};
