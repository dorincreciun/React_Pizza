import type { DropdownItemType } from "../model/types.ts";

export const DropdownItem: DropdownItemType = ({ children, onClick }) => {
	return <button onClick={onClick}>{children}</button>;
};
