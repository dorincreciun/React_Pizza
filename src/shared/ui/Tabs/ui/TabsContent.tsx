import type { FC } from "react";
import { useContext } from "react";
import { TabsContext } from "../model/context";
import type { TabProps } from "../model/types";

export const TabsContent: FC<TabProps> = ({ value, children }) => {
	const ctx = useContext(TabsContext);
	if (!ctx)
		throw new Error("Tabs.Content trebuie folosit în interiorul <Tabs>.");
	const { active } = ctx;

	if (active !== value) return null;

	return (
		<div
			role="tabpanel"
			id={`tabs-content-${value}`}
			aria-labelledby={`tabs-trigger-${value}`}
		>
			{children}
		</div>
	);
};
