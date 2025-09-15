import { Empty } from "@/widgets/cart-sidebar/ui/Empty.tsx";
import { cn } from "@/shared/utils/cn.ts";

export const CartSidebar = () => {
	const isEmpty = true;

	return (
		<div
			className={cn(
				"fixed top-0 right-0 bottom-0 z-20 w-[400px] bg-gray-300",
				"translate-x-full transform-gpu will-change-transform",
				"animate-cart-open",
				isEmpty && "flex items-center justify-center"
			)}
		>
			{isEmpty && <Empty />}
		</div>
	);
};
