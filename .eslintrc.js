module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        //# region typescript
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react-native/no-inline-styles': 'off',
        //# endregion
        //# region react hooks //
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
        //# endregion
      },
    },
  ],
};
