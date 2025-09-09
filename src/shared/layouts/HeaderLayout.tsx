import { Logo } from "../ui/Logo";
import { SearchComponent } from "../../features/search";
import { ShoppingCart, User } from "lucide-react";
import { cn } from "../utils/cn.ts";
import { Button } from "../ui/Button";

export const HeaderLayout = () => {
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
					<Button size={"large"} kind={"outlined"}>
						<User />
						Войти
					</Button>
					<Button
						isOnlyIcon
						size={"large"}
						kind={"outlined"}
						aria-label={"Button cart"}
					>
						<ShoppingCart />
					</Button>
				</div>
			</div>
		</header>
	);
};
