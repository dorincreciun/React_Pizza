import type {ComponentType, PropsWithChildren, ReactNode} from "react";

export type ProviderComponent = ComponentType<PropsWithChildren>;

export type ProviderProps = {
    providers: ProviderComponent[];
    app: ReactNode;
};
