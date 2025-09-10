import createClient from "openapi-fetch";
import type { paths } from "../types/v1";

export const client = createClient<paths>({
	baseUrl: import.meta.env.VITE_API_URL,
});
