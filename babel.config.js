module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: ['CLIENT_ID'],
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@utilities': './src/utilities',
          '@screens': './src/components/screens/',
          '@redux': './src/redux',
          '@common': './src/components/common',
          '@navigation': './src/navigation',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@lib': './src/lib',
          '@assets': './src/assets',
          '@themes': './src/themes',
          '@ui-kit': './src/ui-kit',
          '@models': './src/models',
        },
      },
    ],

    'react-native-reanimated/plugin',
  ],
};
