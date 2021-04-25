const { createConfig } = require('../common/jest')

const config = createConfig({
  coveragePathIgnorePatterns: ['src/api/dev.ts', 'src/api/lambda.ts'],
  watchPlugins: [
    require.resolve('jest-watch-typeahead/filename'),
    require.resolve('jest-watch-typeahead/testname'),
  ],
})

module.exports = config
