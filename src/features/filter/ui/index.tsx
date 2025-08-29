import {Checkbox} from "@/shared/components/ui/checkbox.tsx";
import {Label} from "@/shared/components/ui/label.tsx";
import {Input} from "@/shared/components/ui/input.tsx";
import {Button} from "@/shared/components/ui/button.tsx";
import {RadioGroup, RadioGroupItem} from "@/shared/components/ui/radio-group.tsx";

export const Filter = () => {
    return (
        <div className={'w-[250px]'}>

            {/* Title */}
            <h2 className={'text-black font-bold text-[22px]'}>Filtration</h2>

            {/* Фильтрация */}
            <div className={'pt-7.5 pb-6 flex flex-col gap-4 border-b border-[#F6F6F6]'}>
                <div className="flex items-center space-x-2">
                    <Checkbox id="collect" className={'size-6'}/>
                    <Label htmlFor="collect" className={'text-black font-normal text-base'}>
                        You can collect it
                    </Label>
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox id="items" className={'size-6'}/>
                    <Label htmlFor="items" className={'text-black font-normal text-base'}>
                        New items
                    </Label>
                </div>
            </div>

            {/* Цена от и до: */}
            <div className={'pt-6'}>
                <h3 className={'text-black font-bold text-base'}>Price from and to:</h3>
                <div className={'pt-4 pb-7.5 flex items-center gap-4 border-b border-[#F6F6F6]'}>
                    <Input
                        className={'py-2.5 px-4 h-10 w-auto rounded-[10px]'}
                        placeholder={'0'}
                    />
                    <Input
                        className={'py-2.5 px-4 h-10 w-auto rounded-[10px]'}
                        placeholder={'0'}
                    />
                </div>
            </div>

            {/* Ингредиенты: */}
            <div className={'pt-6'}>
                <h3 className={'text-black font-bold text-base'}>Ingredients:</h3>
                <div className={'pt-4 pb-7.5 flex flex-col gap-4 border-b border-[#F6F6F6]'}>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="collect" className={'size-6'}/>
                        <Label htmlFor="collect" className={'text-black font-normal text-base'}>
                            You can collect it
                        </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox id="items" className={'size-6'}/>
                        <Label htmlFor="items" className={'text-black font-normal text-base'}>
                            New items
                        </Label>
                    </div>
                </div>
            </div>

            {/* Тип теста: */}
            <div className={'pt-6'}>
                <h3 className={'text-black font-bold text-base'}>Test type:</h3>
                <div className={'pt-4 pb-7.5 flex flex-col gap-4 border-b border-[#F6F6F6]'}>
                    <RadioGroup defaultValue="option-one">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-one" id="option-one" />
                            <Label htmlFor="option-one">Option One</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-two" id="option-two" />
                            <Label htmlFor="option-two">Option Two</Label>
                        </div>
                    </RadioGroup>
                </div>
            </div>

            <Button className={'w-full py-3.5 h-auto'}>
                Apply
            </Button>
        </div>
    )
}
