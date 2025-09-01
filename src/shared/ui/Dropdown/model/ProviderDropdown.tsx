import { useState, useCallback } from "react";
import type { ProviderDropdownComponent } from "./types";
import { DropdownButton } from "../ui/DropdownButton";
import { DropdownBody } from "../ui/DropdownBody";
import { DropdownItem } from "../ui/DropdownItem";
import { ContextDropdown } from "./ContextDropdown";

export const Dropdown: ProviderDropdownComponent = ({ children }) => {
	const [isOpened, setIsOpened] = useState(false);
	const toggle = useCallback(() => setIsOpened((prev) => !prev), []);

	return (
		<ContextDropdown.Provider value={{ isOpened, toggle }}>{children}</ContextDropdown.Provider>
	);
};

Dropdown.Toggle = DropdownButton;
Dropdown.Body = DropdownBody;
Dropdown.Item = DropdownItem;
