import type { LabelProps } from "../model/types.ts";
import { cn } from "../../../utils/cn.ts";

export const Label: LabelProps = ({ children, className, ...rest }) => {
	return (
		<label className={cn(className)} {...rest}>
			{children}
		</label>
	);
};

Label.displayName = "Label";
