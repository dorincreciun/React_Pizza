import { cn } from "@/shared/utils/cn.ts";
import { useState } from "react";
import { BackdropLayout } from "@/shared/layouts/BackdropLayout.tsx";

export const CartSidebar = () => {
	const [isOpen, setIsOpen] = useState(true);

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
			></div>
		</>
	);
};
