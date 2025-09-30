type CartItem = {
	id: string;
	image: string;
	title: string;
	description: string;
	quantity: number;
	price: number;
};

export type CartState = {
	isOpen: boolean;

	/* Functions */
	open: () => void;
	close: () => void;

	/* Data */
	items: CartItem[];
};
