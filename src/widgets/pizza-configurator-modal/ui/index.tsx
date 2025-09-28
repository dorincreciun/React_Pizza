import { BackdropLayout } from "@/shared/layouts/BackdropLayout.tsx";
import { cn } from "@/shared/utils/cn.ts";
import { type Addon, SelectAddons } from "@/features/product/select-addons";
import { Button } from "@/shared/ui/Button";
import { X } from "lucide-react";
import { ProductDescription, ProductTitle } from "@/entities/product";
import { SegmentedControl } from "@/shared/ui/SegmentedControl";

const addons = [
	{
		image: "/test-pizza-2.png",
		name: "Сливочная моцарелла",
		price: 79,
		isActive: true,
	},
	{
		image: "/test-pizza.png",
		name: "Сливочная моцарелла",
		price: 79,
		isActive: false,
	},
	{
		image: "/test-pizza-3.png",
		name: "Сливочная моцарелла",
		price: 79,
		isActive: false,
	},
	{
		image: "/test-pizza-4.png",
		name: "Сливочная моцарелла",
		price: 79,
		isActive: false,
	},
];

const selectorSize = ["Маленькая", "Средняя", "Большая"];
const selectorDough = ["Традиционное", "Тонкое"];

export const PizzaConfiguratorModal = ({
	onClick,
}: {
	onClick: () => void;
}) => {
	const handleAddonChange = (addon: Addon) => {
		console.log(addon);
	};

	return (
		<>
			<BackdropLayout isOpen={true} />

			<div
				className={cn(
					"absolute top-1/2 left-1/2 z-10 -translate-1/2",
					"h-[580px] w-full max-w-[1000px]",
					"grid grid-cols-2 items-stretch",
					"overflow-hidden rounded-xl"
				)}
			>
				{/* Close */}
				<Button
					isOnlyIcon
					aria-label={"Close"}
					color={"secondary"}
					className={"absolute top-2 right-2 bg-transparent"}
					onClick={onClick}
				>
					<X />
				</Button>

				{/* Pizza image */}
				<div className="relative flex items-center justify-center bg-white p-10">
					<div
						className={cn(
							"aspect-square w-[450px]",
							"flex items-center justify-center",
							"overflow-hidden rounded-full border border-dashed border-[#DEDEDE]",
							"transition-colors duration-200 ease-in-out"
						)}
					>
						<div
							className={cn(
								"aspect-square w-[375px]",
								"flex items-center justify-center",
								"overflow-hidden rounded-full border border-dashed border-[#DEDEDE]",
								"transition-colors duration-200 ease-in-out"
							)}
						>
							<div
								className={
									"absolute top-1/2 left-1/2 aspect-square w-[335px] -translate-1/2"
								}
							>
								<img
									className={"aspect-square w-full"}
									width={300}
									height={300}
									src="/pizza-modal.png"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>

				{/* Pizza description */}
				<div className="flex flex-col gap-5 bg-[#F4F1EE] p-10">
					<div>
						<ProductTitle title={"Пепперони фреш"} />
						<ProductDescription
							description={"25 см, традиционное тесто 25, 380 г"}
						/>
					</div>

					<div className="flex flex-col gap-2.5">
						{selectorSize && (
							<SegmentedControl
								className={"max-w-[420px]"}
								properties={selectorSize}
							/>
						)}
						{selectorDough && (
							<SegmentedControl
								className={"max-w-[420px]"}
								properties={selectorDough}
							/>
						)}
					</div>

					{/* Ingredients */}
					{addons && (
						<div className={"flex-1"}>
							<SelectAddons
								addons={addons}
								onChange={handleAddonChange}
							/>
						</div>
					)}

					<Button size={"large"}>Добавить в корзину за 799₽</Button>
				</div>
			</div>
		</>
	);
};
