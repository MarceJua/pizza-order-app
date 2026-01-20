import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier"; //prettier config always has to be last
import reactPlugin from "eslint-plugin-react";

/** @type {import("eslint").Linter.Config}  */
export default [
  js.configs.recommended,
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactPlugin.configs.flat["jsx-runtime"],
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
    rules: {
      "react/no-unescaped-entities": "off", // Turning off the rule to allow the use of certain characters directly in JSX
      "react/prop-types": "off", // Disabling prop-types rule as we might be using TypeScript or other type-checking methods
    },
  },

  prettier,
];
