/**
 * @type {import('prettier').Options}
 */
export default {
  tabWidth: 4,
  useTabs: true,
  semi: true,
  singleQuote: false,
  trailingComma: "none",
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrder: [
    "<BUILTIN_MODULES>", // Node.js built-in modules
    "<THIRD_PARTY_MODULES>", // Imports not matched by other special words or groups.
    "", // Empty line
    "^@plasmo/(.*)$",
    "",
    "^@plasmohq/(.*)$",
    "",
    "^~(.*)$",
    "",
    "^[./]"
  ]
}
