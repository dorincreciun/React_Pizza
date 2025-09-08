import { FormGroup } from "../../../shared/ui/FormGroup";
import { Search } from "lucide-react";

export const SearchComponent = () => {
	return (
		<FormGroup>
			<FormGroup.Label>Test</FormGroup.Label>
			<FormGroup.Input
				iconStart={<Search />}
				variant={"secondary"}
				size={"medium"}
				placeholder={"Поиск пиццы..."}
			/>
		</FormGroup>
	);
};

// <Input placeholder={"Поиск пиццы..."} variant={"secondary"} size={"large"} />
