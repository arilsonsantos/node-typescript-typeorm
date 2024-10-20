import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';

// Definir __dirname manualmente no ESM, pois __dirname não está disponível nativamente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Usando compat para manter compatibilidade com configurações antigas
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  {
    files: ['*.ts', '*.tsx'],
    ignores: ['node_modules/*', 'dist/*', 'build/*'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: 'tsconfig-json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-types': 'off',
    },
  },
  {
    files: ['*.js'],
    env: {
      node: true,
      jest: true,
    },
    ignores: ["dist/**/*", "node_modules"]
  },

];
