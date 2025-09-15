import type { TitleProps } from "../../model/types/product-info";

export const Title = ({ children }: TitleProps) => {
	return (
		<h1
			className={"text-[32px] leading-5 font-extrabold tracking-[-0.5px]"}
		>
			{children}
		</h1>
	);
};
