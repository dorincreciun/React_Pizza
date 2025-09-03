import type { CompoundComponentElements } from "../model/types.ts";
import { Label } from "./Label.tsx";
import { Input } from "./Input.tsx";
import { Hint } from "./Hint.tsx";

export const FormGroup: CompoundComponentElements = ({ children }) => {
	return <div className={"flex flex-col gap-2"}>{children}</div>;
};

/* CompoundComponents */
FormGroup.Label = Label;
FormGroup.Input = Input;
FormGroup.Hint = Hint;
