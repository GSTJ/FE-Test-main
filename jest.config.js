module.exports = {
  testEnvironment: 'node',
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
  setupFilesAfterEnv: ['<rootDir>/app/services/setupJest.ts'],
};
