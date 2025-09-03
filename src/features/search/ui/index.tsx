import { FormGroup } from "../../../shared/ui/FormGroup";

export const Search = () => {
	return (
		<FormGroup>
			<FormGroup.Label>Test</FormGroup.Label>
			<FormGroup.Input variant={"primary"} size={"base"} />
			<FormGroup.Hint>Test</FormGroup.Hint>
		</FormGroup>
	);
};

// <Input placeholder={"Поиск пиццы..."} variant={"secondary"} size={"large"} />
