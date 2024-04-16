module.exports = {
  root: true,
  env: { browser: true, es2020: true, "jest/globals": true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "airbnb", 
    "airbnb-typescript"
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", ".github/**", "jest.config.mjs", "babel.config.cjs", "cypress.config.ts", "cypress/support"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "jest"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.node.json", "./cypress/tsconfig.json"],
  }
};
