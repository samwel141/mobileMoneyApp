module.exports = {
  env: {
    production: {
      plugins: ['react-native-paper/babel', [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ]],
    },
  },
  presets: ['module:metro-react-native-babel-preset'],
};
