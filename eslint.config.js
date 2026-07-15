// @ts-check
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default tseslint.config(
  // Reglas base de JS
  eslint.configs.recommended,

  // Reglas de TypeScript
  ...tseslint.configs.recommended,

  // Reglas de Astro (incluye el parser para archivos .astro)
  ...eslintPluginAstro.configs.recommended,

  // Configuración personalizada
  {
    rules: {
      // Ajusta a tu gusto
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
    },
  },

  // Reglas específicas para archivos .astro (opcional)
  {
    files: ['**/*.astro'],
    rules: {
      // Ejemplo: desactivar reglas que no aplican bien en frontmatter
      'no-undef': 'off',
    },
  },

  // Ignorar carpetas de build/salida
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**'],
  }
);