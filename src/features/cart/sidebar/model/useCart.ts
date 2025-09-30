import { create } from "zustand";
import type { CartState } from "./types";

export const useCart = create<CartState>((set) => {
	return {
		isOpen: false,
		items: [],

		close: () => set({ isOpen: false }),
		open: () => set({ isOpen: true }),
	};
});
