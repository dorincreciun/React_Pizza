import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { SearchComponent } from "../../features/search";
import { ShoppingCart, User } from "lucide-react";

export const HeaderLayout = () => {
	return (
		<header className={"border-b border-[#EDEDED] py-10"}>
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
