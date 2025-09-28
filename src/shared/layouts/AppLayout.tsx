import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RoutesProvider } from "../../app/providers/RoutesProvider.tsx";

import { Header } from "@/widgets/header";
import { CartSidebar } from "@/widgets/sidebar-cart/ui";

export const AppLayout = () => {
	return (
		<>
			<div className={"flex min-h-screen flex-col"}>
				<Header />
				<RoutesProvider />
				<CartSidebar />
			</div>
			<ReactQueryDevtools initialIsOpen={false} />
		</>
	);
};
