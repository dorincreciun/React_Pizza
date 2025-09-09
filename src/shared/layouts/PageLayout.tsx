import type { PageLayoutProps } from "../types/layouts.ts";
import { cn } from "../utils/cn.ts";

export const PageLayout = ({
	children,
	className,
	...rest
}: PageLayoutProps) => {
	return (
		<main className={cn(className)} {...rest}>
			{children}
		</main>
	);
};
