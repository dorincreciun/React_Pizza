import {Button} from "@/shared/components/ui/button.tsx";
import {Plus} from "lucide-react";

export const ProductCard = () => {
    return (
        <div className={'w-full flex flex-col gap-3 justify-between overflow-hidden'}>
            <div className={'flex flex-col gap-3'}>
                <div className={'w-full h-[260px] bg-[#FFF7EE] rounded-2xl flex items-center justify-center overflow-hidden'}>
                    <img src="/pizza-img.png" alt=""/>
                </div>

                <div>
                    <div className={'text-black font-bold text-[22px]'}>Диабло</div>
                    <p className={'text-[#B1B1B1] font-normal text-sm leading-6'}>
                        Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук,
                        моцарелла
                    </p>
                </div>
            </div>

            <div className={'flex items-center justify-between'}>
                <div>
                    <span className={'text-black font-normal text-xl'}>for </span>
                    <span className={'text-black font-bold text-xl'}>$449</span>
                </div>

                <Button variant={'secondary'}
                        className={'bg-[#FFF7EE] flex items-center gap-2 text-primary py-2.5 px-5'}>
                    <Plus/>
                    Add product
                </Button>
            </div>
        </div>
    )
}
