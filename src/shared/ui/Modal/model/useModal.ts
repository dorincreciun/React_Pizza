import { create } from "zustand";
import type { ModalActionsProps } from "../model/types";

export const useModal = create<ModalActionsProps>((set) => ({
	isOpen: false,
	close: () => set({ isOpen: false }),
	open: () => set({ isOpen: true }),
}));
