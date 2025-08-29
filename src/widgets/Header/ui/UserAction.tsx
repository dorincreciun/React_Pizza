import {Button} from "@/shared/components/ui/button.tsx";
import {ShoppingBasket, User} from "lucide-react";

export const UserAction = () => {
    return (
        <div className={'flex items-center gap-4'}>
            <Button variant={'outline'} className={'h-12.5 !px-5.5'}>
                <User/>
                Войти
            </Button>
            <Button variant={'outline'} className={'size-12.5'}>
                <ShoppingBasket/>
            </Button>
        </div>
    )
}
