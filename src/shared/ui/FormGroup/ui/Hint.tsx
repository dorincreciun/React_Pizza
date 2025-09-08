import type { HintProps } from "../model/types.ts";

export const Hint: HintProps = ({ children }) => {
	return (
		<div
			className={
				"group-data-[status=error]:text-danger group-data-[status=success]:text-success"
			}
		>
			{children}
		</div>
	);
};
