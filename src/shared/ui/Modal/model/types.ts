import type { ReactNode } from "react";

export type ModalId = string;

export type ModalActions = {
	open: (id: ModalId) => void;
	close: (id: ModalId) => void;
};
export type ModalState = {
	registry: Record<ModalId, boolean>;
} & ModalActions;

export type ModalProps = {
	id: ModalId;
	className?: string;
	children: ReactNode;

	open?: boolean;

	closeOnEsc?: boolean;
	closeOnClickOutside?: boolean;
};
