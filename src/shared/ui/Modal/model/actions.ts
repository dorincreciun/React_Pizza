import type { ModalId, ModalState } from "./types";
import type { StoreApi } from "zustand";

type SetState = StoreApi<ModalState>["setState"];

export const openModal = (set: SetState) => (id: ModalId) => {
	set((state) => ({
		registry: {
			...state.registry,
			[id]: true,
		},
	}));
};

export const closeModal = (set: SetState) => (id: ModalId) => {
	set((state) => ({
		registry: {
			...state.registry,
			[id]: false,
		},
	}));
};
