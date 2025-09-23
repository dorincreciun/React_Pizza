import { SearchComponent } from "@/features/search";
import { ShoppingCart, User } from "lucide-react";
import { useCart } from "@/features/cart/sidebar/model/useCart.ts";
import { Button } from "@/shared/ui/Button";
import { Logo } from "@/shared/ui/Logo";
import { cn } from "@/shared/utils/cn.ts";

export const Header = () => {
	const fnOpenCart = useCart((state) => state.open);
	return (
		<header
			className={cn(
				"sticky top-0 z-10 py-10",
				"border-b border-[#EDEDED] bg-white"
			)}
		>
			<div className={"container flex items-center gap-10"}>
				{/* Logo */}
				<Logo />

				{/* Search */}
				<SearchComponent />

				<div className={"flex items-center gap-4"}>
					<Button
						size={"large"}
						kind={"outlined"}
						className={"max-md:aspect-square max-md:p-0"}
					>
						<User />
						<span className={"max-md:hidden"}>Войти</span>
					</Button>
					<Button
						isOnlyIcon
						size={"large"}
						kind={"outlined"}
						aria-label={"Button cart"}
						onClick={fnOpenCart}
					>
						<ShoppingCart />
					</Button>
				</div>
			</div>
		</header>
	);
};
