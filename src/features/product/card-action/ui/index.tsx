import { Button } from "@/shared/ui/Button";
import { Grid2x2Plus, Plus } from "lucide-react";
import type { FC } from "react";
import type { ProductActionType } from "../model/types";

export const CardAction: FC<ProductActionType> = ({ configure }) => {
	return (
		<div>
			{configure ? (
				<Button color={"secondary"}>
					<Grid2x2Plus />
					Собрать
				</Button>
			) : (
				<Button color={"secondary"}>
					<Plus />
					Добавить
				</Button>
			)}
		</div>
	);
};
