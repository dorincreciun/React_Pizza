import {X} from "lucide-react";
import type {FC} from "react";
import type {ButtonCloseProps} from "../model/types.ts";
import {cn} from "../../../shared/utils/cn.ts";

export const ButtonClose: FC<ButtonCloseProps> = ({onClick, isOpened}) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                'flex items-center justify-center cursor-pointer',
                'transition-transform duration-300 ease-in',
                isOpened ? "scale-100 opacity-100" : "scale-90 opacity-0"
            )}
        >
            <X />
        </button>
    )
}
