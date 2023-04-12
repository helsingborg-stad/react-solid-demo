/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "no-void": ["error", { allowAsStatement: true }],
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "warn",
  },
};

module.exports = config;
