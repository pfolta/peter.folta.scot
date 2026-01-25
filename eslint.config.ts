import typescriptEslintEslintPlugin from "@typescript-eslint/eslint-plugin";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import noInlineStyles from "eslint-plugin-no-inline-styles";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        extends: [...nextCoreWebVitals],

        plugins: {
            "@typescript-eslint": typescriptEslintEslintPlugin,
            prettier,
            "no-inline-styles": noInlineStyles
        },

        rules: {
            "no-inline-styles/no-inline-styles": 2,
            "@typescript-eslint/no-unused-vars": ["error"]
        }
    }
]);
