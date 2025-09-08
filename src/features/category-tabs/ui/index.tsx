import {CategoryTabs} from "./CategoryTabs.tsx";

export const SectionCategoryTabs = () => {
    return (
        <div className={'pt-10 pb-9 flex flex-col gap-5'}>
            <h1 className={'font-extrabold text-4xl text-black'}>Все пиццы</h1>
            <CategoryTabs />
        </div>
    )
}
