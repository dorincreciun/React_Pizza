import { useContext } from "react";
import { ContextDropdown } from "../model/ContextDropdown.ts";
import type { DropdownBodyType } from "../model/types.ts";

export const DropdownBody: DropdownBodyType = ({ children }) => {
	const { isOpened } = useContext(ContextDropdown);

	return (
		<div
			className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpened ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} `}
		>
			{children}
		</div>
	);
};
