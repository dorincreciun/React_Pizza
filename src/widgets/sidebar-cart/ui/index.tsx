import { BackdropLayout } from "@/shared/layouts/BackdropLayout.tsx";
import { cn } from "@/shared/utils/cn.ts";
import { Button } from "@/shared/ui/Button";
import { Minus, MoveRight, Plus, X } from "lucide-react";
import { useCart } from "@/features/cart/sidebar";
import type { FC } from "react";
import {
	ProductDescription,
	ProductImage,
	ProductPrice,
	ProductTitle,
} from "@/entities/product";

export const CartSidebar: FC = () => {
	const isOpen = useCart((state) => state.isOpen);
	const fnCloseCart = useCart((state) => state.close);

	return (
		<>
			<BackdropLayout isOpen={isOpen} />

			{/* Cart section */}
			<div
				className={cn(
					"fixed top-0 right-0 z-10 h-full w-[400px] bg-[#F4F1EE]",
					"flex flex-col will-change-transform",
					isOpen
						? "[animation:cart-slide-in_.55s_cubic-bezier(0.16,1,0.3,1)_both]"
						: "[animation:cart-slide-out_.4s_cubic-bezier(0.4,0,0.2,1)_both]"
				)}
			>
				{/* Heading section */}
				<div className={"flex items-center justify-between p-5"}>
					<div className={"text-xl"}>
						В корзине <span className={"font-bold"}>3 товара</span>
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

				<div className={"mb-5 flex-1 flex-col justify-between"}>
					<div className={"flex-1"}>
						{/* Cart list */}
						<div className={"flex items-start gap-5 bg-white p-5"}>
							<ProductImage
								className={"bg-transparent"}
								src={"/pizza.png"}
								alt={""}
								width={65}
								height={65}
							/>
							<div>
								<div
									className={
										"mb-3 border-b border-[#EDEDED] pb-3"
									}
								>
									<ProductTitle title={"Чизбургер-пицца"} />
									<ProductDescription
										description={
											"Средняя 30 см, традиционное тесто"
										}
									/>
								</div>
								<div
									className={
										"flex items-center justify-between"
									}
								>
									<div
										className={
											"relative flex items-center gap-10"
										}
									>
										<Button
											isOnlyIcon
											color={"primary"}
											kind={"outlined"}
											size={"small"}
											aria-label={"Add Product"}
										>
											<Minus />
										</Button>
										<div
											className={
												"absolute top-1/2 left-1/2 -translate-1/2"
											}
										>
											<span
												className={
													"text-base font-bold"
												}
											>
												1
											</span>
										</div>
										<Button
											isOnlyIcon
											color={"primary"}
											kind={"outlined"}
											size={"small"}
											aria-label={"Add Product"}
										>
											<Plus />
										</Button>
									</div>
									<ProductPrice price={"965"} />
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Footer section */}
				<div className={"flex flex-col gap-5 bg-white p-5"}>
					<div className={"flex items-center justify-between"}>
						<span>Итого:</span>
						<span className={"text-lg font-bold"}>2245 ₽</span>
					</div>
					<Button className={"w-full"} size={"large"}>
						Оформить заказ <MoveRight />
					</Button>
				</div>
			</div>
		</>
	);
};
