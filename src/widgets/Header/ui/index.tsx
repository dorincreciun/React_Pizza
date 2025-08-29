import {Logo} from "./Logo";
import {Search} from "@/features/search";
import {UserAction} from "@/widgets/Header/ui/UserAction.tsx";

export const Header = () => {
    return (
        <header className={'w-full py-10 border-b border-[#EDEDED]'}>
            <div className={'container flex items-center justify-between gap-10'}>
                <Logo />
                <Search />
                <UserAction />
            </div>
        </header>
    )
}
