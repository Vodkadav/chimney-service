import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import testingLibrary from "eslint-plugin-testing-library";

// eslint-config-next already bundles eslint-plugin-jsx-a11y; do not re-register it.
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.test.{ts,tsx}", "test/**/*.{ts,tsx}"],
    ...testingLibrary.configs["flat/react"],
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "playwright-report/**",
    "test-results/**",
  ]),
]);

export default eslintConfig;
