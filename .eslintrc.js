module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript-prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prettier/prettier': ['error'],
    '@typescript-eslint/indent': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
