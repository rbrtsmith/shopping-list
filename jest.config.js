const config = {
  clearMocks: true,
  timers: 'fake',
  collectCoverageFrom: ['src/**/*.{js,ts,tsx}', '!src/**/__tests__/**'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coveragePathIgnorePatterns: ['src/dev.ts', 'src/lambda.ts', 'src/handler.ts'],
  watchPlugins: [
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname'),
  ],
  testPathIgnorePatterns: ['/node_modules/', 'dist'],
  testRegex: '(/__tests__/.*|(\\.|/))test\\.[jt]sx?$',
}

module.exports = config
