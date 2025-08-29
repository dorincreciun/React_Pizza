export const Logo = () => {
    return (
        <div className={'flex items-center justify-center gap-3 flex-shrink-0 select-none'}>
            <img src="/pizza.png" alt="" width={35} height={35}/>
            <div className={'flex flex-col'}>
                <span className={'text-black font-black text-2xl tracking-[1%]'}>NEXT PIZZA</span>
                <span className={'text-[#7B7B7B] text-base font-normal'}>it couldn't be tastier</span>
            </div>
        </div>
    )
}
