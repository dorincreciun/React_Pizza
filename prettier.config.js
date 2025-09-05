// prettier.config.js

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
	useTabs: true, // folosește taburi în loc de spații
	tabWidth: 4, // lățimea unui tab (vizual) este de 2 spații
	semi: true, // adaugă punct și virgulă la final de instrucțiune
	singleQuote: false, // ghilimele duble pentru stringuri
	trailingComma: "es5", // virgule la final unde e valid (ex: obiecte, array-uri)
	plugins: ["prettier-plugin-tailwindcss"], // plugin Tailwind
	tailwindFunctions: ["clsx", "cn"], // utile dacă folosești clsx/cn
};
