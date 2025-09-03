import { Logo } from "../ui/Logo";
import { Search } from "../../features/search";
import { ShoppingBasket, User } from "lucide-react";
import { Button } from "../ui/Button";

export const HeaderLayout = () => {
	return (
		<header className={"border-b border-[#EDEDED] py-10"}>
			<div className={"container flex items-center gap-10"}>
				<Logo />
				<Search />

				<div className={"flex items-center gap-4"}>
					{/* Login button */}
					<Button variant={"outline"}>
						<User />
						Войти
					</Button>

					{/* Cart button */}
					<Button size={"icon"} variant={"outline"}>
						<ShoppingBasket />
					</Button>
				</div>
			</div>
		</header>
	);
};
