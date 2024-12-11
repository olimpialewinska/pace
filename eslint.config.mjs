import { fixupConfigRules } from "@eslint/compat";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/dist",
        "**/eslint.config.mjs",
        "**/postcss.config.js",
        "**/tailwind.config.ts",
        "**/postcss.config.js",
        "**/coverage",
        "**/.cache/Cypress/**"
    ],
}, ...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
)), {
    plugins: {
        "react-refresh": reactRefresh,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",

        parserOptions: {
            project: ["./tsconfig.json", "./tsconfig.node.json"],
            tsconfigRootDir: __dirname,
        },
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "react-refresh/only-export-components": ["warn", {
            allowConstantExport: true,
        }],

        "spaced-comment": "error",
        "no-duplicate-imports": "error",
        "prefer-template": "warn",
        "no-param-reassign": "warn",
        "no-redeclare": "warn",
        "no-useless-rename": "warn",
        "prefer-spread": "warn",
        "no-implicit-coercion": "warn",
        "prefer-const": "warn",

        quotes: ["error", "double", {
            avoidEscape: true,
        }],

        "@typescript-eslint/unbound-method": ["error", {
            ignoreStatic: true,
        }],

        "@typescript-eslint/no-confusing-void-expression": ["error", {
            ignoreArrowShorthand: true,
        }],

        "@typescript-eslint/no-extraneous-class": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
    },
}, {
    files: ["**/src/components/ui/**/*.{js,ts,jsx,tsx}"],
    rules: {
        "react/prop-types": "off",
        "react-refresh/only-export-components": "off",
    },
}];
