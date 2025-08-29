import {createRoot} from 'react-dom/client'
import './styles/index.css'
import {Button} from "@/shared/components/ui/button.tsx";
import {ShoppingBasket, User} from "lucide-react";
import {Input} from "@/shared/components/ui/input.tsx";

const Root = () => {
    return (
        <>
            <div className={'w-full py-10 border-b border-[#EDEDED]'}>
                <div className={'container flex items-center justify-between gap-10'}>

                    {/* Logo */}
                    <div className={'flex items-center justify-center gap-3 flex-shrink-0 select-none'}>
                        <img src="/pizza.png" alt="" width={35} height={35}/>
                        <div className={'flex flex-col'}>
                            <span className={'text-black font-black text-2xl tracking-[1%]'}>NEXT PIZZA</span>
                            <span className={'text-[#7B7B7B] text-base font-normal'}>it couldn't be tastier</span>
                        </div>
                    </div>

                    {/* Search */}
                    <Input
                        className={'bg-[#F9F9F9] py-3 px-5 h-12.5'}
                        placeholder={'Searching for pizza...'}
                    />

                    {/* User action */}
                    <div className={'flex items-center gap-4'}>
                        <Button variant={'outline'} className={'h-12.5 !px-5.5'}>
                            <User/>
                            Войти
                        </Button>
                        <Button variant={'outline'} className={'size-12.5'}>
                            <ShoppingBasket/>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

createRoot(document.getElementById('root')!).render(<Root/>)