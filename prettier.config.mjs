// @ts-check
/** @type {import("prettier").Config} */
const config = {
    semi: true,
    trailingComma: "none",
    tabWidth: 4,
    printWidth: 120,
    bracketSpacing: true,
    singleQuote: false,
    arrowParens: "always",
    quoteProps: "consistent",
    plugins: ["prettier-plugin-tailwindcss"],
    tailwindFunctions: ["cn"],
    htmlWhitespaceSensitivity: "ignore",
    overrides: [
        {
            files: ["**/.vscode/*.json", "**/tsconfig.json", "**/tsconfig.*.json"],
            options: {
                parser: "json",
                trailingComma: "none"
            }
        },
        {
            files: "*.astro",
            options: {
                parser: "astro"
            }
        }
    ]
};

export default config;