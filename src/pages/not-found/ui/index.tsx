import { PageLayout } from "../../../shared/layouts/PageLayout.tsx";
import { Button } from "../../../shared/ui/Button";
import { MoveLeft } from "lucide-react";

export const NotFoundPage = () => {
	return (
		<PageLayout className={"container flex items-center"}>
			<div className="grid grid-cols-2 items-center gap-5">
				<div className="flex flex-col gap-10">
					<div>
						<h1
							className={
								"mb-3 text-4xl font-extrabold tracking-[-0.03%]"
							}
						>
							Страница не найдена
						</h1>
						<p className={"text-muted text-xl tracking-[-0.03%]"}>
							Проверьте корректность введённого адреса или
							повторите попытку позже
						</p>
					</div>
					<div className={"flex items-center gap-5"}>
						<Button color={"primary"} kind={"outlined"}>
							<MoveLeft />
							На главную
						</Button>
						<Button color={"secondary"} kind={"outlined"}>
							Обновить
						</Button>
					</div>
				</div>
				<div>
					<div className={"ms-auto block max-w-max"}>
						<img
							src="/error-404.png"
							alt="Not found"
							width={340}
							height={346}
						/>
					</div>
				</div>
			</div>
		</PageLayout>
	);
};
