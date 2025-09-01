import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import pluginQuery from "@tanstack/eslint-plugin-query";

export default tseslint.config(
    // Ignoră foldere
    globalIgnores(["dist"]),

    // Config general pentru TS/React
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            js.configs.recommended,              // ESLint core
            ...tseslint.configs.recommended,     // TypeScript
            reactHooks.configs["recommended-latest"], // React hooks
            reactRefresh.configs.vite,           // React Refresh (Vite)
            ...pluginQuery.configs["flat/recommended"], // TanStack Query
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
    }
);
