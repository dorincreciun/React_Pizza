import { AddonItem } from "./AddonItem.tsx";
import { type FC, useState } from "react";
import type { SelectAddonProps } from "../model/type.ts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from "swiper/modules";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "swiper/css";

export const SelectAddons: FC<SelectAddonProps> = ({ addons, onChange }) => {
	const [activeAddon, setActiveAddon] = useState<number | null>(0);

	const handleSelect = (index: number) => {
		setActiveAddon(index);
		onChange(addons[index]);
	};

	return (
		<div className="">
			<div className="pb-4 text-base font-semibold">Ингредиенты</div>
			<div>
				<Swiper
					modules={[Virtual]}
					spaceBetween={14}
					slidesPerView={3}
					virtual
				>
					{addons.map((addon, index) => (
						<SwiperSlide key={index} virtualIndex={index}>
							<AddonItem
								image={addon.image}
								name={addon.name}
								price={addon.price}
								isActive={activeAddon === index}
								onClick={() => handleSelect(index)}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

/* React DevTools */
SelectAddons.displayName = "Features SelectAddons";
