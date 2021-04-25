const { createConfig } = require('../common/jest')

const config = createConfig({
  coveragePathIgnorePatterns: ['src/dev.ts', 'src/lambda.ts', 'src/handler.ts'],
  watchPlugins: [
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname'),
  ],
})

module.exports = config
