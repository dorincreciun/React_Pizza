import { useContext } from "react";
import type { DropdownButtonType } from "../model/types.ts";
import { ContextDropdown } from "../model/ContextDropdown.ts";

export const DropdownButton: DropdownButtonType = ({ children }) => {
	const { toggle } = useContext(ContextDropdown);

	return <button onClick={toggle}>{children}</button>;
};
