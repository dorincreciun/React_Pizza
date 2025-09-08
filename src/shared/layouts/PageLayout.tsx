import type { PageLayoutProps } from "../types/layouts.ts";

export const PageLayout = ({ children }: PageLayoutProps) => {
	return <main className={"container flex flex-col gap-20"}>{children}</main>;
};
