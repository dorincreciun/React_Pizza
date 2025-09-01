import type {Provider, ProviderEntry, ProvidersApp} from "../../shared/types/providers.ts";
import type {ReactNode} from "react";

export const RootProvider = ({providers, app}: ProvidersApp) => {
    return providers.reduceRight<ReactNode>((acc, entry: ProviderEntry) => {
        if (Array.isArray(entry)) {
            const [Comp, props] = entry as [Provider<any>, Record<string, unknown>];
            return <Comp {...props}>{acc}</Comp>;
        }
        const Comp = entry as Provider<any>;
        return <Comp>{acc}</Comp>;
    }, app);
};
