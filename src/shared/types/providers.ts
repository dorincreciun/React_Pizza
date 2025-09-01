import type { ComponentType, PropsWithChildren, ReactNode } from "react";

export type Provider<P = unknown> = ComponentType<PropsWithChildren<P>>;
export type ProviderWithProps<P = unknown> = [Provider<P>, P];
export type ProviderEntry = Provider | ProviderWithProps<any>;

export type ProvidersApp = {
    providers: ProviderEntry[];
    app: ReactNode;
};
