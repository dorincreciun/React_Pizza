import type { CompoundComponentElements } from "../model/types.ts";
import { Label } from "./Label.tsx";
import { Input } from "./Input.tsx";
import { Hint } from "./Hint.tsx";
import { cn } from "../../../utils/cn.ts";

export const FormGroup: CompoundComponentElements = ({
	dataStatus,
	className,
	children,
}) => {
	return (
		<div
			{...(dataStatus ? { "data-status": dataStatus } : {})}
			className={cn(["group", "flex w-full flex-col gap-2"], className)}
		>
			{children}
		</div>
	);
};

/* CompoundComponents */
FormGroup.Label = Label;
FormGroup.Input = Input;
FormGroup.Hint = Hint;
