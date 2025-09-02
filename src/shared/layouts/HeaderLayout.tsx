import { Logo } from "../ui/Logo";
import { Search } from "../../features/search";
import { ShoppingBasket, User } from "lucide-react";
import { cn } from "../utils/cn.ts";
import { Button } from "../ui/Button";

export const HeaderLayout = () => {
	return (
		<header className={"border-b border-[#EDEDED] py-10"}>
			<div className={"container flex items-center gap-10"}>
				<Logo />
				<Search />

				<div className={"flex items-center gap-4"}>
					<Button intent={"neutral"}>
						<User />
						Войти
					</Button>

					<button
						className={cn(
							// Layout
							"flex size-12.5 items-center justify-center gap-2",

							// Border & Radius
							"rounded-2xl border border-[#FE5F00]",

							// Text & Color
							"text-[#FE5F00]"
						)}
					>
						<ShoppingBasket />
					</button>
				</div>
			</div>
		</header>
	);
};
