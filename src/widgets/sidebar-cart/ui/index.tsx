import { BackdropLayout } from "@/shared/layouts/BackdropLayout.tsx";
import { cn } from "@/shared/utils/cn.ts";
import { Button } from "@/shared/ui/Button";
import { MoveRight, X } from "lucide-react";
import { useCart } from "@/features/cart/sidebar";
import type { FC } from "react";
import { CartItems } from "@/widgets/sidebar-cart/ui/CartItems.tsx";
import { CartEmpty } from "@/widgets/sidebar-cart/ui/CartEmpty.tsx";

export const CartSidebar: FC = () => {
	const isOpen = useCart((state) => state.isOpen);
	const fnCloseCart = useCart((state) => state.close);
	const cartItems = useCart((state) => state.items);

	return (
		<>
			<BackdropLayout isOpen={isOpen} />

			{/* Cart section */}
			<div
				className={cn(
					"bg-sidebar-bg fixed top-0 right-0 z-10 h-full w-[400px]",
					"flex flex-col will-change-transform",
					isOpen
						? "[animation:cart-slide-in_.55s_cubic-bezier(0.16,1,0.3,1)_both]"
						: "[animation:cart-slide-out_.4s_cubic-bezier(0.4,0,0.2,1)_both]"
				)}
			>
				{/* Heading section */}
				<div className={"flex items-center justify-between p-5"}>
					<div className={"text-xl"}>
						{cartItems.length > 0 && (
							<div>
								В корзине{" "}
								<span className={"font-bold"}>3 товара</span>
							</div>
						)}
					</div>
					{/* Close */}
					<Button
						isOnlyIcon
						aria-label={"Close"}
						color={"secondary"}
						className={"absolute top-2 right-2 bg-transparent"}
						onClick={fnCloseCart}
					>
						<X />
					</Button>
				</div>

				{cartItems.length > 0 ? (
					<>
						<div className="flex-1">
							<CartItems />
						</div>

						<div className="flex flex-col gap-5 bg-white p-5">
							<div className="flex items-center justify-between">
								<span>Итого:</span>
								<span className="text-lg font-bold">
									2245 ₽
								</span>
							</div>
							<Button className="w-full" size="large">
								Оформить заказ <MoveRight />
							</Button>
						</div>
					</>
				) : (
					<CartEmpty />
				)}
			</div>
		</>
	);
};
