import type {ProviderProps} from "@/shared/types/providers.ts";

export const RootProvider = ({providers, app}: ProviderProps) => {
    return providers.reduceRight((acc, Provider) => {
        return <Provider>{acc}</Provider>
    }, app)
}
