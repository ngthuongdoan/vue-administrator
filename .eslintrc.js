module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    // "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  exclude: ["node_modules", "plop-templates"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
