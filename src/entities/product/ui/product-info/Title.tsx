import type { TitleProps } from "@/entities/product/model/types.ts";

export const Title = ({ title }: TitleProps) => {
	return (
		<h1
			className={"text-[32px] leading-5 font-extrabold tracking-[-0.5px]"}
		>
			{title}
		</h1>
	);
};
