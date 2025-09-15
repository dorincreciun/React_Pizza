import { useState } from "react";
import { TabsContext } from "../model/context";
import type { TabsCompoundComponent, TabsProps } from "../model/types";
import { TabsList } from "./TabsList";
import { TabsTrigger } from "./TabsTrigger";
import { TabsContent } from "./TabsContent";

export const Tabs: TabsCompoundComponent = ({
	defaultValue,
	children,
}: TabsProps) => {
	const [active, setActive] = useState(defaultValue ?? "");

	return (
		<TabsContext.Provider value={{ active, setActive }}>
			<div className="w-full">{children}</div>
		</TabsContext.Provider>
	);
};

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;
