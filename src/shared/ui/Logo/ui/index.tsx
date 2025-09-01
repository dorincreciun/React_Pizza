import { Link } from "react-router";

export const Logo = () => {
	return (
		<div className={"relative flex max-w-max flex-shrink-0 items-center gap-4"}>
			<Link className={"absolute inset-0"} to={"/"}></Link>
			<img src="/logo-pizza.png" alt="" />
			<div>
				<div className={"text-2xl font-bold tracking-[1%]"}>NEXT PIZZA</div>
				<div className={"text-[#7B7B7B]"}>вкусней уже некуда</div>
			</div>
		</div>
	);
};
