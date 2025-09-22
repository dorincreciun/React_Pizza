import { cn } from "@/shared/utils/cn.ts";
import type { FC } from "react";
import { BackdropLayout } from "@/shared/layouts/BackdropLayout.tsx";
import type { CartProps } from "@/features/cart/sidebar/model/types.ts";
import { useCart } from "@/features/cart/sidebar/model/useCart.ts";
import { X } from "lucide-react";

export const CartSidebar: FC<CartProps> = ({ children }) => {
	const isOpen = useCart((state) => state.isOpen);
	const fnCloseCart = useCart((state) => state.close);

	return (
		<>
			<BackdropLayout isOpen={isOpen} />

			{/* Cart section */}
			<div
				className={cn(
					"fixed top-0 right-0 bottom-0 h-screen bg-white",
					"transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
					isOpen ? "z-10 w-[400px]" : "w-0"
				)}
			>
				<div className={"flex items-center justify-between p-5"}>
					<div>
						В корзине <span>3 товара</span>
					</div>
					<button onClick={fnCloseCart}>
						<X />
					</button>
				</div>
				{children}
			</div>
		</>
	);
};
