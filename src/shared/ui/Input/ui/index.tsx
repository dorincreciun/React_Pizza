import { Message } from "./Message.tsx";
import { Icon } from "./Icon.tsx";
import type { InputProps } from "../model/type.ts";

export const Input = ({ iconEnd, iconStart, message, ...rest }: InputProps) => {
	return (
		<div>
			<div>
				{iconStart && <Icon>{iconStart}</Icon>}
				<input {...rest} />
				{iconEnd && <Icon>{iconEnd}</Icon>}
			</div>
			{message && <Message>{message}</Message>}
		</div>
	);
};
