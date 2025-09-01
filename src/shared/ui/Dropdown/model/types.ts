import type { FC, ReactElement, ReactNode } from "react";

/**
 * Tipuri pentru Contextul Dropdown
 * - conține starea dacă dropdown-ul este deschis
 * - funcția toggle() schimbă starea (deschis/închis)
 */
export type ContextDropdownType = {
	isOpened: boolean;
	toggle: () => void;
};

/**
 * Tipuri pentru butonul Dropdown
 * - children = conținutul butonului (ex. text, icon)
 */
export type DropdownButtonProps = { children: ReactNode };
export type DropdownButtonType = FC<DropdownButtonProps>;

/**
 * Tipuri pentru corpul Dropdown
 * - children = unul sau mai multe elemente de tip DropdownItem
 */
export type DropdownBodyProps = {
	children: ReactElement<DropdownItemProps> | Array<ReactElement<DropdownItemProps>>;
};
export type DropdownBodyType = FC<DropdownBodyProps>;

/**
 * Tipuri pentru elementele (item-urile) din Dropdown
 * - children = conținutul item-ului (text, icon etc.)
 * - onClick = acțiune la selectarea item-ului
 */
export type DropdownItemProps = { children: ReactNode; onClick?: () => void };
export type DropdownItemType = FC<DropdownItemProps>;

/**
 * Tipuri pentru componenta principală Dropdown
 * - children = exact două elemente: un buton și un corp
 */
export type DropdownElements = [ReactElement<DropdownButtonProps>, ReactElement<DropdownBodyProps>];

export type ProviderDropdownType = FC<{ children: DropdownElements }>;

/**
 * Tipuri pentru componenta compusă Dropdown
 * - Dropdown (provider) + sub-componentele sale:
 *   - Toggle (butonul)
 *   - Body (corpul)
 *   - Item (elementele din corp)
 */
export type ProviderDropdownComponent = ProviderDropdownType & {
	Toggle: DropdownButtonType;
	Body: DropdownBodyType;
	Item: DropdownItemType;
};
