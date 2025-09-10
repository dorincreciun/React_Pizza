import { useState } from "react";
import type { SegmentedControlProps } from "../model/types.ts";
import { Button } from "./Button.tsx";
import { Glissant } from "./Glissant.tsx";
import { cn } from "../../../utils/cn.ts";

export const SegmentedControl = ({
	properties,
	defaultIndex = 0,
	onChange,
	className,
}: SegmentedControlProps) => {
	const [activeIndex, setActiveIndex] = useState(
		Math.min(Math.max(defaultIndex, 0), Math.max(properties.length - 1, 0))
	);

	const handleClick = (index: number) => {
		setActiveIndex(index);
		onChange?.(properties[index], index);
	};

	if (properties.length === 0) {
		return;
	}

	return (
		<div
			className={cn(
				"relative flex rounded-[30px] bg-[#ECECEC] p-[2px] select-none",
				className
			)}
		>
			<Glissant position={activeIndex} segments={properties.length} />

			{properties.map((label, index) => (
				<Button
					key={label || index}
					label={label}
					active={index === activeIndex}
					onClick={() => handleClick(index)}
				/>
			))}
		</div>
	);
};
