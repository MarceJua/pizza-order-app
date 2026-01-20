import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier"; //prettier config always has to be last

/** @type {import("eslint").Linter.Config}  */
export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },

  prettier,
];
