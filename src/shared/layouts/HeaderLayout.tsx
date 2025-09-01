import { Logo } from "../ui/Logo";
import { Search } from "../../features/search";
import { ShoppingBasket, User } from "lucide-react";

export const HeaderLayout = () => {
	return (
		<header>
			<div className="container flex items-center gap-10">
				<Logo />
				<Search />

				<div className={"flex items-center gap-4"}>
					<button>
						<User />
						Войти
					</button>

					<button>
						<ShoppingBasket />
					</button>
				</div>
			</div>
		</header>
	);
};
