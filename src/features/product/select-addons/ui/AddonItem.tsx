import {cn} from "@/shared/utils/cn.ts";
import type {AddonItemProps} from "@/features/product/select-addons/model/type.ts";

export const AddonItem = ({
                              image,
                              name,
                              price,
                              isActive,
                              onClick,
                          }: AddonItemProps) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                "p-3 rounded-2xl border min-w-[130px]",
                "flex flex-col items-center gap-2 cursor-pointer",
                "transition-all duration-300 ease-in-out",
                isActive
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-transparent hover:border-neutral-300 hover:bg-neutral-50",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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

            <div className="flex-1 flex flex-col justify-between gap-1 text-center">
                <div className="font-normal text-xs text-gray-700">{name}</div>
                <div className="font-semibold text-sm text-gray-900">{price} MDL</div>
            </div>
        </div>
    );
};
