export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts'], // This assumes your test files are suffixed with .spec.ts
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // Map your paths to the correct directories
  },
};
