import { PageLayout } from "../../../shared/layouts/PageLayout.tsx";
import { Dropdown } from "../../../shared/ui/Dropdown";

export const HomePage = () => {
	return (
		<PageLayout>
			<Dropdown>
				<Dropdown.Toggle>wdwd</Dropdown.Toggle>
				<Dropdown.Body>
					<Dropdown.Item>wd</Dropdown.Item>
					<Dropdown.Item>wd</Dropdown.Item>
					<Dropdown.Item>wd</Dropdown.Item>
					<Dropdown.Item>wd</Dropdown.Item>
				</Dropdown.Body>
			</Dropdown>
		</PageLayout>
	);
};
