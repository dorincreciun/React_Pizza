import type {ProviderEntry} from "../../shared/types/providers.ts";
import {QueryClientProvider} from '@tanstack/react-query'
import {StrictMode} from "react";
import {BrowserRouter} from "react-router";
import {queryClient} from "./queryClient.ts";

export const providers: ProviderEntry[] = [
    StrictMode,                               // fără props
    BrowserRouter,                            // fără props obligatorii
    [QueryClientProvider, { client: queryClient }], // cu props
];
