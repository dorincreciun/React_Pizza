import type { ReactNode } from "react";

export type ModalActionsProps = {
	isOpen: boolean;
	close: () => void;
	open: () => void;
};

export type ModalProps = {
	className?: string;
	children: ReactNode;
	closeOnEsc?: boolean;
	closeOnClickOutside?: boolean;
};
