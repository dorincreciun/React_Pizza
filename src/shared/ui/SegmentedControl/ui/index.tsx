import { useCallback, useMemo, useRef, useState } from "react";
import type { SegmentedControlProps } from "../model/types.ts";
import { Button } from "./Button.tsx";
import { Glissant } from "./Glissant.tsx";
import { cn } from "@/shared/utils/cn.ts";

export const SegmentedControl = ({
	properties,
	defaultIndex = 0,
	onChange,
	className,
}: SegmentedControlProps) => {
	const safeDefault = useMemo(
		() =>
			Math.min(
				Math.max(defaultIndex, 0),
				Math.max(properties.length - 1, 0)
			),
		[defaultIndex, properties.length]
	);

	const [activeIndex, setActiveIndex] = useState(safeDefault);
	const wrapperRef = useRef<HTMLDivElement>(null);

	const handleClick = useCallback(
		(index: number) => {
			setActiveIndex(index);
			onChange?.(properties[index], index);
		},
		[onChange, properties]
	);

	if (properties.length === 0) {
		return null;
	}

	return (
		<div
			ref={wrapperRef}
			role="tablist"
			aria-label="Segmented control"
			className={cn(
				"relative flex rounded-[30px] bg-[#ECECEC] p-[2px] select-none",
				"focus-within:ring-2 focus-within:ring-black/10",
				className
			)}
		>
			<Glissant position={activeIndex} segments={properties.length} />

			{properties.map((label, index) => (
				<Button
					key={label || index}
					role="tab"
					aria-selected={index === activeIndex}
					tabIndex={index === activeIndex ? 0 : -1}
					label={label}
					active={index === activeIndex}
					onClick={() => handleClick(index)}
				/>
			))}
		</div>
	);
};
