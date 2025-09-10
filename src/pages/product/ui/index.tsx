import { PageLayout } from "../../../shared/layouts/PageLayout.tsx";
import { Breadcrumbs } from "../../../widgets/breadcrumbs";
import { Button } from "../../../shared/ui/Button";
import { SelectSize } from "../../../features/product/select-size";
import { SelectDough } from "../../../features/product/select-dough";
import { SelectAddons } from "../../../features/product/select-addons";
import { useParams } from "react-router";

export const ProductPage = () => {
	const { slug } = useParams<{ slug: string }>();
	console.log(slug);

	return (
		<PageLayout className={"container pt-10"}>
			<Breadcrumbs />

			<div className={"pt-10"}>
				{/* Section Product */}
				<div className={"flex items-start gap-11.5"}>
					<div
						className={
							"aspect-square w-[570px] rounded-2xl bg-[#FFF7EE]"
						}
					></div>

					<div>
						{/* Title / Description */}
						<div className={"flex flex-col gap-3.5"}>
							<h1
								className={
									"text-[32px] leading-5 font-extrabold tracking-[-0.5px]"
								}
							>
								Пепперони фреш
							</h1>
							<span
								className={"text-sm font-normal text-[#373737]"}
							>
								25 см, традиционное тесто 25, 380 г
							</span>
						</div>

						{/* Category select */}
						<div className={"flex flex-col gap-5 py-6"}>
							{/* Select 1 */}
							<SelectSize />

							{/* Select 2 */}
							<SelectDough />
						</div>

						{/* Ingredients */}
						<div>
							<SelectAddons />
						</div>

						<Button size={"large"}>
							Добавить в корзину за 799₽
						</Button>
					</div>
				</div>
			</div>
		</PageLayout>
	);
};
