import { FormGroup } from "../../../shared/ui/FormGroup";
import { Search } from "lucide-react";
import { useState } from "react";

export const SearchComponent = () => {
	const [showResults, setShowResults] = useState<boolean>(false);

	return (
		<div className={"relative w-full"}>
			<FormGroup className={"relative z-10"}>
				<FormGroup.Input
					iconStart={<Search />}
					variant={"primary"}
					size={"medium"}
					placeholder={"Поиск пиццы..."}
					className={"h-12.5"}
					onClick={() => setShowResults((prev) => !prev)}
				/>
			</FormGroup>

			{/* Search results */}
			{showResults && (
				<div className="fixed inset-0 z-0 [animation:fade-blur-in_.45s_cubic-bezier(0.16,1,0.3,1)_both] bg-gray-800/60 will-change-[opacity,filter]" />
			)}
		</div>
	);
};
