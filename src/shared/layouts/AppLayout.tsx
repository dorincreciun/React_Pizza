import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RoutesProvider } from "../../app/providers/RoutesProvider.tsx";
import { HeaderLayout } from "./HeaderLayout.tsx";

export const AppLayout = () => {
	return (
		<>
			<HeaderLayout />
			<RoutesProvider />
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
};
