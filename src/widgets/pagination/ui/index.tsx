import { Button } from "@/shared/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Pagination = () => {
	return (
		<div className={"mt-17.5"}>
			{/* Pagination */}
			<div className={"flex items-center gap-7.5"}>
				<div className="flex items-center gap-2.5">
					<Button
						isOnlyIcon
						aria-label={"Back"}
						color={"secondary"}
						kind={"outlined"}
					>
						<ChevronLeft />
					</Button>
					{/**/}
					<Button isOnlyIcon aria-label={"Back"}>
						<span>1</span>
					</Button>
					<Button
						isOnlyIcon
						aria-label={"Back"}
						color={"secondary"}
						kind={"outlined"}
					>
						<span>2</span>
					</Button>
					<Button
						isOnlyIcon
						aria-label={"Back"}
						color={"secondary"}
						kind={"outlined"}
					>
						<span>3</span>
					</Button>
					<Button
						isOnlyIcon
						aria-label={"Back"}
						color={"secondary"}
						kind={"outlined"}
					>
						<span>4</span>
					</Button>
					{/**/}
					<Button
						isOnlyIcon
						aria-label={"Back"}
						color={"primary"}
						kind={"outlined"}
					>
						<ChevronRight />
					</Button>
				</div>
				<div className="text-muted flex items-center gap-2 font-semibold">
					<span>0</span>
					из
					<span>0</span>
				</div>
			</div>
		</div>
	);
};
