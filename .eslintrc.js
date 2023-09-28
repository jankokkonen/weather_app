module.exports = {
    root: true,
    env: {
      browser: true,
      es2021: true,
    },
    extends: ['plugin:@typescript-eslint/recommended', 'eslint:recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
      // Määritä säännöt tässä tarpeidesi mukaan
    },
  };
  