import type { CompoundComponentElements } from "../model/types.ts";
import { Label } from "./Label.tsx";
import { Input } from "./Input.tsx";
import { Hint } from "./Hint.tsx";
import { cn } from "../../../utils/cn.ts";

export const FormGroup: CompoundComponentElements = ({ dataError, dataSuccess, children }) => {
	return (
		<div
			data-error={dataError}
			data-success={dataSuccess}
			className={cn([
				/* Group */
				"group",

				/* Default */
				"flex w-full flex-col gap-2",
			])}
		>
			{children}
		</div>
	);
};

/* CompoundComponents */
FormGroup.Label = Label;
FormGroup.Input = Input;
FormGroup.Hint = Hint;
