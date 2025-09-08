import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { SearchComponent } from "../../features/search";
import { ShoppingCart, User } from "lucide-react";
import { cn } from "../utils/cn.ts";

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
					{/* Login button */}
					<Button
						kind={"solid"}
						status={"primary"}
						size={"medium"}
						mode={"prefix"}
						label={"Войти"}
						icon={<User />}
						className={"h-12.5"}
					/>

					{/* Cart button */}
					<Button
						kind={"solid"}
						status={"primary"}
						size={"medium"}
						mode={"icon-only"}
						aria-label={"Button cart"}
						icon={<ShoppingCart />}
						className={"h-12.5"}
					/>
				</div>
			</div>
		</header>
	);
};
