import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RoutesProvider } from "../../app/providers/RoutesProvider.tsx";
import { HeaderLayout } from "./HeaderLayout.tsx";
import { CartSidebar } from "@/widgets/cart-sidebar";

export const AppLayout = () => {
	return (
		<>
			<div className={"flex min-h-screen flex-col"}>
				<HeaderLayout />
				<RoutesProvider />
				<CartSidebar />
			</div>
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
};
