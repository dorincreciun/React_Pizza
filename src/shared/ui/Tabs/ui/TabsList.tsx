import type { FC, ReactNode } from "react";

type TabsListProps = {
	children: ReactNode;
};

export const TabsList: FC<TabsListProps> = ({ children }) => {
	return (
		<div
			className="flex gap-2 border-b"
			role="tablist"
			aria-orientation="horizontal"
		>
			{children}
		</div>
	);
};
