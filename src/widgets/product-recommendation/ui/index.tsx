import { Button } from "@/shared/ui/Button";
import { Grid2x2Plus } from "lucide-react";

export const ProductRecommendation = () => {
	return (
		<div>
			<div
				className={"text-[28px] leading-5 font-bold tracking-[-0.5px]"}
			>
				Рекомендации
			</div>

			<div className={"grid grid-cols-4 items-stretch gap-6 py-8"}>
				{/* Item */}
				<div className={"flex flex-col gap-4"}>
					{/* ProductImage */}
					<div
						className={
							"flex items-center justify-center rounded-2xl bg-[#FFF7EE] p-6"
						}
					>
						<img src="/pizza.png" alt="" width={200} height={200} />
					</div>
					<div
						className={"flex flex-1 flex-col justify-between gap-4"}
					>
						{/* Content */}
						<div className={"flex flex-col gap-2"}>
							<div className={"text-[22px] font-bold"}>
								Сырный цыпленок
							</div>
							<p
								className={
									"text-[16px] leading-5 font-normal text-[#B1B1B1]"
								}
							>
								Цыпленок, моцарелла, сыры чеддер и пармезан,
								сырный соус, томаты, соус альфредо, чеснок
							</p>
						</div>

						{/* Price */}
						<div className={"flex items-center justify-between"}>
							<div className={"text-xl font-normal"}>
								от
								<span className={"font-bold"}>395 ₽</span>
							</div>
							<Button color={"secondary"}>
								<Grid2x2Plus />
								Собрать
							</Button>
						</div>
					</div>
				</div>

				{/* Item */}
				<div className={"flex flex-col gap-4"}>
					{/* ProductImage */}
					<div
						className={
							"flex items-center justify-center rounded-2xl bg-[#FFF7EE] p-6"
						}
					>
						<img src="/pizza.png" alt="" width={200} height={200} />
					</div>
					<div
						className={"flex flex-1 flex-col justify-between gap-4"}
					>
						{/* Content */}
						<div className={"flex flex-col gap-2"}>
							<div className={"text-[22px] font-bold"}>
								Сырный цыпленок
							</div>
							<p
								className={
									"text-[16px] leading-5 font-normal text-[#B1B1B1]"
								}
							>
								Цыпленок, моцарелла, сыры чеддер и пармезан,
								сырный соус, томаты, соус альфредо, чеснок
							</p>
						</div>

						{/* Price */}
						<div className={"flex items-center justify-between"}>
							<div className={"text-xl font-normal"}>
								от
								<span className={"font-bold"}>395 ₽</span>
							</div>
							<Button color={"secondary"}>
								<Grid2x2Plus />
								Собрать
							</Button>
						</div>
					</div>
				</div>

				{/* Item */}
				<div className={"flex flex-col gap-4"}>
					{/* ProductImage */}
					<div
						className={
							"flex items-center justify-center rounded-2xl bg-[#FFF7EE] p-6"
						}
					>
						<img src="/pizza.png" alt="" width={200} height={200} />
					</div>
					<div
						className={"flex flex-1 flex-col justify-between gap-4"}
					>
						{/* Content */}
						<div className={"flex flex-col gap-2"}>
							<div className={"text-[22px] font-bold"}>
								Сырный цыпленок
							</div>
							<p
								className={
									"text-[16px] leading-5 font-normal text-[#B1B1B1]"
								}
							>
								Цыпленок, моцарелла, сыры чеддер и пармезан,
								сырный соус, томаты, соус альфредо, чеснок
							</p>
						</div>

						{/* Price */}
						<div className={"flex items-center justify-between"}>
							<div className={"text-xl font-normal"}>
								от
								<span className={"font-bold"}>395 ₽</span>
							</div>
							<Button color={"secondary"}>
								<Grid2x2Plus />
								Собрать
							</Button>
						</div>
					</div>
				</div>

				{/* Item */}
				<div className={"flex flex-col gap-4"}>
					{/* ProductImage */}
					<div
						className={
							"flex items-center justify-center rounded-2xl bg-[#FFF7EE] p-6"
						}
					>
						<img src="/pizza.png" alt="" width={200} height={200} />
					</div>
					<div
						className={"flex flex-1 flex-col justify-between gap-4"}
					>
						{/* Content */}
						<div className={"flex flex-col gap-2"}>
							<div className={"text-[22px] font-bold"}>
								Сырный цыпленок
							</div>
							<p
								className={
									"text-[16px] leading-5 font-normal text-[#B1B1B1]"
								}
							>
								Цыпленок, моцарелла, сыры чеддер и пармезан,
								сырный соус, томаты, соус альфредо, чеснок
							</p>
						</div>

						{/* Price */}
						<div className={"flex items-center justify-between"}>
							<div className={"text-xl font-normal"}>
								от
								<span className={"font-bold"}>395 ₽</span>
							</div>
							<Button color={"secondary"}>
								<Grid2x2Plus />
								Собрать
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

/* React DevTools */
ProductRecommendation.displayName = "ProductRecommendation";
