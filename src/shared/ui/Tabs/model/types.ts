import type { FC, ReactNode } from "react";

export type TabProps = {
	value: string;
	children: ReactNode;
};

export type TabsProps = {
	defaultValue?: string;
	children: ReactNode;
};

export type TabsContextShape = {
	active: string;
	setActive: (v: string) => void;
} | null;

export type TabsCompoundComponent = FC<TabsProps> & {
	List: FC<{ children: ReactNode }>;
	Trigger: FC<TabProps>;
	Content: FC<TabProps>;
};
