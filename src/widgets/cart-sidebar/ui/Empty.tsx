import { Button } from "@/shared/ui/Button";
import { MoveLeft } from "lucide-react";

export const Empty = () => {
	return (
		<div className={"flex w-[300px] flex-col items-center gap-6"}>
			<img src="/empty-cart.png" alt="" width={120} height={120} />
			<div>
				<div className={"text-center text-[22px] font-semibold"}>
					Корзина пустая
				</div>
				<p className={"text-muted text-center text-base"}>
					Добавьте хотя бы одну пиццу, чтобы совершить заказ
				</p>
			</div>
			<Button color="primary" className={"w-full"}>
				<MoveLeft />
				Назад
			</Button>
		</div>
	);
};
