import { useState } from "react";

const sizes = ["Маленькая", "Средняя", "Большая"];

export const SizeSelector = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="relative flex rounded-[30px] bg-[#ECECEC] p-[2px]">
			{/* Indicator glisant */}
			<div
				className="absolute top-[2px] left-[2px] h-[calc(100%-4px)] w-1/3 rounded-[30px] bg-white transition-transform duration-300 ease-in-out"
				style={{
					transform: `translateX(${activeIndex * 100}%)`,
				}}
			/>

			{/* Butoane */}
			{sizes.map((label, index) => (
				<button
					key={label}
					onClick={() => setActiveIndex(index)}
					className="relative z-10 flex-1 rounded-[30px] px-10 py-2 text-center"
				>
					{label}
				</button>
			))}
		</div>
	);
};
