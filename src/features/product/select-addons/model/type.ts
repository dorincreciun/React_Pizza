export type AddonItemProps = {
	name: string;
	price: number;
	image: string;
	isActive: boolean;
	onClick: () => void;
};

export type Addon = Omit<AddonItemProps, "isActive" | "onClick">;

export type SelectAddonProps = {
	addons: Addon[];
	onChange: (addon: Addon) => void;
};
