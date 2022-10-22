const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    ...tsjPreset.transform,
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/src/$1',
    "^.+\\.scss$": 'jest-scss-transform',
  },
  "transformIgnorePatterns": ["/node_modules/@react-native-community/async-storage/(?!(lib))"],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  // This is the only part which you can keep
  // from the above linked tutorial's config:
  cacheDirectory: '.jest/cache',
};