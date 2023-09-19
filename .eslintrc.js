"use strict";
module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:sonarjs/recommended", "prettier"],
  plugins: ["sonarjs", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  ignorePatterns: ["node_modules/"],
  rules: {
    "no-console": "error",
    strict: "error",
    "linebreak-style": "error",
    "max-len": ["error", { code: 100 }], // common values 80,100,120
    "no-mixed-requires": "error",
    "no-process-exit": "error",
    "prefer-arrow-callback": "error",
    semi: [1, "always"],
    // "comma-dangle": 1,
    // "quotes": [2, "double"],
    "max-lines": [
      "error",
      { max: 500, skipBlankLines: true, skipComments: true },
    ], // common values 100,200,300
    "no-unused-vars": "error",
    "sonarjs/cognitive-complexity": "error",
    "sonarjs/prefer-immediate-return": 0,
    "sonarjs/no-identical-expressions": "error",
    "prettier/prettier": ["error"],
  },
};
