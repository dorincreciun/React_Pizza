import { create } from "zustand";
import type { ModalState } from "../model/types";
import { closeModal, openModal } from "@/shared/ui/Modal/model/actions.ts";

export const useModal = create<ModalState>((set) => ({
	registry: {},

	open: openModal(set),
	close: closeModal(set),
}));
