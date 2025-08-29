import {createRoot} from 'react-dom/client'
import './styles/index.css'
import {Button} from "@/shared/components/ui/button.tsx";
import {Plus, ShoppingBasket, User} from "lucide-react";
import {Input} from "@/shared/components/ui/input.tsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/shared/components/ui/tabs.tsx";
import {Filter} from "@/features/filter";

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

            <div className={'pt-10'}>
                <div className="container">
                    <h1 className={'font-extrabold text-black text-4xl pb-5'}>All pizzas</h1>

                    <Tabs defaultValue="all" className="w-full">
                        <TabsList className="bg-[#FAFAFA] p-1.5 rounded-xl flex h-auto">
                            <TabsTrigger value="all" className="py-2.5 px-6">All</TabsTrigger>
                            <TabsTrigger value="meat" className="py-2.5 px-6">Meat</TabsTrigger>
                            <TabsTrigger value="spicy" className="py-2.5 px-6">Spicy</TabsTrigger>
                            <TabsTrigger value="sweet" className="py-2.5 px-6">Sweet</TabsTrigger>
                            <TabsTrigger value="vegetarian" className="py-2.5 px-6">Vegetarian</TabsTrigger>
                            <TabsTrigger value="chicken" className="py-2.5 px-6">Chicken</TabsTrigger>
                        </TabsList>

                        <div className={'flex items-start gap-12 pt-8'}>
                            <Filter />
                            <div>
                                <TabsContent value="all">


                                    <div className={'w-[260px]'}>
                                        <div className={'size-[260px] bg-[#FFF7EE] rounded-2xl overflow-hidden'}>

                                        </div>

                                        <div className={'py-3'}>
                                            <div className={'text-black font-bold text-[22px]'}>Диабло</div>
                                            <p className={'text-[#B1B1B1] font-normal text-sm leading-6'}>
                                                Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла
                                            </p>
                                        </div>

                                        <div className={'flex items-center justify-between'}>
                                            <div>
                                                <span className={'text-black font-normal text-xl'}>from </span>
                                                <span className={'text-black font-bold text-xl'}>$ 449</span>
                                            </div>

                                            <Button variant={'secondary'} className={'bg-[#FFF7EE] flex items-center gap-2 text-primary py-2.5 px-5'}>
                                                <Plus />
                                                Add
                                            </Button>
                                        </div>
                                    </div>


                                </TabsContent>
                                <TabsContent value="meat">
                                    Контент для мясных пицц.
                                </TabsContent>
                                <TabsContent value="spicy">
                                    Контент для острых пицц.
                                </TabsContent>
                                <TabsContent value="sweet">
                                    Контент для сладких пицц.
                                </TabsContent>
                                <TabsContent value="vegetarian">
                                    Контент для вегетарианских пицц.
                                </TabsContent>
                                <TabsContent value="chicken">
                                    Контент для пицц с курицей.
                                </TabsContent>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

createRoot(document.getElementById('root')!).render(<Root/>)