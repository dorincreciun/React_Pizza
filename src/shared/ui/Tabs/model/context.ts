import { createContext } from "react";
import type { TabsContextShape } from "./types";

export const TabsContext = createContext<TabsContextShape>(null);
