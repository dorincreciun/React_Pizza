import type { FC } from "react";
import { useContext } from "react";
import { TabsContext } from "../model/context";
import type { TabProps } from "../model/types";

export const TabsTrigger: FC<TabProps> = ({ value, children }) => {
	const ctx = useContext(TabsContext);
	if (!ctx)
		throw new Error("Tabs.Trigger trebuie folosit în interiorul <Tabs>.");
	const { active, setActive } = ctx;

	const isActive = active === value;

	return (
		<button
			type="button"
			role="tab"
			id={`tabs-trigger-${value}`}
			aria-selected={isActive}
			aria-controls={`tabs-content-${value}`}
			onClick={() => setActive(value)}
			className={
				"px-4 py-2 text-sm font-medium transition-colors outline-none " +
				(isActive
					? "border-primary text-primary border-b-2"
					: "text-gray-500 hover:text-black")
			}
		>
			{children}
		</button>
	);
};
