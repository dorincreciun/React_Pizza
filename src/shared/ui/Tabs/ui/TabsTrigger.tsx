import type { FC } from "react";
import { useContext } from "react";
import { TabsContext } from "../model/context";
import type { TabProps } from "../model/types";
import { cn } from "@/shared/utils/cn";

export const TabsTrigger: FC<TabProps> = ({ value, children, isActive }) => {
	const ctx = useContext(TabsContext);
	if (!ctx)
		throw new Error("Tabs.Trigger trebuie folosit în interiorul <Tabs>.");

	return (
		<button
			type="button"
			role="tab"
			id={`tabs-trigger-${value}`}
			aria-selected={isActive}
			aria-controls={`tabs-content-${value}`}
			className={cn(
				"cursor-pointer rounded-2xl px-6 py-2.5 text-base font-medium",
				"transition-all duration-300 ease-out",
				isActive
					? "text-primary bg-white shadow-[0_14px_20px_rgba(0,0,0,0.05)]"
					: "hover:text-primary text-[#202020]"
			)}
		>
			{children}
		</button>
	);
};
