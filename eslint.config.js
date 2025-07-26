// eslint.config.js
import vue from 'eslint-plugin-vue'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettier from 'eslint-config-prettier'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.url,
})

export default {
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended', 'prettier'],
}

// export default [
//   ...compat.extends('plugin:@typescript-eslint/recommended'),
//   ...compat.extends('plugin:vue/vue3-recommended'),
//   ...compat.extends('prettier'),

//   {
//     files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       sourceType: 'module',
//     },
//     rules: {},
//   },
//   {
//     files: ['**/*.ts', '**/*.tsx'],
//     languageOptions: {
//       parser: tsParser,
//       parserOptions: {
//         project: './tsconfig.json',
//         tsconfigRootDir: new URL('.', import.meta.url),
//         ecmaVersion: 2020,
//         sourceType: 'module',
//       },
//     },
//     plugins: {
//       '@typescript-eslint': ts,
//     },
//   },
//   {
//     files: ['**/*.vue'],
//     languageOptions: {
//       parser: tsParser,
//       parserOptions: {
//         project: './tsconfig.json',
//         tsconfigRootDir: new URL('.', import.meta.url),
//         ecmaVersion: 2020,
//         sourceType: 'module',
//         extraFileExtensions: ['.vue'],
//       },
//     },
//     plugins: {
//       vue,
//     },
//   },
// ];
