import type { ReactNode } from "react";

export type CartState = {
	isOpen: boolean;
	open: () => void;
	close: () => void;
};

export type CartProps = {
	children: ReactNode;
};
