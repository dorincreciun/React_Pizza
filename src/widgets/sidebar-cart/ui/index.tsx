import { BackdropLayout } from "@/shared/layouts/BackdropLayout.tsx";
import { cn } from "@/shared/utils/cn.ts";
import { Button } from "@/shared/ui/Button";
import { X } from "lucide-react";
import { useCart } from "@/features/cart/sidebar";
import type { FC } from "react";

export const CartSidebar: FC = () => {
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
			</div>
		</>
	);
};
