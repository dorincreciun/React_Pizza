import { PageLayout } from "../../../shared/layouts/PageLayout.tsx";
import { Button } from "../../../shared/ui/Button";

export const HomePage = () => {
	return (
		<PageLayout>
			<Button
				kind={"default"}
				status={"danger"}
				mode={"no-icon"}
				size={"medium"}
				label={"Home"}
			/>
		</PageLayout>
	);
};
