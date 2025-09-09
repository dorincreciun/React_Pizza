import { FormGroup } from "../../../shared/ui/FormGroup";
import { Search } from "lucide-react";
import { useState } from "react";
import { SearchResult } from "./SearchResult.tsx";
import { ButtonClose } from "./ButtonClose.tsx";

export const SearchComponent = () => {
	const [showResults, setShowResults] = useState<boolean>(false);

	return (
		<div className={"relative w-full"}>
			<FormGroup className={"relative z-10"}>
				<FormGroup.Input
					prefix={<Search />}
					variant={"primary"}
					size={"medium"}
					placeholder={"Поиск пиццы..."}
					className={"h-12.5"}
					onClick={() => setShowResults(true)}
					suffix={
						<ButtonClose
							onClick={() => setShowResults(false)}
							isOpened={showResults}
						/>
					}
				/>
			</FormGroup>

			{/* Search results */}
			{showResults && <SearchResult />}
		</div>
	);
};
