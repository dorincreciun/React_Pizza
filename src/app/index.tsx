import {createRoot} from 'react-dom/client'
import {RootProvider} from "./providers/RootProvider.tsx";
import {AppLayout} from "../shared/layouts/AppLayout.tsx";
import {providers} from "./config/providers.ts";
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
    <RootProvider
        providers={providers}
        app={<AppLayout/>}
    />,
)
