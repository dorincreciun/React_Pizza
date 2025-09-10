import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RoutesProvider } from "../../app/providers/RoutesProvider.tsx";
import { HeaderLayout } from "./HeaderLayout.tsx";

export const AppLayout = () => {
	return (
		<>
			<div className={"flex min-h-screen flex-col"}>
				<HeaderLayout />
				<RoutesProvider />
			</div>
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
};
