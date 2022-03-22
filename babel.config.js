module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'module-resolver',
    {
      root: './src',
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      alias: {
        tests: ['./tests/'],
        '@assets': './src/assets',
        '@atoms': './src/components/atoms',
        '@molecules': './src/components/molecules',
        '@organisms': './src/components/organisms',
        '@types': './src/types',
      },
    },
  ],
};
