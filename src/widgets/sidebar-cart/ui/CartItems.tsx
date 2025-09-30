import {
	ProductDescription,
	ProductImage,
	ProductPrice,
	ProductTitle,
} from "@/entities/product";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/shared/ui/Button";

export const CartItems = () => {
	return (
		<div className={"mb-5 flex-1 flex-col justify-between"}>
			<div className={"flex-1"}>
				{/* Cart list */}
				<div className={"flex items-start gap-5 bg-white p-5"}>
					<ProductImage
						className={"bg-transparent"}
						src={"/pizza.png"}
						alt={""}
						width={65}
						height={65}
					/>
					<div>
						<div
							className={"border-border-light mb-3 border-b pb-3"}
						>
							<ProductTitle title={"Чизбургер-пицца"} />
							<ProductDescription
								description={
									"Средняя 30 см, традиционное тесто"
								}
							/>
						</div>
						<div className={"flex items-center justify-between"}>
							<div
								className={"relative flex items-center gap-10"}
							>
								<Button
									isOnlyIcon
									color={"primary"}
									kind={"outlined"}
									size={"small"}
									aria-label={"Add Product"}
								>
									<Minus />
								</Button>
								<div
									className={
										"absolute top-1/2 left-1/2 -translate-1/2"
									}
								>
									<span className={"text-base font-bold"}>
										1
									</span>
								</div>
								<Button
									isOnlyIcon
									color={"primary"}
									kind={"outlined"}
									size={"small"}
									aria-label={"Add Product"}
								>
									<Plus />
								</Button>
							</div>
							<ProductPrice price={"965"} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
