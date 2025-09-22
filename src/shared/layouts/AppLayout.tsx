import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RoutesProvider } from "../../app/providers/RoutesProvider.tsx";
import { HeaderLayout } from "./HeaderLayout.tsx";
import { CartSidebar } from "@/features/cart/sidebar/ui";

export const AppLayout = () => {
	return (
		<>
			<div className={"flex min-h-screen flex-col"}>
				<HeaderLayout />
				<RoutesProvider />
				<CartSidebar>wdwd</CartSidebar>
			</div>
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
};
