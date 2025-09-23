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
					"fixed top-0 right-0 z-10 h-full w-[400px] bg-white",
					"transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
					isOpen ? "translate-x-0" : "translate-x-full"
				)}
			>
				<div className={"flex items-center justify-between p-5"}>
					<div>
						В корзине <span>3 товара</span>
					</div>
					<button className={"cursor-pointer"} onClick={fnCloseCart}>
						<X />
					</button>
				</div>
				{children}
			</div>
		</>
	);
};
