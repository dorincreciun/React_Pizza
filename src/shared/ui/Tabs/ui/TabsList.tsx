import type { FC, ReactNode } from "react";
import { cn } from "@/shared/utils/cn.ts";

type TabsListProps = {
	children: ReactNode;
};

export const TabsList: FC<TabsListProps> = ({ children }) => {
	return (
		<div
			role="tablist"
			aria-orientation="horizontal"
			className={cn(
				"bg-surface relative flex rounded-2xl px-2 py-1.5 select-none",
				"focus-within:ring-2 focus-within:ring-gray-400/10",
				"transition-all duration-200 ease-in-out"
			)}
		>
			{children}
		</div>
	);
};
