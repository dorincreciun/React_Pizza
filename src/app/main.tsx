import {createRoot} from 'react-dom/client'
import './config/index.css'
import {ArrowDownUp} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/shared/components/ui/tabs.tsx";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/shared/components/ui/dropdown-menu.tsx";
import {Header} from "@/widgets/Header/ui";
import {RootProvider} from "@/app/providers/RootProvider.tsx";
import {providers} from "@/app/config/providers.ts";

const Root = () => {
    return (
        <>
            <Header />
            <div className={'pt-10'}>
                <div className="container">
                    <h1 className={'font-extrabold text-black text-4xl pb-5'}>All pizzas</h1>

                    <Tabs defaultValue="all" className="w-full">
                        <div className={'flex items-center justify-between'}>
                            <TabsList className="bg-[#FAFAFA] p-2 rounded-xl flex h-auto">
                                <TabsTrigger value="all" className="py-2.5 px-6">All</TabsTrigger>
                                <TabsTrigger value="meat" className="py-2.5 px-6">Meat</TabsTrigger>
                                <TabsTrigger value="spicy" className="py-2.5 px-6">Spicy</TabsTrigger>
                                <TabsTrigger value="sweet" className="py-2.5 px-6">Sweet</TabsTrigger>
                                <TabsTrigger value="vegetarian" className="py-2.5 px-6">Vegetarian</TabsTrigger>
                                <TabsTrigger value="chicken" className="py-2.5 px-6">Chicken</TabsTrigger>
                            </TabsList>

                            <DropdownMenu>
                                <DropdownMenuTrigger className={'py-4 px-5.5 bg-[#FAFAFA] rounded-xl flex items-center gap-2.5'}>
                                    <ArrowDownUp/>
                                    <span className={'font-normal text-base text-[#202020]'}>Сортировка: <span
                                        className={'text-primary'}>рейтингу</span></span>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator/>
                                    <DropdownMenuItem>Profile</DropdownMenuItem>
                                    <DropdownMenuItem>Billing</DropdownMenuItem>
                                    <DropdownMenuItem>Team</DropdownMenuItem>
                                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>

                        <div className={'flex items-start gap-12 pt-8'}>
                            <div>
                                <TabsContent value="all">
                                    {/*<Filter/>*/}
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

createRoot(document.getElementById('root')!).render(
    <RootProvider providers={providers} app={<Root/>} />
)
