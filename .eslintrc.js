module.exports = {
  extends: ['@react-native', 'eslint:recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    requireConfigFile: false,
  },
  plugins: ['prettier', 'jsx', 'typescript'],
  root: true,
  rules: {
    'func-style': 'warn',
    'no-duplicate-imports': 'warn',
    'no-ternary': 'off',
    'no-undef': 'warn',
    // Disable the rule for variables, but enable it for functions and classes
    'no-use-before-define': [
      'error',
      {
        classes: true,
        functions: true,
        variables: false,
      },
    ],
    'prettier/prettier': 'off',
    'sort-vars': 'off',
  },
};
