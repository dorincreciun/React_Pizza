import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RoutesProvider } from "../../app/providers/RoutesProvider.tsx";
import { CartSidebar } from "@/features/cart/sidebar/ui";
import { Header } from "@/widgets/header";

export const AppLayout = () => {
	return (
		<>
			<div className={"flex min-h-screen flex-col"}>
				<Header />
				<RoutesProvider />
				<CartSidebar>wdwd</CartSidebar>
			</div>
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
};
