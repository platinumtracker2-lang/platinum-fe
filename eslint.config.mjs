import js from "@eslint/js";
import babelParser from "@babel/eslint-parser";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["next/babel"],
        },
      },
      globals: {
        React: "readable",
        process: "readable",
        module: "readable",
        require: "readable",
        __dirname: "readable",
        __filename: "readable",
        console: "readable",
        window: "readable",
        document: "readable",
        setTimeout: "readable",
        clearInterval: "readable",
        setInterval: "readable",
        AbortSignal: "readable",
        fetch: "readable",
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "off",
    },
  },
];
